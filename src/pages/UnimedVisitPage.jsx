import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";

export default function UnimedVisitPage() {
  return (
    <>
      <header className="hero">
        <div className="container text-center">
          <h1 className="animate__animated animate__fadeInUp">The Southwest Sentinel</h1>
          <p className="lead text-white opacity-90 animate__animated animate__fadeInUp animate__delay-1s">
            Connecting You to the News that Matters
          </p>
        </div>
      </header>

      <section className="container py-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="badge bg-success-subtle text-success border border-success-subtle mb-3 p-2 px-3">Press Release</div>
            <h2 className="fw-bold text-dark mb-2">Courtesy Visit to the Acting Vice Chancellor, UNIMED Ondo</h2>
            <p className="text-muted small mb-5">
              <i className="bi bi-calendar3 me-2"></i>Issued: June 7, 2025
            </p>

            <div className="blog-body fs-5 text-muted" style={{ lineHeight: "1.8" }}>
              <p className="mb-4">
                As part of the ongoing <strong>NIMELSSA Southwest Regional Congress and Leadership Summit</strong>,
                key delegates and executives paid a courtesy visit to the Acting Vice Chancellor of the 
                <strong>University of Medical Sciences, Ondo</strong>, Professor Adolphus Loto.
              </p>

              <blockquote className="blockquote border-start border-4 border-success ps-4 py-3 bg-light rounded-4 mb-5">
                <p className="mb-0 italic text-dark fs-4">
                  “Medical Laboratory Scientists are the unseen backbone of clinical diagnostics. Without your input, the process of providing effective healthcare cannot be complete.”
                </p>
                <footer className="blockquote-footer mt-2">Prof. Adolphus Loto</footer>
              </blockquote>

              <p className="mb-4">
                Professor Loto further commended the regional executives for their commitment and vision, highlighting the essential role of scholars in advancing the Medical Laboratory Science profession.
              </p>

              <div className="text-center my-5">
                <img
                  src="Pictures/unimed-visit.jpg"
                  alt="NIMELSSA Southwest Executives Visit UNIMED Ondo"
                  className="img-fluid rounded-4 shadow-sm mb-3"
                />
                <p className="small text-muted">
                  NIMELSSA Southwest delegation with the Acting Vice Chancellor, UNIMED Ondo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
