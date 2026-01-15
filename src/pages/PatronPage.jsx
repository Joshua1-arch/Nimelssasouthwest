import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";

export default function PatronPage() {
  return (
    <>
      {/* === Hero Header === */}
      <header className="hero">
        <div className="container text-center">
          <h1 className="animate__animated animate__fadeInUp">Our Esteemed Patron</h1>
          <p className="lead text-white opacity-90 animate__animated animate__fadeInUp animate__delay-1s">
            Mr. A.A. Odekanmi — Distinguished Fellow of the MLSCN
          </p>
        </div>
      </header>

      {/* === Main Content === */}
      <section className="container py-5 mt-5">
        <div className="row g-5 align-items-start">
          <div className="col-lg-4 text-center">
            <div className="card p-3 shadow-sm border-0 rounded-4 transition hover-y">
              <img
                src="Pictures/1 (8).jpg"
                alt="Mr A.A. Odekanmi"
                className="img-fluid rounded-3"
              />
              <div className="mt-4">
                <h5 className="fw-bold text-dark mb-1">MR. A.A. ODEKANMI</h5>
                <p className="text-primary small fw-bold text-uppercase">Patron, Southwest Region</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <h2 className="section-title text-start mb-4">Brief Biography</h2>
            <div className="bio-content">
              <p className="lead mb-4">
                Mr. Akeem Adesina Odekanmi was born on July 20, 1965. He began his
                education at Ibadan Municipal Government Primary School (1972–1978)
                and attended Adventist Grammar School, Ede (1979–1984).
              </p>
              
              <p className="mb-4">
                He trained at the School of Medical Laboratory Science, University College Hospital
                (UCH), Ibadan, earning his Associate of the Medical Laboratory Science
                Council of Nigeria (AMLSCN) in Medical Bacteriology (1986–1990) and
                later a Fellowship in Medical Virology (1996).
              </p>

              <div className="p-4 bg-light rounded-4 border-start border-4 border-success mb-4">
                <p className="mb-0 italic">
                  To broaden his expertise, he earned a Postgraduate Diploma in
                  Microbiology from LASU (2002), an M.Sc. from OOU (2006), and an MBA in
                  Human Resources from LAUTECH (2013).
                </p>
              </div>

              <p className="mb-4">
                Mr. Odekanmi joined UCH Ibadan in December 1993. He became Deputy Director in January 2016 and
                was appointed Acting Director/Head of Medical Laboratory Science in
                March 2023, a role he currently holds.
              </p>

              <p className="fw-500">
                He is a versatile, diligent, and accomplished Medical Laboratory
                Scientist, and a Fellow of the Medical Laboratory Science Council of
                Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
