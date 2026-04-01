import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="container nav-wrap">
        <Link to="/" className="brand">
          <img src="/assets/trans-house-logo.png" alt="Trans House logo" />
          <div>
            <strong>Trans House</strong>
            <span>Connecting Trans Hearts</span>
          </div>
        </Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <a href="#features">Features</a>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms</Link>
          <Link to="/delete-account">Delete Account</Link>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Trans House. All rights reserved.</p>
        <p>
          Domain: <a href="https://transshouse.tech">transshouse.tech</a>
        </p>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <main>
      <section className="hero-section container">
        <div className="hero-copy">
          <p className="tag">New-Age Community Platform</p>
          <h1>Welcome to Trans House</h1>
          <p>
            A safe and vibrant space for live streaming, real-time video, and
            meaningful chatting. Build your community, share your story, and
            connect with people who truly understand you.
          </p>
          <div className="cta-group">
            <a className="btn btn-primary" href="#">
              Start Streaming
            </a>
            <a className="btn btn-secondary" href="#features">
              Explore Features
            </a>
          </div>
        </div>
        <div className="hero-card">
          <img src="/assets/trans-house-logo.png" alt="Trans House visual mark" />
        </div>
      </section>

      <section id="features" className="container features-section">
        <h2>Core Features</h2>
        <div className="grid">
          <article className="card">
            <h3>Live Streaming</h3>
            <p>
              Go live instantly and engage your audience through seamless HD
              streams with low-latency interaction.
            </p>
          </article>
          <article className="card">
            <h3>Video Rooms</h3>
            <p>
              Host private or public video sessions for events, group talks,
              and one-on-one support conversations.
            </p>
          </article>
          <article className="card">
            <h3>Smart Chat</h3>
            <p>
              Real-time personal and community chat channels with rich media,
              reactions, and moderation-friendly controls.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}

function LegalPage({ title, children }) {
  return (
    <main className="container legal-page">
      <h1>{title}</h1>
      <div className="legal-content">{children}</div>
    </main>
  )
}

function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        Effective date: April 1, 2026. This Privacy Policy describes how Trans
        House (available at <strong>transshouse.tech</strong>) collects, uses,
        stores, and protects your information when you use our live streaming,
        video, and chat services.
      </p>
      <p>
        We may collect account information (name, email, profile details),
        device and log data (IP address, browser/app type, timestamps), and
        usage data (feature interactions, stream activity, chat metadata) to
        provide core functionality, maintain security, and improve performance.
      </p>
      <p>
        Payment-related information is processed by third-party payment gateways
        and processors. We do not store full card numbers or sensitive payment
        credentials on our own servers. Payment providers may process billing
        details in accordance with their own privacy policies and compliance
        requirements.
      </p>
      <p>
        We do not sell personal data. We may share limited data with trusted
        service providers for hosting, analytics, content moderation, security,
        fraud prevention, customer support, and payment operations, only to the
        extent necessary to deliver services.
      </p>
      <p>
        You may request access, correction, or deletion of your personal data,
        subject to legal obligations and legitimate safety requirements. To
        submit a privacy request, contact us at{' '}
        <strong>transshouse.com@gmail.com</strong>.
      </p>
      <p>
        We implement reasonable technical and organizational safeguards, but no
        digital platform can guarantee absolute security. By using the service,
        you acknowledge and accept this risk.
      </p>
      <p>
        We may update this Privacy Policy from time to time. Continued use of
        Trans House after updates indicates acceptance of the revised policy.
      </p>
    </LegalPage>
  )
}

function TermsAndConditions() {
  return (
    <LegalPage title="Terms and Conditions">
      <p>
        Effective date: April 1, 2026. By accessing or using Trans House at{' '}
        <strong>transshouse.tech</strong>, you agree to these Terms and
        Conditions. If you do not agree, please do not use the platform.
      </p>
      <p>
        You are responsible for all activity under your account and must provide
        accurate registration information. You agree not to use the service for
        unlawful, abusive, harassing, hateful, fraudulent, or harmful behavior.
      </p>
      <p>
        Trans House may remove content, restrict features, suspend, or terminate
        accounts that violate community standards, applicable law, intellectual
        property rights, or platform safety rules.
      </p>
      <p>
        Paid services, subscriptions, virtual goods, or premium features (if
        offered) are billed through approved payment gateways. Prices, taxes,
        billing cycles, and refund eligibility are shown during checkout.
        Unless required by law or explicitly stated otherwise, fees already paid
        are non-refundable.
      </p>
      <p>
        You are responsible for any taxes, transaction charges, and currency
        conversion fees applicable to your purchases. Failed or reversed
        payments may result in suspension of paid features until dues are
        cleared.
      </p>
      <p>
        The platform is provided on an &quot;as is&quot; and &quot;as
        available&quot; basis. While we work to provide reliable service, we do
        not guarantee uninterrupted access, error-free performance, or specific
        outcomes.
      </p>
      <p>
        To the maximum extent allowed by law, Trans House is not liable for
        indirect, incidental, special, or consequential damages arising from use
        of the platform. Your continued use of Trans House constitutes
        acceptance of these Terms.
      </p>
    </LegalPage>
  )
}

function DeleteAccount() {
  return (
    <LegalPage title="Delete Account">
      <p>
        You may request deletion of your Trans House account and associated
        personal data at any time.
      </p>
      <p>
        Send your request from your registered account email to:{' '}
        <strong>transshouse.com@gmail.com</strong>
      </p>
      <p>
        Please include your username, registered email, and a clear request
        stating that you want permanent account deletion.
      </p>
      <p>
        We typically verify and process deletion requests within 7 to 15
        business days. Some information may be retained for a limited period
        where required for legal compliance, fraud prevention, dispute
        resolution, or enforcement of our terms.
      </p>
      <p>
        Once deletion is completed, access to your account and related profile
        data will be permanently removed, except for any data we are legally
        required to keep.
      </p>
    </LegalPage>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
