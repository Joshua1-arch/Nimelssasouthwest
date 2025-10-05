import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";

export default function LagosVisitPage() {
  return (
    <>
      {/* === Header Section === */}
      <header
        className="text-center text-white"
        style={{
          background:
            "linear-gradient(rgba(34,81,45,0.85), rgba(34,81,45,0.85)), url('Pictures/1 (15).jpg') center/cover no-repeat",
          padding: "120px 20px",
        }}
      >
        <h1>The Southwest Sentinel</h1>
        <p className="lead">Connecting You to the News that Matters</p>
      </header>

      {/* === Blog Content === */}
      <section className="container content-section mt-5 mb-5">
        <h4
          className="headline text-uppercase text-center"
          style={{ color: "rgba(34,81,45,255)" }}
        >
          NIMELSSA SOUTH WEST REGION PAYS COURTESY VISIT TO LAGOS STATE UNIVERSITY
        </h4>
        <p className="press-meta text-center">
          Press Release | Issued: July 8, 2025
        </p>

        <p>
          As part of its strategic mission to expand the reach and impact of the{" "}
          <strong>
            Nigerian Medical Laboratory Science Students’ Association (NIMELSSA)
          </strong>
          , the South West Regional Executives paid a courtesy visit to{" "}
          <strong>Lagos State University (LASU)</strong>, where Medical Laboratory
          Science is a newly introduced program.
        </p>

        <p>
          The visit was led by the Regional President and General Secretary, who
          met with representatives of the pioneer set of Medical Laboratory Science
          students at LASU. The executives enlightened the students about the
          purpose, structure, and benefits of NIMELSSA, while also providing
          detailed information about the association's regional activities and the
          forthcoming South West Regional Convention.
        </p>

        <p>
          A key highlight of the visit was the guidance provided to the pioneer
          students on how to formally establish a NIMELSSA chapter in their
          institution. The process is currently underway, and the regional body has
          pledged continuous support to ensure a successful launch and smooth
          integration into the association’s framework.
        </p>

        <p>
          The delegation also held a fruitful meeting with the Dean of the Faculty,
          where they advocated for administrative support towards the establishment
          of NIMELSSA in LASU. The executives emphasized the importance of the
          association in fostering academic growth, professional development, and
          unity among Medical Laboratory Science students across Nigeria.
        </p>

        <p>
          This visit underscores NIMELSSA South West's commitment to inclusivity
          and capacity-building, ensuring no student is left behind as the region
          continues to grow and evolve.
        </p>

        <div className="text-center mt-4">
          <img
            src="Pictures/lasu-visit.jpg"
            alt="NIMELSSA Southwest Executives Visit LASU"
            className="img-fluid rounded"
          />
          <p className="text-muted mt-2">
            <small>
              NIMELSSA Southwest Executives during the courtesy visit to LASU
            </small>
          </p>
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
        <p>&copy; 2025 NIMELSSA Southwest Region | The Southwest Sentinel</p>
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
