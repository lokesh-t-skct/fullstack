import { Link } from "react-router-dom";
import "../../assets/css/Navbar.css";


const Navbar = () => { 
    console.log("Hellooooo");
  return (
    <div className="headerr">
      <div className="headerr__left">
        <h1>
          BoatYard<span> Terrace</span>
        </h1>
      </div>
      <div className="headerr__right">
        <Link to="/user/home">Home</Link>
        <Link to="/user/viewboat" >Viewboat</Link>
        <Link to="/user/bookmyticket">BookMyTicket</Link>
        <Link to="/user/signin" >Logout</Link>
      </div>
    </div>
  );
};

export default Navbar;