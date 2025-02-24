import '../css/Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">CONTACT</h1>

            <div className="contact-grid">  
                {/* Left Column */}
                <div className="contact-card">
                    <img src="/gmail.png" alt="Gmail" className="icon" />
                    <p>gowdham0811@gmail.com</p>
                </div>
                <div className="contact-card">
                    <img src="/linkedin.png" alt="LinkedIn" className="icon" />
                    <p><a href="https://www.linkedin.com/in/gowdham-s-a06105258/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                </div>
                <div className="contact-card">
                    <img src="/facebook.png" alt="Facebook" className="icon" />
                    <p><a href="https://www.facebook.com/profile.php?id=100017727217456" target="_blank" rel="noopener noreferrer">Facebook</a></p>
                </div>

                {/* Right Column */}
                <div className="contact-card">
                    <img src="/whatsapp.png" alt="WhatsApp" className="icon" />
                    <p>+91 6379186508</p> 
                </div>
                <div className="contact-card">
                    <img src="/github.png" alt="GitHub" className="icon" />
                    <p><a href="https://github.com/Gowdham08" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                </div>
                <div className="contact-card"> 
                    <img src="/insta.jpg" alt="Instagram" className="icon" />
                    <p><a href="https://www.instagram.com/_g0wdhmzz?igsh=MzcweXNwZmxkdGVz&utm_source=qr" target="_blank" rel="noopener noreferrer">Instagram</a></p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
