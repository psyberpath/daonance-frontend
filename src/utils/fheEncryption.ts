/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * FHE Vote Encryption Utility
 *
 * Uses @zama-fhe/relayer-sdk to encrypt votes with real FHE operations.
 * Falls back gracefully if encryption is unavailable.
 */

// Since we bypass Vite via CDN, we type the FhevmInstance minimally
export type FhevmInstance = any;

let fhevmInstance: FhevmInstance | null = null;
let sdkInitialized = false;

/**
 * Initialize the fhEVM relayer SDK instance for Sepolia via CDN.
 */
async function getInstance(): Promise<FhevmInstance> {
  if (fhevmInstance) return fhevmInstance;

  // Poll for the global script injection to load
  let retries = 0;
  while (typeof (window as any).relayerSDK === "undefined") {
    if (retries > 50) throw new Error("Zama Relayer SDK CDN failed to load");
    await new Promise((resolve) => setTimeout(resolve, 100));
    retries++;
  }

  const relayerSDK = (window as any).relayerSDK;

  if (!sdkInitialized) {
    await relayerSDK.initSDK();
    sdkInitialized = true;
  }

  const config = { ...relayerSDK.SepoliaConfig, network: window.ethereum };
  fhevmInstance = await relayerSDK.createInstance(config);
  return fhevmInstance!;
}

/**
 * Encrypt a vote using FHE
 * @param voteValue 1 for YES, 0 for NO
 * @param contractAddress Target contract address
 * @param userAddress User's wallet address
 * @returns Encrypted handle and proof
 */
export async function encryptVote(
  voteValue: number,
  contractAddress: string,
  userAddress: string,
): Promise<{ encryptedHandle: string; inputProof: string }> {
  try {
    const instance = await getInstance();

    // Create an encrypted input buffer bound to the contract + user
    const buffer = instance.createEncryptedInput(contractAddress, userAddress);
    buffer.add32(BigInt(voteValue));

    // Encrypt + upload via relayer, returns handles + proof
    const ciphertexts = await buffer.encrypt();

    if (!ciphertexts || !ciphertexts.handles || !ciphertexts.handles[0]) {
      throw new Error("Encryption failed: invalid response from FHE provider");
    }

    // SDK returns Uint8Array — convert to hex strings for ethers contract calls
    const toHex = (bytes: Uint8Array) =>
      "0x" + Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");

    return {
      encryptedHandle: toHex(ciphertexts.handles[0]),
      inputProof: toHex(ciphertexts.inputProof),
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown encryption error";
    console.error("[FHE Encryption Error]", message);
    throw new Error(`Failed to encrypt vote: ${message}`);
  }
}

/**
 * Check if FHE encryption is available in the current environment
 */
export function isFHEAvailable(): boolean {
  if (typeof window === "undefined") return false;
  return !!window.ethereum;
}
