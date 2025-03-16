import React, { useState } from 'react';
import './styles/Contact.css';

function Contact() {
    const [formStatus, setFormStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            setFormStatus({
                type: 'success',
                message: 'Thank you for your message! I will get back to you soon.'
            });
            e.target.reset();
        } catch (error) {
            setFormStatus({
                type: 'error',
                message: 'Oops! Something went wrong. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="contact-section">
            <h1>Get in Touch</h1>
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <div className="info-item">
                        <i className="fas fa-envelope"></i>
                        <p>badalsahu9966@gmail.com</p>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-phone"></i>
                        <p>+91 78469 96654</p>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>Odisha, India</p>
                    </div>
                    <div className="availability">
                        <h3>Availability</h3>
                        <p>I'm currently open to freelance projects and full-time opportunities in web development.</p>
                    </div>
                    <div className="social-links-contact">
                        <a href="https://github.com/badal9966" target="_blank" rel="noopener noreferrer" title="GitHub">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/badal-sahu-51b419330/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://instagram.com/666.badal" target="_blank" rel="noopener noreferrer" title="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" title="Dev.to">
                            <i className="fab fa-dev"></i>
                        </a>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required placeholder="Your name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required placeholder="your.email@example.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" required placeholder="What's this about?" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required placeholder="Your message here..."></textarea>
                    </div>
                    <button type="submit" className="btn primary" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <><i className="fas fa-spinner fa-spin"></i> Sending...</>
                        ) : (
                            <><i className="fas fa-paper-plane"></i> Send Message</>
                        )}
                    </button>
                    {formStatus.type && (
                        <div className={`form-status ${formStatus.type}`}>
                            {formStatus.message}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}

export default Contact; 