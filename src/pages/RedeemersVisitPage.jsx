import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";

export default function RedeemersVisitPage() {
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
          NIMELSSA SW Leaders Pay Courtesy Visit to Redeemer’s University
        </h4>
        <p className="press-meta text-center">
          Press Release | Issued: Wednesday, August 6, 2025
        </p>

        <p>
          In a continued effort to deepen collaboration and foster inclusive
          participation across institutions, the Southwest leadership of the{" "}
          <strong>Nigerian Medical Laboratory Science Students’ Association (NIMELSSA)</strong>{" "}
          paid a strategic courtesy visit to the Department of Medical Laboratory
          Science, Redeemer’s University.
        </p>

        <p>
          The visiting team—comprising the{" "}
          <strong>Regional President, Rt. Hon. Olorunniyi Pelumi</strong>;{" "}
          <strong>General Secretary, Hon. Ogunniyi Akindele Isaac</strong>;{" "}
          <strong>Welfare Director, Hon. Nureni-Yusuf Mariam</strong>; and{" "}
          <strong>Director of Health Advocacy, Hon. Oladeji Emmanuel</strong>—was
          warmly received by the{" "}
          <strong>
            Head of Department (HOD), Dr. Tola Ohiengbohwan (BMLS (Med Micro),
            MHPM, MSc (Immunology & Immunochemistry), PhD (Med Micro))
          </strong>
          .
        </p>

        <p>
          The HOD provided an insightful overview of the department’s journey
          since its establishment in the 2022/2023 academic year, noting steady
          progress in academic excellence and structural development.
        </p>

        <p>
          A major highlight of the meeting was a candid discussion on the
          Redeemer’s University chapter’s low visibility at regional events. The{" "}
          <strong>Chapter President, Ojimi Samuel Asiwaju</strong>, attributed this
          to communication breakdowns and delays in receiving updates from the
          regional body. The regional executives pledged to bridge this gap by
          ensuring better communication and engagement moving forward.
        </p>

        <p>
          Other chapter executives present included{" "}
          <strong>Ibeh Samuel (Vice President)</strong>,{" "}
          <strong>Afolabi Joshua (General Secretary)</strong>,{" "}
          <strong>Segun Micheal Anjoaloluwa (Sports Director)</strong>, and other
          active members.
        </p>

        <p>
          The delegation also shared updates on the forthcoming NIMELSSA Southwest
          Convention, emphasizing the importance of Redeemer’s University’s
          participation. The HOD expressed enthusiastic support for the event and
          encouraged students to pursue both academic and research-based careers,
          highlighting the essential role of scholars in advancing the Medical
          Laboratory Science profession.
        </p>

        <p>
          This visit marks a positive shift in engagement between NIMELSSA
          Southwest and Redeemer’s University, laying a strong foundation for
          enhanced cooperation and leadership development in the region.
        </p>

        <div className="text-center mt-4">
          <img
            src="Pictures/1 (15).jpg"
            alt="NIMELSSA SW Leaders at Redeemer's University"
            className="img-fluid rounded"
          />
          <p className="text-muted mt-2">
            <small>
              NIMELSSA Southwest Leaders with the HOD, Redeemer’s University
            </small>
          </p>
        </div>
      </section>

      {/* === Footer === */}
    
    </>
  );
}
