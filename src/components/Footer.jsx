import React from "react";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Main Footer Grid */}
        <div className="footer-grid fade-in">
          
          {/* Brand Section */}
          <div className="footer-brand">
            <h1 className="brand-logo">ClosetCue</h1>
            <p className="brand-tagline">
              Your AI outfit assistant that helps you create perfect autumn looks every day. 
              Style made warm, fashion made cozy.
            </p>
            
            {/* Newsletter Signup */}
            <div className="newsletter">
              <h3 className="newsletter-title">Get Autumn Style Tips</h3>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="newsletter-input"
                />
                <button className="newsletter-button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/features">Features</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          {/* Style Categories */}
          <div className="footer-section">
            <h3>Autumn Styles</h3>
            <ul className="footer-links">
              <li><a href="/autumn-outfits">Fall Outfit Ideas</a></li>
              <li><a href="/layering">Layering Guides</a></li>
              <li><a href="/seasonal">Seasonal Colors</a></li>
              <li><a href="/occasion">Fall Occasions</a></li>
              <li><a href="/accessories">Autumn Accessories</a></li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div className="footer-section">
            <h3>Support</h3>
            <ul className="footer-links">
              <li><a href="/help">Help Center</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/contact">Contact Support</a></li>
            </ul>

            {/* Contact Info */}
            <div className="contact-info">
              <h3>Contact Us</h3>
              <div className="contact-details">
                <p>support@closetcue.com</p>
                <p>+91 98765 43210</p>
                <p>Monday - Friday: 9AM - 6PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* App Download & Social Section */}
        <div className="app-download-section">
          <div className="app-download-content">
            
            {/* App Download Badges */}
            <div className="app-download-badges">
              <a href="#" className="app-badge">
                <svg className="app-badge-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.924 17.315c-.611.696-1.437.506-2.722-.322-1.238-.792-1.588-1.355-2.636-.42-.992.88-1.395.773-2.546-.094-1.482-1.118-3.228-3.165-4.48-6.792C4.62 6.14 5.378 4.12 6.383 4.12c.61 0 1.257.397 1.824 1.158.611.819.9 1.672 1.198 1.672.248 0 .653-.753 1.257-1.672.694-.996 1.496-1.793 2.158-1.793 1.158 0 1.675.992 2.893.992 1.128 0 1.884-.992 2.893-.992.794 0 1.704.595 2.376 1.672-2.098 1.208-1.765 4.361.356 5.882-1.019 1.465-2.12 2.966-3.771 2.966-.992 0-1.465-.397-2.218-.397-.794 0-1.645.397-2.218.397-1.317 0-2.317-1.317-3.316-2.635z"/>
                </svg>
                <div className="app-badge-text">
                  <div>Download on the</div>
                  <div>App Store</div>
                </div>
              </a>
              
              <a href="#" className="app-badge">
                <svg className="app-badge-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                </svg>
                <div className="app-badge-text">
                  <div>Get it on</div>
                  <div>Google Play</div>
                </div>
              </a>
            </div>

            {/* Social Media & Utility Links */}
            <div className="social-section">
              <div className="social-icons">
                <a 
                  href="https://instagram.com/closetcue" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                  aria-label="Follow us on Instagram"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <a 
                  href="https://pinterest.com/closetcue" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon pinterest"
                  aria-label="Follow us on Pinterest"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                  </svg>
                </a>

                <a 
                  href="https://twitter.com/closetcue" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon twitter"
                  aria-label="Follow us on Twitter"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>

              {/* Utility Links */}
              <div className="utility-links">
                <a href="/contact" className="utility-link">Contact</a>
                <a href="https://github.com/Ipshita29/ClosetCue" className="utility-link">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              © 2025 ClosetCue. All rights reserved. | Autumn Styles Curated with AI
            </div>
            <div className="legal-links">
              <a href="/privacy" className="legal-link">Privacy Policy</a>
              <a href="/terms" className="legal-link">Terms of Service</a>
              <a href="/sitemap" className="legal-link">Sitemap</a>
              <a href="/cookies" className="legal-link">Cookie Policy</a>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll to Top Button */}
      <button 
        className="scroll-to-top" 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 4l-8 8h6v8h4v-8h6z"/>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;