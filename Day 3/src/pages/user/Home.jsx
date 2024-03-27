import { useState } from 'react'; // Import useState from React
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import image1 from "./image1.jpg";
import image2 from "./image2.avif";
import image3 from "./image3.avif";
import image4 from "./image4.avif";
import image5 from "./image5.avif";
import image6 from "./image6.avif";
import "../../assets/css/Navbar.css"
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
    MDBCollapse
  } from 'mdb-react-ui-kit';
export default function Home() {
  const [showBasic, setShowBasic] = useState(true); // Initialize showBasic state variable

  return (
    <div>
    <header>
      <MDBNavbar expand='lg' light bgColor='white' sticky>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          {/* <MDBCollapse show={showBasic}> Use showBasic state variable
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse> */}
        </MDBContainer>
      </MDBNavbar>

      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 400 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Luxury Travel</h1>
              <h4 className='mb-3'>Looking for the best trip We offer the best sesrvice</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                online Booking
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </header>
    <div className="image-gallery">
            <div className="gallery-row">
      <div className="gallery-item">
          <img src={image1} alt="Gallery Image 1" />
          <h2 className="image-description">AquaHaven</h2>
          </div>
          <div className="gallery-item">
          <img src={image2} alt="Gallery Image 2" />
          <h2 className="image-description">The Yacht-Sea</h2>
          </div>
          <div className="gallery-item">
          <img src={image3} alt="Gallery Image 3" />
          <h2 className="image-description">RiverRents</h2>
          </div>
          </div>
          <div className="gallery-row">
          <div className="gallery-item">
          <img src={image4} alt="Gallery Image 1" />
          <h2 className="image-description">SeaSide Stays</h2>
          </div>
          <div className="gallery-item">
          <img src={image5} alt="Gallery Image 2" />
          <h2 className="image-description">Ocean Oasis</h2>
          </div>
          <div className="gallery-item">
          <img src={image6} alt="Gallery Image 3" />
          <h2 className="image-description">MarinaMagic</h2>
          </div>
        </div></div>
    <div>
    <footer className="content-footer">
    <p> Say hi to us on these social networks: </p>
    <ul className="social">
      <li> <a href="https://www.instagram.com/kalai.varshaa/"> Instagram </a> </li>
      <li> <a href="INSERT_TWITTER_URL_HERE"> Twitter </a> </li>
      <li> <a href="INSERT_GOOGLE+_URL_HERE"> Google+</a> </li>
    </ul>
    </footer>
</div>
</div>
      
  );
}
