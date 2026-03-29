import styles from '../styles/home.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function HomePage() {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);

    const handleNav = () => {
        setShowMenu(prev => !prev);
    };

    return (
        <>
            <header className={styles.homeHeader}>
                
                <div className={`${styles.sideNav} ${showMenu ? styles.active : ""}`}>
                    <button 
                        className={styles.closeBtn} 
                        onClick={() => setShowMenu(false)}
                    >
                        &times;
                    </button>

                    <a href="#pricing">Pricing</a>
                    <a href="#features">Features</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className={styles.headerContainer}>
                    <div className={styles.navSection}>
                        
                        <div className={styles.menuIcon}>
                            <span onClick={handleNav}>&#9776;</span>
                        </div>

                        <div className={styles.brandLogo}>
                            <h2>NOVA</h2>
                        </div>

                        <nav className={styles.navLinks}>
                            <a href="#features">Features</a>
                            <a href="#pricing">Pricing</a>
                            <a href="#contact">Contact</a>
                        </nav>
                    </div>

                    <div className={styles.authButtons}>
                        <button className={styles.signInBtn} onClick={()=>navigate('/login')}>Sign in</button>
                        <button className={styles.signUpBtn} onClick={()=>navigate('/signin')}>Sign up</button>
                    </div>
                </div>
            </header>

            <section className={styles.heroSection}>
                <div className={styles.heroText}>
                    <h1>Store files online securely</h1>
                    <p>Securely upload, manage, and access your files from any device.</p>
                </div>

                <div className={styles.heroCTA}>
                    <button>Signup to get upto 5 GB free</button>
                </div>
            </section>

            <section className={styles.pricingSection} id="pricing">
                <h2 className={styles.sectionTitle}>Pricing</h2>

                <div className={styles.pricingGrid}>
                    
                    <div className={styles.pricingCard}>
                        <p className={styles.planName}>Free</p>
                        <p>₹0 <small>/Month</small></p>
                    </div>

                    <div className={styles.pricingCard}>
                        <p className={styles.planName}>Gold</p>
                        <p>₹100 <small>/Month</small></p>
                    </div>

                    <div className={styles.pricingCard}>
                        <p className={styles.planName}>Diamond</p>
                        <p>₹250 <small>/Month</small></p>
                    </div>

                </div>
            </section>

            <section className={styles.contactSection} id="contact">
                <h2 className={styles.sectionTitle}>Contact Us</h2>

                <div className={styles.contactForm}>
                    <div>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>Name</label>
                                <input type="text" placeholder="Enter your name" />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Email</label>
                                <input type="email" placeholder="Enter your email" />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label>Message</label>
                            <textarea rows="4" placeholder="Enter your message"></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>Send Message</button>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}></footer>
        </>
    );
}

export default HomePage;
