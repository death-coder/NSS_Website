import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Footer.css';

function Footer() {

  const navigate = useNavigate();
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="footer-info">
                <h3>NSS, IIT Mandi</h3>
                <p className="pb-3">
                  <em>Dedicated to service and excellence in education</em>
                </p>
                <p>
                  <i className="bi bi-geo-alt-fill me-2"></i> Mandi, Himachal Pradesh<br/>
                  <i className="bi bi-telephone-fill me-2"></i> +91 1234567890<br/>
                  <i className="bi bi-envelope-fill me-2"></i>nss@emailid_likhna_hai.com<br/>
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="social-icon"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="social-icon"><i className="bi bi-youtube"></i></a>
                  <a href="#" className="social-icon"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 mb-5">
              <div className="footer-links">
                <h4>Quick Links</h4>
                <ul>
                  {/* <li><a href="/">Home</a></li>
                  <li><a href="/AboutUs">About NSS</a></li>
                  <li><a href="/Team">Our Team</a></li>
                  <li><a href="/Events">Events</a></li> */}
                  {/* <li><a href="/gallery">Gallery</a></li> */}

                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/team">Team</Link></li>
                  <li><Link to="/AboutUs">About</Link></li>
                  <li><Link to="/Events">Events</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-5">
              <div className="footer-links">
                <h4>Our Activities</h4>
                <ul>
                  <li><a href="#">Community Service</a></li>
                  <li><a href="#">Environmental Initiatives</a></li>
                  <li><a href="#">Health Camps</a></li>
                  <li><a href="#">Educational Programs</a></li>
                  <li><a href="#">Disaster Management</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-5">
              <div className="footer-newsletter">
                <h4>Connect With Us</h4>
                <p>Subscribe to our newsletter for updates on our activities and upcoming events</p>
                <form>
                  <input type="email" className="form-control mb-2" placeholder="Your Email" />
                  <button type="submit" className="btn btn-subscribe">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-legal">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <div className="copyright">
                &copy; {new Date().getFullYear()} <strong>NSS IIT Mandi</strong>. All Rights Reserved
              </div>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="credits">
                <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
