import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";

export default function UnimedVisitPage() {
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
          COURTESY VISIT TO THE ACTING VICE CHANCELLOR, UNIMED ONDO
        </h4>
        <p className="press-meta text-center">
          Press Release | Issued: June 7, 2025
        </p>

        <p>
          As part of the ongoing{" "}
          <strong>NIMELSSA Southwest Regional Congress and Leadership Summit</strong>,
          key delegates and executives of the{" "}
          <strong>
            Nigerian Medical Laboratory Science Students’ Association (NIMELSSA)
            Southwest Region
          </strong>{" "}
          paid a courtesy visit to the Acting Vice Chancellor of the{" "}
          <strong>University of Medical Sciences, Ondo</strong>, Professor Adolphus
          Loto.
        </p>

        <p>
          The visit, which took place on the{" "}
          <strong>23rd of May, 2025</strong> at the University’s Administrative
          Building, was a significant highlight of the summit, which brought
          together student leaders and delegates from across the Southwest
          geopolitical zone.
        </p>

        <p>
          In his remarks, <strong>Professor Loto</strong> warmly welcomed the
          NIMELSSA delegation and expressed his deep appreciation for the
          association’s contribution to healthcare and academic leadership. He
          emphasized the critical role of Medical Laboratory Scientists in the
          healthcare delivery system, noting the intricacies and intellectual
          excitement involved in working at the microscopic level.
        </p>

        <blockquote className="blockquote border-start border-success ps-3">
          <p className="mb-0 fst-italic">
            “Medical Laboratory Scientists are the unseen backbone of clinical
            diagnostics,” Prof. Loto stated. “Without your input, the process of
            providing effective healthcare cannot be complete. You must never
            underrate yourselves or the impact you have on patient care.”
          </p>
        </blockquote>

        <p className="mt-3">
          Professor Loto further commended the regional executives for their
          commitment and vision, as well as the efforts of the host chapter at
          UNIMED for successfully organizing the Congress and Leadership Summit.
        </p>

        <p>
          Also in attendance was <strong>Professor Aderemi Abubakar</strong>, who
          reinforced the Acting Vice Chancellor’s sentiments. He encouraged the
          students to remain steadfast in their pursuit of excellence and
          innovation, and to continue holding themselves in high esteem as
          integral members of the healthcare profession.
        </p>

        <p>
          The meeting was attended by several NIMELSSA Southwest regional
          executives and chapter delegates who appreciated the warm reception and
          inspiring words from the university leadership.
        </p>

        <p>
          The <strong>2025 NIMELSSA Southwest Congress and Leadership Summit</strong>{" "}
          continues to serve as a platform for leadership development,
          collaboration, and advocacy among Medical Laboratory Science students
          across the region.
        </p>

        <div className="text-center mt-4">
          <img
            src="Pictures/unimed-visit.jpg"
            alt="NIMELSSA Southwest Executives Visit UNIMED Ondo"
            className="img-fluid rounded"
          />
          <p className="text-muted mt-2">
            <small>
              NIMELSSA Southwest delegation with the Acting Vice Chancellor,
              UNIMED Ondo
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
