import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";

export default function LagosVisitPage() {
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
            <h2 className="fw-bold text-dark mb-2">NIMELSSA Southwest Region Pays Courtesy Visit to LASU</h2>
            <p className="text-muted small mb-5">
              <i className="bi bi-calendar3 me-2"></i>Issued: July 8, 2025
            </p>

            <div className="blog-body fs-5 text-muted" style={{ lineHeight: "1.8" }}>
              <p className="mb-4">
                As part of its strategic mission to expand the reach and impact of NIMELSSA, the South West Regional Executives paid a courtesy visit to <strong>Lagos State University (LASU)</strong>.
              </p>

              <p className="mb-4">
                The visit was led by the Regional President and General Secretary, who met with representatives of the pioneer set of Medical Laboratory Science students at LASU. The executives enlightened the students about the purpose, structure, and benefits of NIMELSSA.
              </p>

              <div className="p-4 bg-light rounded-4 border-start border-4 border-success mb-5">
                <p className="mb-0 text-dark fw-500">
                  A key highlight of the visit was the guidance provided to the pioneer students on how to formally establish a NIMELSSA chapter in their institution.
                </p>
              </div>

              <p className="mb-4">
                The delegation also held a fruitful meeting with the Dean of the Faculty, advocating for administrative support and emphasizing the importance of the association in fostering academic growth and professional development.
              </p>

              <div className="text-center my-5">
                <img
                  src="Pictures/lasu-visit.jpg"
                  alt="NIMELSSA Southwest Executives Visit LASU"
                  className="img-fluid rounded-4 shadow-sm mb-3"
                />
                <p className="small text-muted">
                  NIMELSSA Southwest Executives during the courtesy visit to LASU
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
