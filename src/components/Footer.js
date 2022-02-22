import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer id="contact">
      <div className="container grid">
        <div className="grid-row">
          <h3 className="footer-title">Contact</h3>
          <div className="grid">
            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
            <p>Haren Mukherjee Rd, Ward 12,<br></br>
              Hakim Para, Siliguri,<br></br>
              West Bengal 734001</p>
          </div>
          <div className="grid">
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
            <p><a href="tel:+9194342 07959">+9194342 07959</a><br></br>
              <a href="tel:+91 96413 40537">+91 96413 40537</a></p>
          </div>
          <div className="grid">
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <p><a href="https://goo.gl/maps/eTbK4tt4sZJXXay97">View on Map</a></p>
          </div>
        </div>
        <div className="grid-row">
          <h3 className="footer-title">Information</h3>
          <div className="grid">
            <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
            <p>Registration:<br></br>
              XXXXXXXXXXXXXX
            </p>
          </div>
          <div className="grid">
            <FontAwesomeIcon icon={faCrown}></FontAwesomeIcon>
            <p>Owner<br></br>
              Manash Kr. Paul</p>
          </div>
        </div>
        <div className="grid-row">
          <h3 className="footer-title">Working hours</h3>
          <p><strong>Monday to Saturday:</strong> 10AM to 10PM<br></br>
            <strong>Sunday:</strong> 10AM to 2PM</p>
        </div>
      </div >
    </footer >
  );
}

export default Footer;
