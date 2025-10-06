import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const EventsPage = () => {
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  useEffect(() => {
    fetch("/images.json")
      .then((res) => res.json())
      .then((files) => {
        const shuffled = [...files].sort(() => 0.5 - Math.random());
        setPreviewImages(shuffled.slice(0, 4)); // only 4 preview images
        setImages(files); // all images for the carousel
      })
      .catch((err) => console.error("Error loading images:", err));
  }, []);

  return (
    <div style={{ backgroundColor: "#f1f3f0" }}>
      {/* HERO SECTION */}
      <header
        className="text-center py-5"
        style={{ backgroundColor: "#22512d", color: "white" }}
      >
        <div className="container">
          <h1 className="fw-bold">Events & Activities</h1>
          <p className="lead mb-0">
            Highlights of impactful engagements during our tenure
          </p>
        </div>
      </header>

      {/* EVENT SUMMARY */}
      <section className="py-5">
        <div className="container">
          <div className="p-4 mb-4 rounded-4 shadow-sm bg-white border-start border-4 border-success">
            <p className="lead-text">
              During our tenure, the Southwest Regional Administration of the
              Nigerian Medical Laboratory Science Students’ Association
              (NIMELSSA) has actively engaged in impactful academic,
              professional, and leadership activities across institutions and
              events within and beyond the region.
            </p>
            <p className="text-muted">
              Through these activities, our administration continues to uphold
              the ideals of professionalism, innovation, and unity among Medical
              Laboratory Science students in the Southwest region and beyond.
            </p>
          </div>

          <div className="row gy-4">
            {/* Summits and Visits */}
            <div className="col-md-6">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                <h5 className="fw-bold text-success">
                  Participation in Major Summits
                </h5>
                <p className="text-muted">
                  Attended the{" "}
                  <strong>
                    Young Medical Laboratory Scientists Forum (YMLSF)
                  </strong>{" "}
                  Regional and National Summits, representing the region with
                  excellence and commitment.
                </p>

                <h5 className="fw-bold mt-4 text-success">
                  Courtesy Visits to Institutions
                </h5>
                <ul className="text-muted">
                  <li>Afe Babalola University, Ado-Ekiti</li>
                  <li>Bowen University, Iwo</li>
                  <li>Trinity University, Lagos</li>
                  <li>Osun State University, Osogbo</li>
                  <li>Redeemer’s University, Ede</li>
                  <li>Lagos State University (LASU)</li>
                  <li>Fountain University, Osogbo</li>
                </ul>

                <h5 className="fw-bold mt-4 text-success">
                  Conducted high-profile visits to:
                </h5>
                <ul className="text-muted">
                  <li>
                    Ladoke Akintola University of Technology (LAUTECH)
                  </li>
                  <li>University of Medical Sciences (UNIMED)</li>
                </ul>
              </div>
            </div>

            {/* Royal and Professional Engagements */}
            <div className="col-md-6">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                <h5 className="fw-bold text-success">
                  Royal and Professional Engagements
                </h5>
                <ul className="text-muted">
                  <li>
                    Visited traditional rulers including the{" "}
                    <strong>Alaafin of Oyo</strong> and the{" "}
                    <strong>Soun of Ogbomoso</strong>.
                  </li>
                  <li>
                    Paid a courtesy visit to the{" "}
                    <strong>
                      AMLSN Oyo State Chairman-Elect, MLS Akinbile Adebola
                    </strong>
                    .
                  </li>
                  <li>
                    Participated in the{" "}
                    <strong>Ogbomoso Cradle Carnival</strong> to strengthen
                    community ties.
                  </li>
                </ul>

                <h5 className="fw-bold mt-4 text-success">
                  Strategic Partnerships & Recognitions
                </h5>
                <ul className="text-muted">
                  <li>
                    Secured two distinguished patrons —{" "}
                    <strong>Prof. Mujeeb Shittu</strong> and{" "}
                    <strong>Mr. Akeem Adesina Odekanmi</strong>.
                  </li>
                  <li>
                    Strengthened professional relationships with institutional
                    leaders and stakeholders.
                  </li>
                  <li>
                    Received commendations for commitment to student development
                    across the Southwest region.
                  </li>
                </ul>
              </div>
            </div>

            {/* National Representation */}
            <div className="col-md-6">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                <h5 className="fw-bold text-success">National Representation</h5>
                <p className="text-muted">
                  Represented the Southwest Region at the{" "}
                  <strong>48th NIMELSSA National Convention</strong>, actively
                  contributing to deliberations at the{" "}
                  <strong>
                    Medical Laboratory Science Council of Nigeria (MLSCN)
                  </strong>
                  , Abuja.
                </p>
              </div>
            </div>

            {/* Academic & Capacity Building */}
            <div className="col-md-6">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                <h5 className="fw-bold text-success">
                  Academic & Capacity-Building Events
                </h5>
                <ul className="text-muted">
                  <li>
                    Hosted the{" "}
                    <strong>
                      2nd Edition of the Southwest Regional Congress
                    </strong>
                    , organized by the UNIMED Chapter.
                  </li>
                  <li>
                    Facilitated <strong>nine (9) professional webinars</strong>.
                  </li>
                  <li>
                    Organized a <strong>Data Analysis training</strong> sponsored
                    by SQI College of ICT.
                  </li>
                  <li>
                    Encouraged inter-institutional collaboration through virtual
                    platforms.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4" style={{ color: "#22512d" }}>
            Gallery
          </h2>

          <div className="row g-3 justify-content-center">
            {previewImages.map((file, i) => (
              <div key={i} className="col-6 col-md-3">
                <img
                  src={`/Pictures/${file}`}
                  alt={file}
                  className="img-fluid rounded shadow-sm gallery-img"
                />
              </div>
            ))}
          </div>

          <button
            className="btn btn-success mt-4"
            data-bs-toggle="modal"
            data-bs-target="#galleryModal"
          >
            View More
          </button>
        </div>
      </section>

      {/* GALLERY MODAL */}
      <div
        className="modal fade"
        id="galleryModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content bg-dark">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body p-0">
              <div
                id="galleryCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {images.map((file, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${
                        index === 0 ? "active" : ""
                      }`}
                    >
                      <img
                        src={`/Pictures/${file}`}
                        alt={file}
                        className="d-block w-100"
                        style={{
                          objectFit: "contain",
                          maxHeight: "90vh",
                        }}
                      />
                    </div>
                  ))}
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#galleryCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#galleryCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </div>

            <div className="modal-footer border-0 justify-content-center">
              <button className="btn btn-danger" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .gallery-img {
          height: 220px;
          object-fit: cover;
          width: 100%;
          transition: transform 0.3s ease;
        }
        .gallery-img:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default EventsPage;
