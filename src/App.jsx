import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Hero Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.animationPlayState = 'running';
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-in').forEach(el => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="top">
      {/* ═══ TOP BAR ═══ */}
      <div className="top-bar">
        <div className="container">
          <span>Licensed & Certified Infrared Thermographers</span>
          <a href="tel:+15551234567">(555) 123-4567</a>
        </div>
      </div>

      {/* ═══ HEADER / NAV ═══ */}
      <header className="header">
        <div className="container">
          <a href="#top" className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
            </div>
            <div className="logo-text">
              <h1>Thermal Pro<br/>Inspections</h1>
              <span>Infrared Thermographic Services</span>
            </div>
          </a>
          <nav className={`nav ${navOpen ? 'open' : ''}`} id="mainNav">
            <a href="#top">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#quote" className="cta-btn">Get a Quote</a>
          </nav>
          <div className="mobile-toggle" onClick={() => setNavOpen(!navOpen)}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </header>

      {/* ═══ HERO SLIDER ═══ */}
      <section className="hero">
        <div className="hero-slides" id="heroSlides">
          <div className={`hero-slide ${currentSlide === 0 ? 'active' : ''}`}>
            <div className="hero-slide-bg" style={{ backgroundImage: "url('/images/hero_roof_scan.png')" }}></div>
            <div className="hero-content">
              <span className="tag">Roof Inspections</span>
              <h2>Infrared Roof<br/>Moisture Scans</h2>
              <p>Roof maintenance and inspection is a multi-billion dollar industry. Learn the benefits of infrared technology and why you should have your roof inspected.</p>
              <div className="hero-btns">
                <a href="#services" className="btn btn-primary">Learn More</a>
                <a href="#quote" className="btn btn-outline">Request Pricing</a>
              </div>
            </div>
          </div>

          <div className={`hero-slide ${currentSlide === 1 ? 'active' : ''}`}>
            <div className="hero-slide-bg" style={{ backgroundImage: "url('/images/hero_energy_audit.png')" }}></div>
            <div className="hero-content">
              <span className="tag">Energy Audits</span>
              <h2>Commercial<br/>Energy Audits</h2>
              <p>Thermal imaging is a valuable tool when performing energy audits and assessments for commercial buildings.</p>
              <div className="hero-btns">
                <a href="#services" className="btn btn-primary">Learn More</a>
                <a href="#quote" className="btn btn-outline">Request Pricing</a>
              </div>
            </div>
          </div>

          <div className={`hero-slide ${currentSlide === 2 ? 'active' : ''}`}>
            <div className="hero-slide-bg" style={{ backgroundImage: "url('/images/hero_aerial_survey.png')" }}></div>
            <div className="hero-content">
              <span className="tag">Aerial Imaging</span>
              <h2>Aerial Infrared<br/>Surveys</h2>
              <p>Aerial infrared roof inspections offer great benefits for large commercial and industrial complexes.</p>
              <div className="hero-btns">
                <a href="#services" className="btn btn-primary">Learn More</a>
                <a href="#quote" className="btn btn-outline">Request Pricing</a>
              </div>
            </div>
          </div>

          <div className={`hero-slide ${currentSlide === 3 ? 'active' : ''}`}>
            <div className="hero-slide-bg" style={{ backgroundImage: "url('/images/hero_radiant_heat.png')" }}></div>
            <div className="hero-content">
              <span className="tag">Radiant Heat</span>
              <h2>Radiant Heat<br/>Leak Detection</h2>
              <p>Something as important as concealed radiant heat piping should be monitored on an annual basis.</p>
              <div className="hero-btns">
                <a href="#services" className="btn btn-primary">Learn More</a>
                <a href="#quote" className="btn btn-outline">Request Pricing</a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-nav" id="heroDots">
          <div className={`hero-dot ${currentSlide === 0 ? 'active' : ''}`} onClick={() => setCurrentSlide(0)}></div>
          <div className={`hero-dot ${currentSlide === 1 ? 'active' : ''}`} onClick={() => setCurrentSlide(1)}></div>
          <div className={`hero-dot ${currentSlide === 2 ? 'active' : ''}`} onClick={() => setCurrentSlide(2)}></div>
          <div className={`hero-dot ${currentSlide === 3 ? 'active' : ''}`} onClick={() => setCurrentSlide(3)}></div>
        </div>
      </section>

      {/* ═══ SERVICE HIGHLIGHTS ═══ */}
      <section className="service-highlights">
        <div className="container">
          <div className="highlights-grid">
            <div className="highlight-card animate-in delay-1">
              <div className="highlight-card-img" style={{ backgroundImage: "url('/images/highlight_roof.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              </div>
              <div className="highlight-card-body">
                <h3>Infrared Roof Scan</h3>
                <p>Detect hidden moisture and wet insulation beneath your roof membrane without destructive testing.</p>
              </div>
            </div>
            <div className="highlight-card animate-in delay-2">
              <div className="highlight-card-img" style={{ backgroundImage: "url('/images/highlight_energy.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              </div>
              <div className="highlight-card-body">
                <h3>Energy Audits</h3>
                <p>Thermal imaging identifies all sources of energy loss and helps develop improvement plans with ROI calculations.</p>
              </div>
            </div>
            <div className="highlight-card animate-in delay-3">
              <div className="highlight-card-img" style={{ backgroundImage: "url('/images/highlight_aerial.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              </div>
              <div className="highlight-card-body">
                <h3>Aerial IR Surveys</h3>
                <p>Aerial infrared surveys with detailed AutoCAD reports using the most sensitive fixed-mount imagers available.</p>
              </div>
            </div>
            <div className="highlight-card animate-in delay-4">
              <div className="highlight-card-img" style={{ backgroundImage: "url('/images/highlight_radiant.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              </div>
              <div className="highlight-card-body">
                <h3>Radiant Heat Scan</h3>
                <p>Locate radiant heat piping, detect leaks, and map floor systems before drilling or nailing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INTRO / ABOUT ═══ */}
      <section className="intro" id="about">
        <div className="container">
          <div className="intro-header">
            <div className="overline">About Our Company</div>
            <h2>Infrared Thermal Imaging <span>Services</span></h2>
            <p className="sub">Serving [Your Region] & Nationwide</p>
          </div>
          <div className="intro-body">
            <div className="intro-text">
              <p><strong>[YOUR COMPANY NAME]</strong>, providing Infrared Thermal Imaging consulting and testing services to assist in diagnosing building deficiencies in commercial properties. We detect and document building moisture and map it to its source with infrared thermography for our clients, which include architects, engineers, contractors, government agencies, building managers, energy managers, realtors, and other related professionals.</p>
              <p>Our expertise is in infrared thermal imaging and commercial building envelope evaluations. Using our proven inspection techniques, along with high-resolution infrared thermography (IR) equipment, we can rapidly identify costly hidden damage behind walls and under roofing.</p>
              <p>This inspection provides the owner or purchaser with an accurate understanding of the building's structural integrity so informed decisions can be made. Our inspections have identified significant hidden water intrusions that have saved millions of dollars due to early detection and repair.</p>
            </div>
            <div>
              <img src="/images/about_section_scan.png" alt="Commercial Building Thermal Scan" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px', marginBottom: '32px', boxShadow: 'var(--shadow-lg)' }} />
              <div className="intro-badge">
                <div className="badge-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                </div>
                <h4>Certified & Trusted</h4>
                <p>Level III Certified Infrared Thermographer with extensive experience in commercial building diagnostics and energy assessments.</p>
              </div>
              <div className="intro-text-right" style={{ marginTop: '24px' }}>
                <p>In addition to envelope evaluations, we perform energy audits and energy assessments. Not only do we find all sources of energy loss, but we develop a plan for energy improvements and calculate a return on investment (ROI).</p>
                <p>We also provide water and air infiltration field-testing — performing testing procedures for new construction quality assurance or forensic water intrusion diagnostic services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES GRID ═══ */}
      <section className="services" id="services">
        <div className="container">
          <div className="services-header">
            <div className="overline">What We Offer</div>
            <h2>Our Infrared Services</h2>
          </div>
          <div className="services-grid">

            <div className="service-card">
              <div className="service-card-img" style={{ backgroundImage: "url('/images/service_electrical.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="overlay"><a href="#" className="btn btn-primary">Learn More</a></div>
              </div>
              <div className="service-card-body">
                <h3>Electrical IR Scans</h3>
                <p>Infrared thermal imaging of electrical distribution equipment detects loose connections, overloads, and failing components.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-img" style={{ backgroundImage: "url('/images/service_radiant_heat.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="overlay"><a href="#" className="btn btn-primary">Learn More</a></div>
              </div>
              <div className="service-card-body">
                <h3>Radiant Heat Leak Detection</h3>
                <p>Whether you have an in-floor radiant leak or need to map the floor prior to drilling, we can find and delineate the system.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-img" style={{ backgroundImage: "url('/images/service_building_moisture.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="overlay"><a href="#" className="btn btn-primary">Learn More</a></div>
              </div>
              <div className="service-card-body">
                <h3>Building Envelope — Moisture</h3>
                <p>Active infrared thermography applied with spray racks to monitor and detect leaks from walls, windows, and parapets.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-img" style={{ backgroundImage: "url('/images/service_aerial_survey.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="overlay"><a href="#" className="btn btn-primary">Learn More</a></div>
              </div>
              <div className="service-card-body">
                <h3>Aerial Infrared Surveys</h3>
                <p>Aerial infrared thermal imaging surveys with AutoCAD reports using the most sensitive fixed-mount imagers on the market.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-img" style={{ backgroundImage: "url('/images/service_energy_loss.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="overlay"><a href="#" className="btn btn-primary">Learn More</a></div>
              </div>
              <div className="service-card-body">
                <h3>Building Envelope — Energy Loss</h3>
                <p>Detect warm air infiltration, missing insulation, and condensation issues in warehouses and commercial buildings.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-img" style={{ backgroundImage: "url('/images/service_roof_moisture.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="overlay"><a href="#" className="btn btn-primary">Learn More</a></div>
              </div>
              <div className="service-card-body">
                <h3>Roof Moisture Scans</h3>
                <p>Infrared thermal imaging reveals wet insulation beneath your roof so it can be precisely marked for targeted repairs.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-img" style={{ backgroundImage: "url('/images/service_steam_trap.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="overlay"><a href="#" className="btn btn-primary">Learn More</a></div>
              </div>
              <div className="service-card-body">
                <h3>Steam Trap Surveys & Leak Detection</h3>
                <p>Infrared steam trap surveys effectively evaluate traps, distribution systems, boilers, and heat recovery equipment.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-img" style={{ backgroundImage: "url('/images/service_body_temp.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="overlay"><a href="#" className="btn btn-primary">Learn More</a></div>
              </div>
              <div className="service-card-body">
                <h3>Elevated Body Temperature Screening</h3>
                <p>Infrared screening solutions with proper equipment and platforms for workplace health monitoring.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-img" style={{ backgroundImage: "url('/images/service_block_wall.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="overlay"><a href="#" className="btn btn-primary">Learn More</a></div>
              </div>
              <div className="service-card-body">
                <h3>Block Wall IR Scans</h3>
                <p>Infrared thermal imaging reliably detects grouted cells and insulation status in CMU masonry walls.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="cta-banner" style={{ backgroundImage: "url('/images/cta_banner_bg.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(26,26,46,0.85)' }}>
        <div className="container">
          <div>
            <h2>Ready to Get <span>Started?</span></h2>
            <p>Request a free quote and schedule your infrared inspection today.</p>
          </div>
          <a href="#quote" className="btn btn-primary">Get Your Free Quote</a>
        </div>
      </section>

      {/* ═══ QUOTE FORM ═══ */}
      <section className="quote-section" id="quote">
        <div className="container">
          <div className="quote-info">
            <h2>Get Your <span>Free Quote</span> Today</h2>
            <p>Please complete the short request form and we will get back to you promptly with a customized quote for your project.</p>
            <div className="quote-features">
              <div className="quote-feature">
                <div className="quote-feature-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                </div>
                <div>
                  <h4>Fast Turnaround</h4>
                  <p>We respond to quote requests within 24 hours and schedule inspections promptly.</p>
                </div>
              </div>
              <div className="quote-feature">
                <div className="quote-feature-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
                </div>
                <div>
                  <h4>Certified Professionals</h4>
                  <p>All inspections performed by certified infrared thermographers with years of experience.</p>
                </div>
              </div>
              <div className="quote-feature">
                <div className="quote-feature-icon">
                  <svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                </div>
                <div>
                  <h4>Detailed Reporting</h4>
                  <p>Comprehensive reports with annotated infrared images and actionable recommendations.</p>
                </div>
              </div>
              <div className="quote-feature">
                <div className="quote-feature-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                </div>
                <div>
                  <h4>Nationwide Coverage</h4>
                  <p>Serving [Your Region] and the entire United States for commercial infrared services.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="quote-form" id="contact">
            <h3>Quick Price Quote</h3>
            <div className="form-group">
              <label>Primary Area of Need *</label>
              <select defaultValue="">
                <option value="">— Select a Service —</option>
                <option>Roof Infrared Scan</option>
                <option>Radiant Heat Scan</option>
                <option>Steam Leak Scan</option>
                <option>Moisture Detection</option>
                <option>Block Wall Scan</option>
                <option>Data Center Scan</option>
                <option>Electrical Scan</option>
                <option>Energy Audit</option>
              </select>
            </div>
            <div className="form-group">
              <label>Timeframe *</label>
              <div className="form-radios">
                <label><input type="radio" name="time" value="asap" /> Immediately</label>
                <label><input type="radio" name="time" value="2-3wk" /> 2–3 Weeks</label>
                <label><input type="radio" name="time" value="1mo+" /> Over a Month</label>
              </div>
            </div>
            <div className="form-group">
              <label>Company *</label>
              <input type="text" placeholder="Company name" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>First Name *</label>
                <input type="text" placeholder="First name" />
              </div>
              <div className="form-group">
                <label>Last Name *</label>
                <input type="text" placeholder="Last name" />
              </div>
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input type="email" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label>Phone Number *</label>
              <input type="tel" placeholder="(555) 123-4567" />
            </div>
            <div className="form-group">
              <label>Preferred Contact Method *</label>
              <div className="form-radios">
                <label><input type="radio" name="contact" value="email" /> Email</label>
                <label><input type="radio" name="contact" value="phone" /> Phone</label>
              </div>
            </div>
            <div className="form-group">
              <label>Service Location *</label>
              <input type="text" placeholder="City, State" />
            </div>
            <div className="form-group">
              <label>Special Notes or Comments</label>
              <textarea placeholder="Tell us about your project..."></textarea>
            </div>
            <button className="form-submit" type="button">Submit Quote Request</button>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="logo" style={{ color: '#fff' }}>
                <div className="logo-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
                </div>
                <div className="logo-text">
                  <h1 style={{ color: '#fff', fontSize: '1.1rem' }}>Thermal Pro Inspections</h1>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>Infrared Thermographic Services</span>
                </div>
              </div>
              <p>[YOUR COMPANY NAME] provides professional infrared thermal imaging consulting and testing services for commercial properties nationwide.</p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <div className="footer-links">
                <a href="#top">Home</a>
                <a href="#services">Services</a>
                <a href="#about">About Us</a>
                <a href="#contact">Contact</a>
                <a href="#quote">Get a Quote</a>
              </div>
            </div>
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <p>
                <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                (555) 123-4567
              </p>
              <p>
                <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                info@yourcompany.com
              </p>
              <p>
                <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                [Your City, State]
              </p>
            </div>
          </div>

          <div className="footer-certs">
            <div className="cert-badge">
              <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
              <span>Certified Thermographer</span>
            </div>
            <div className="cert-badge">
              <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/></svg>
              <span>Licensed & Insured</span>
            </div>
            <div className="cert-badge">
              <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              <span>5-Star Rated</span>
            </div>
          </div>

          <div className="footer-service-area">
            <strong>We Service [Your Region] & Nationwide</strong><br/>
            AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY
          </div>

          <div className="footer-bottom">
            &copy; 2026 [Your Company Name]. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ═══ SCROLL TO TOP ═══ */}
      <button className={`scroll-top ${showScrollTop ? 'visible' : ''}`} id="scrollTop" onClick={scrollToTop}>
        <svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>
      </button>
    </div>
  );
}

export default App;
