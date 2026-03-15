import { Link } from "react-router-dom";

export function Landing() {
  return (
    <div className="landing">
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-badge">BUILT ON ZAMA fhEVM</div>
        <h1 className="hero-title">
          Vote without <span className="hero-highlight">revealing</span> your vote.
        </h1>
        <p className="hero-subtitle">
          DAOnance brings Fully Homomorphic Encryption to on-chain governance.
          Your vote stays encrypted — the contract tallies results homomorphically without ever seeing individual choices.
        </p>
        <div className="hero-actions">
          <Link to="/proposals" className="btn btn-primary btn-lg">
            Launch App →
          </Link>
          <a
            href="https://github.com/psyberpath/daonance-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-lg"
          >
            View Source
          </a>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="landing-section">
        <h2 className="section-heading">How It Works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <h3 className="step-title">Create a Proposal</h3>
            <p className="step-desc">
              Anyone can submit a governance question with a title, description, deadline, and voter cap.
            </p>
          </div>
          <div className="step-card">
            <div className="step-number">02</div>
            <h3 className="step-title">Cast Encrypted Votes</h3>
            <p className="step-desc">
              Voters encrypt their YES or NO choice off-chain. The contract uses FHE.select to route votes — no branching, no leaks.
            </p>
          </div>
          <div className="step-card">
            <div className="step-number">03</div>
            <h3 className="step-title">Reveal Results</h3>
            <p className="step-desc">
              After the deadline, the encrypted tallies are decrypted via Zama's KMS relayer with cryptographic proof verification.
            </p>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="landing-section">
        <h2 className="section-heading">Why DAOnance</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3 className="feature-title">True Vote Privacy</h3>
            <p className="feature-desc">
              Individual votes are never decrypted on-chain. Not even the smart contract sees how you voted.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">➕</div>
            <h3 className="feature-title">Homomorphic Tallying</h3>
            <p className="feature-desc">
              YES and NO counts are accumulated using FHE.add — math on encrypted data, zero decryption required.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3 className="feature-title">Proof-Verified Reveal</h3>
            <p className="feature-desc">
              Results are finalized permissionlessly. Anyone can verify the KMS threshold signature before tallies are stored.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⛓️</div>
            <h3 className="feature-title">Fully On-Chain</h3>
            <p className="feature-desc">
              No off-chain vote collection. Every encrypted vote is a Sepolia transaction, immutable and auditable.
            </p>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="landing-section">
        <h2 className="section-heading">Tech Stack</h2>
        <div className="tech-row">
          <div className="tech-chip">Solidity</div>
          <div className="tech-chip">Zama fhEVM</div>
          <div className="tech-chip">Hardhat</div>
          <div className="tech-chip">React</div>
          <div className="tech-chip">Vite</div>
          <div className="tech-chip">ethers.js v6</div>
          <div className="tech-chip">Sepolia Testnet</div>
          <div className="tech-chip">Relayer SDK</div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="landing-cta">
        <h2 className="cta-title">Ready to vote privately?</h2>
        <p className="cta-desc">Connect your MetaMask, create a proposal, and see homomorphic encryption in action.</p>
        <Link to="/proposals" className="btn btn-primary btn-lg">
          Launch App →
        </Link>
      </section>
    </div>
  );
}
