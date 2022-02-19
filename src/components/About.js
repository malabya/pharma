import brand from "../static/about-brands.jpeg";
import meds from "../static/about-meds.jpeg";
import doctor from "../static/about-doctor.jpeg";

function About() {
  return (
    <section id="about">
      <div className="about container">
        <h2>A pharmacy for all your needs.</h2>
        <p className="box-text lead">Established in the year 1985, Dhruba Medical
        supply a high quality medication management service with a personal
        touch, giving our customers a fast, safe and discreet service which
        delivers right to your door step or place of work.</p>
        <a href="#contact" className="btn btn--primary">Contact Us</a>
      </div>
      <div className="about-subsection container flex subsection-spacing">
        <div className="media">
          <img src={brand} alt="Brands we deal with"></img>
        </div>
        <div className="content">
          <h3 className="section-title">We stock reputed brands</h3>
          <p className="small">Seamlessly enable client-centered action items
            before focused action items. Dynamically embrace intermandated
            catalysts for change with functional content. Uniquely create
            emerging.</p>
        </div>
      </div>
      <div className="about-subsection container flex flex-reverse subsection-spacing">
        <div className="media">
          <img src={meds} alt="Brands we deal with"></img>
        </div>
        <div className="content">
          <h3 className="section-title">Only Genuine medicines</h3>
          <p className="small">Seamlessly enable client-centered action items
            before focused action items. Dynamically embrace intermandated
            catalysts for change with functional content. Uniquely create
            emerging.</p>
        </div>
      </div>
      <div className="about-subsection container flex subsection-spacing">
        <div className="media">
          <img src={doctor} alt="Brands we deal with"></img>
        </div>
        <div className="content">
          <h3 className="section-title">A pharmacy for all your needs</h3>
          <p className="small">Seamlessly enable client-centered action items
            before focused action items. Dynamically embrace intermandated
            catalysts for change with functional content. Uniquely create
            emerging.</p>
        </div>
      </div>
    </section>
  );
}

export default About
