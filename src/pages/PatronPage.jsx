import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";

export default function PatronPage() {
  return (
    <>
      {/* === Hero Header === */}
      <header
        className="text-center text-white"
        style={{
          background:
            "linear-gradient(rgba(34,81,45,0.85), rgba(34,81,45,0.85)), url('Pictures/1 (8).jpg') center/cover no-repeat",
          padding: "120px 20px",
        }}
      >
        <h1>Introducing Our Esteemed Patron</h1>
        <p className="lead">
          Mr. A.A. Odekanmi — A Distinguished Fellow of the Medical Laboratory Science Council of Nigeria
        </p>
      </header>

      {/* === Main Content === */}
      <section className="container content-section mt-5 mb-5">
        <div className="row align-items-start">
          <div className="col-md-4 text-center">
            <img
              src="Pictures/1 (8).jpg"
              alt="Mr A.A. Odekanmi"
              className="img-fluid rounded"
            />
            <h5 className="mt-3 fw-bold" style={{ color: "rgba(34,81,45,255)" }}>
              MR. A.A. ODEKANMI
            </h5>
            <p className="text-muted mb-0">Patron, NIMELSSA Southwest Region</p>
          </div>

          <div className="col-md-8">
            <h5 className="bio-title mb-3 text-uppercase fw-bold" style={{ color: "rgba(34,81,45,255)" }}>
              Brief Biography
            </h5>

            <p>
              Mr. Akeem Adesina Odekanmi was born on July 20, 1965. He began his
              education at Ibadan Municipal Government Primary School (1972–1978)
              and attended Adventist Grammar School, Ede (1979–1984). He trained at
              the School of Medical Laboratory Science, University College Hospital
              (UCH), Ibadan, earning his Associate of the Medical Laboratory Science
              Council of Nigeria (AMLSCN) in Medical Bacteriology (1986–1990) and
              later a Fellowship in Medical Virology (1996).
            </p>

            <p>
              To broaden his expertise, he earned a Postgraduate Diploma in
              Microbiology from Lagos State University (2002), an M.Sc. in Medical
              Microbiology from Olabisi Onabanjo University (2006), and an MBA in
              Human Resources from Ladoke Akintola University of Technology (2013).
              He also pursued a Bachelor of Medical Laboratory Science and is
              currently working toward a Ph.D. in Medical Microbiology.
            </p>

            <p>
              Mr. Odekanmi joined UCH Ibadan in December 1993 as a Medical Laboratory
              Technologist Grade II. He became Deputy Director in January 2016 and
              was appointed Acting Director/Head of Medical Laboratory Science in
              March 2023, a role he currently holds.
            </p>

            <p>
              He is a versatile, diligent, and accomplished Medical Laboratory
              Scientist, and a Fellow of the Medical Laboratory Science Council of
              Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* === Footer === */}
      <footer
        style={{
          backgroundColor: "rgba(34,81,45,255)",
          color: "white",
          textAlign: "center",
          padding: "15px",
          marginTop: "60px",
        }}
      >
        <p>&copy; 2025 NIMELSSA Southwest Region | Designed with ❤️ for excellence</p>
        <div className="d-flex justify-content-center gap-3">
          <a
            href="https://web.facebook.com/profile.php?id=61561918256194"
            className="text-white"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://x.com/NimelssaR17193" className="text-white">
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/nimelssa.southwest?igsh=bmtydGVjeXIxbTZi"
            className="text-white"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </footer>
    </>
  );
}
