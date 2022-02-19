import logo from "../static/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="header">
      {/* Header top */}
      <div className="header__top">
        <div className="container grid">
          <div className="loc">
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <span>Haren Mukherjee Rd, Ward 12, Hakim Para, Siliguri, West Bengal 734001</span>
          </div>
          <div className="contact">
            <a href="tel:+9194342 07959">+9194342 07959</a>
            <a href="#contact" className="btn btn--primary btn--outlined">Contact</a>
          </div>
        </div>
      </div>

      {/* Branding and Navigation */}
      <div className="header__navigation">
        <div className="container grid">
          <div className="branding">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="Dhruba Medical logo"></img>
              </a>
            </div>
            <div className="name">
              Dhruba <span>Medical</span>
            </div>
          </div>
          <nav className="navigation">
            <ul className="menu">
              <li className="menu__item">
                <a className="menu__link" href="#about">About</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#services">Services</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#services">Doctors</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header >
  );
}

export default Header
