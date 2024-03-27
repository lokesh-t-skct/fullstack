import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';
export default function Viewboat(){
    return(<>
<div className="card-group">
  <div className="card">
  <img
  src="\image\images7.jpeg"
  className="card-img-top"
  alt="Hollywood Sign on The Hill"
/>

    <div className="card-body">
      <h5 className="card-title">AquaHaven</h5>
      <p className="card-text">
      Motor boats ranges from five seats to one hundred and fifty seats can be availed . If one choose a motor boat cruise they cannot enjoy an overnight stay and they have to to have their food and drinks only on jetties 
      </p>
      <p className="card-text">
      <div className="card-footer bg-white">
      
      <Link to="/addboat"><button>Book Now</button></Link>
      </div>      </p>
    </div>
  </div>
  <div className="card">
    <img
      src="\image\images8.jpeg"
      className="card-img-top"
      alt="Palm Springs Road"
    />
    <div className="card-body">
      <h5 className="card-title">RiverRents</h5>
      <p className="card-text">
      boat house is a large vessel used in the waters of Alappuzha for tourists; ironically, it was not designed and introduced for tourists.
      </p>
      <p className="card-text">
      <div className="card-footer bg-white">
      
      <Link to="/addboat"><button>Book Now</button></Link>
      </div>      </p>
    </div>
  </div>
  <div className="card">
    <img
      src="\image\image9.jpeg"
      className="card-img-top"
      alt="Los Angeles Skyscrapers"
    />
    <div className="card-body">
      <h5 className="card-title">SeaSide Stays</h5>
      <p className="card-text">
      Luxury houseboats  offer the best service and spectacular interiors and is nothing short in its grandeur from a five-star resort. With complete glass windows constituting a major portion of its walls, they offer unhindered view of the mesmerising backwaters.


      </p>
      <p className="card-text">
      <div className="card-footer bg-white">
      
      <Link to="/addboat"><button>Book Now</button></Link>
      </div>      </p>
    </div>
  </div>
</div><div className="card-group">
  <div className="card">
    <img
      src="\image\images10.jpeg"
      className="card-img-top"
      alt="Hollywood Sign on The Hill"
    />
    <div className="card-body">
      <h5 className="card-title">Ocean Oasis</h5>
      <p className="card-text">
      Premium houseboats are available at affordable rates for tourists to enjoy the best of  backwaters with top- end facilities. Bedrooms and living area complete with wooden ceilings and hand-crafted décor ensure a traditional ambience.
      </p>
      <p className="card-text">
      <div className="card-footer bg-white">
      
      <Link to="/addboat"><button>Book Now</button></Link>
      </div>      </p>
    </div>
  </div>
  <div className="card">
    <img
      src="\image\images11.jpeg"
      className="card-img-top"
      alt="Palm Springs Road"
    />
    <div className="card-body">
      <h5 className="card-title">MarinaMagic</h5>
      <p className="card-text">
      Equipped with amenities including a living area, A/C bedrooms, attached bathrooms, viewing decks and kitchen, Deluxe houseboats  are a pocket friendly option to enjoy the waters with standard facilities. Book the best deluxe houseboats with us
      </p>
      <p className="card-text">
      <div className="card-footer bg-white">
      
      <Link to="/addboat"><button>Book Now</button></Link>
      </div>      </p>
    </div>
  </div>
  <div className="card">
    <img
      src="\image\images12.jpeg"
      className="card-img-top"
      alt="Los Angeles Skyscrapers"
    />
    <div className="card-body">
      <h5 className="card-title">The Yacht-Sea</h5>
      <p className="card-text">
      Houseboats in Kerala or Kettuvallams were traditionally cargo boats that carried rice, spices and other commodities, which now are transformed into luxury boats complete with bedrooms, kitchen, living area, bathrooms and other amenities. 
      </p>
      <p className="card-text">
      <div className="card-footer bg-white">
      
      <Link to="/addboat"><button>Book Now</button></Link>
      </div>      
      </p>
    </div>
  </div>
</div></>
    );
}