import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";

export default function RedeemersVisitPage() {
  return (
    <>
      {/* === Header Section === */}
      <header className="hero">
        <div className="container text-center">
          <h1 className="animate__animated animate__fadeInUp">The Southwest Sentinel</h1>
          <p className="lead text-white opacity-90 animate__animated animate__fadeInUp animate__delay-1s">
            Connecting You to the News that Matters
          </p>
        </div>
      </header>

      {/* === Blog Content === */}
      <section className="container py-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="badge bg-success-subtle text-success border border-success-subtle mb-3 p-2 px-3">Press Release</div>
            <h2 className="fw-bold text-dark mb-2">NIMELSSA SW Leaders Pay Courtesy Visit to Redeemer’s University</h2>
            <p className="text-muted small mb-5">
              <i className="bi bi-calendar3 me-2"></i>Issued: Wednesday, August 6, 2025
            </p>

            <div className="blog-body fs-5 text-muted" style={{ lineHeight: "1.8" }}>
              <p className="mb-4">
                In a continued effort to deepen collaboration and foster inclusive
                participation across institutions, the Southwest leadership of the{" "}
                <strong>Nigerian Medical Laboratory Science Students’ Association (NIMELSSA)</strong>{" "}
                paid a strategic courtesy visit to the Department of Medical Laboratory
                Science, Redeemer’s University.
              </p>

              <div className="p-4 bg-light rounded-4 border-start border-4 border-success mb-5">
                <p className="mb-0 italic text-dark">
                  The visiting team—comprising the{" "}
                  <strong>Regional President, Rt. Hon. Olorunniyi Pelumi</strong>;{" "}
                  <strong>General Secretary, Hon. Ogunniyi Akindele Isaac</strong>;{" "}
                  <strong>Welfare Director, Hon. Nureni-Yusuf Mariam</strong>; and{" "}
                  <strong>Director of Health Advocacy, Hon. Oladeji Emmanuel</strong>—was
                  warmly received by the{" "}
                  <strong>Head of Department (HOD), Dr. Tola Ohiengbohwan</strong>.
                </p>
              </div>

              <p className="mb-4">
                The HOD provided an insightful overview of the department’s journey
                since its establishment in the 2022/2023 academic year, noting steady
                progress in academic excellence and structural development.
              </p>

              <p className="mb-4 text-dark fw-500">
                A major highlight of the meeting was a candid discussion on the
                Redeemer’s University chapter’s low visibility at regional events.
              </p>

              <p className="mb-4">
                The regional executives pledged to bridge this gap by
                ensuring better communication and engagement moving forward. The delegation also shared updates on the forthcoming NIMELSSA Southwest
                Convention, emphasizing the importance of Redeemer’s University’s
                participation.
              </p>

              <div className="text-center my-5">
                <img
                  src="Pictures/1 (15).jpg"
                  alt="NIMELSSA SW Leaders at Redeemer's University"
                  className="img-fluid rounded-4 shadow-sm mb-3"
                />
                <p className="small text-muted">
                  NIMELSSA Southwest Leaders with the HOD, Redeemer’s University
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
