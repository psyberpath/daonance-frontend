import { useNavigate } from "react-router-dom";

export function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* ── 1. Hero Section ── */}
      <section className="hero-section">
        <div className="hero-tag">
          <div className="dot" /> POWERED BY ZAMA fhEVM
        </div>
        
        <h1 className="hero-title">
          Vote without <span>revealing</span> your choice.
        </h1>
        
        <p className="hero-subtitle">
          DAOnance is the first on-chain governance platform where votes remain encrypted at all times. 
          Smart contracts tally your votes homomorphically—zero knowledge, maximum trust.
        </p>
        
        <div className="hero-buttons">
          <button className="btn-premium" onClick={() => navigate("/proposals")}>
            Launch App
          </button>
          <a
            href="https://github.com/psyberpath/daonance-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View Source
          </a>
        </div>

        {/* ── Show, Don't Tell: Visual Encryption Mockup ── */}
        <div className="hero-mockup">
          <div className="mockup-header">
            <h3 className="mockup-title">On-Chain State</h3>
            <span className="mockup-badge">LIVE · SEPOLIA</span>
          </div>
          <div className="mockup-row">
            <span className="mockup-label">Proposal #102: Upgrade Treasury</span>
            <span className="mockup-value">Active</span>
          </div>
          <div className="mockup-row">
            <span className="mockup-label">Voter 0x7a...9b12</span>
            <span className="mockup-encrypted">0x8dbf72...a1f6 (Encrypted YES)</span>
          </div>
          <div className="mockup-row">
            <span className="mockup-label">Voter 0xf4...c321</span>
            <span className="mockup-encrypted">0x3fa...e92d (Encrypted NO)</span>
          </div>
          <div className="mockup-row" style={{ borderBottom: "none", paddingBottom: 0 }}>
            <span className="mockup-label">Current Tally</span>
            <span className="mockup-encrypted">FHE.add(encryptedYes, encryptedNo)</span>
          </div>
        </div>
      </section>

      {/* ── 2. Features Grid ── */}
      <section className="features-section">
        <h2 className="section-title">The Privacy Layer for DAOs</h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-number">01</div>
            <h3 className="feature-name">True Vote Privacy</h3>
            <p className="feature-desc">
              Your vote is encrypted off-chain using Zama's Relayer SDK. The smart contract executes logic over the encrypted bits—it never sees your choice.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-number">02</div>
            <h3 className="feature-name">Homomorphic Tallying</h3>
            <p className="feature-desc">
              Using FHE.select and FHE.add, the contract accumulates YES and NO votes homomorphically. Math works directly on the ciphertext.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-number">03</div>
            <h3 className="feature-name">Proof-Verified Reveal</h3>
            <p className="feature-desc">
              When voting ends, anyone can request a reveal. Tallies are decrypted via the KMS relayer using strict cryptographic signature checks.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Call To Action ── */}
      <section className="cta-section">
        <h2 className="cta-title">Build a private treasury today.</h2>
        <button className="btn-premium" onClick={() => navigate("/create")}>
          Create a Proposal
        </button>
        
        <div className="tech-stack">
          <span className="tech-item">Solidity</span>
          <span className="tech-item">Zama fhEVM</span>
          <span className="tech-item">ethers.js v6</span>
          <span className="tech-item">Relayer SDK</span>
          <span className="tech-item">React + Vite</span>
        </div>
      </section>
    </div>
  );
}
