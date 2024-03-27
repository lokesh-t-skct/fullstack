import React, { useEffect, useState } from 'react';
import '../../assets/css/footer.css'; // Import the CSS file for styling

function Footer() {
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;

            // If user has scrolled to the bottom or beyond
            if (scrollTop + clientHeight >= scrollHeight) {
                setIsFooterVisible(true);
            } else {
                setIsFooterVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer className={`footer ${isFooterVisible ? 'visible' : ''}`}>
            <div className="footer-section">
                <h3>Company</h3>
              
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
            </div>
            <div className="footer-section link-contactus">
                <h3>    Policies</h3>
                <ul className = "Policies list">
                    <li><a href="#">Booking Policy</a></li>
                    <li><a href="#">Cancellation Policy</a></li>
                    <li><a href="#">Child Policy</a></li>
                    <li><a href="#">HouseBoat Food Menu</a></li>
                   
                </ul>
            </div>
            <div className="footer-section location">
                <h3>Location</h3>
                <p> 456 Riverfront Avenue
                    Serenity Nagar, Lakeside Colony
                    Backwater City, Riverside District
                    Aquatica, Beachside 67890
                    India</p>
                
            </div>
            <div className="footer-section contactus">
                <h3>Contact Us</h3>
                <p>Email: fakeemail123@example.com</p>
                <p>Phone: +91 98765 43210</p>
                <p>Landline Number: +91 20 1234 5678</p>
            </div>
        </footer>
    );
}

export default Footer;
