import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrescription } from "@fortawesome/free-solid-svg-icons";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <section id="services">
      <div className="delivery">
        <div className="container">
          <FontAwesomeIcon icon={faPrescription}></FontAwesomeIcon>
          <h2>Pharmacy at Your Fingertips</h2>
          <p className="lead box-text bold">Not Just Pizza, now Medicines Delivered to
            Your Doorstep in 30 Minutes!</p>
          <p className="box-text">Lack of parking, heavy traffic, closed shop, rains, forgetfulness-
            these reasons could lead to skipping important medications. However,
            since taking medicines is a crucial component of managing chronic
            conditions, you should not run out of essential medicines. </p>
          <p>Need medicines delivered? <a href="#contact">Get in touch</a> with us
            and get the delivery of medicine at home.</p>
        </div>
      </div>
      <div className="container grid">
        <div className="two-col-grid-item">
          <div className="icon">
            <FontAwesomeIcon icon={faUserDoctor}></FontAwesomeIcon>
          </div>
          <div className="content">
            <h3>Doctor consultation</h3>
            <p>Consult with the renowned doctor Dr. John Doe (MD, MBBD, XYZ,
              Physician) who can give the the required medical opinion after
              diagnosis of your health issue. This will help you identify next
              steps which may include prescription or diagnostics tests or an
              advise</p>
            <p className="bold">Timings
              Monday to Friday, 6PM to 8PM</p>
          </div>
        </div>
        <div className="two-col-grid-item">
          <div className="icon">
            <FontAwesomeIcon icon={faBriefcaseMedical}></FontAwesomeIcon>
          </div>
          <div className="content">
            <h3>Genuine medicines and products</h3>
            <p>Genuine Medicine at Genuine Price lies at our core. We offer you
              the convenience of pharmaceutical deliveries in the safety and
              comfort of your home. We have a wide variety of healthcare product
              Get genuine medicines delivered to your doorstep in no time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
