import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
    <div className="site-footer">
        <h4 className="text-center">
            Code Blog
        </h4>
        <p className="text-center">Follow us on social media</p>
        <div className="footer-social-links">
            <ul className="social-links-list">
                <li>
                    <a 
                        href="https://www.facebook.com" 
                        targets="_blank" 
                        rel="noopener noreferrer" 
                        className="facebook"
                    >
                        <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
                    </a>
                </li>
                <li>
                    <a 
                        href="https://www.facebook.com" 
                        targets="_blank" 
                        rel="noopener noreferrer" 
                        className="twitter"
                    >
                        <i class="fab fa-twitter fa-2x" />
                        <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
                    </a>
                </li>
                <li>
                    <a 
                        href="https://www.facebook.com" 
                        targets="_blank" 
                        rel="noopener noreferrer" 
                        className="instagram"
                    >
                        <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                    </a>
                </li>
                <li>
                    <a 
                        href="https://www.facebook.com" 
                        targets="_blank" 
                        rel="noopener noreferrer" 
                        className="google"
                    >
                        <FontAwesomeIcon icon={['fab', 'google']} size="2x" />
                    </a>
                </li>
                <li>
                    <a 
                        href="https://www.facebook.com" 
                        targets="_blank" 
                        rel="noopener noreferrer" 
                        className="linkedin"
                    >
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
)

export default Footer