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
    <div className="bg-light">
      {/* HERO SECTION */}
      <header className="hero">
        <div className="container text-center">
          <h1 className="animate__animated animate__fadeInUp">Events & Activities</h1>
          <p className="lead text-white opacity-90 animate__animated animate__fadeInUp animate__delay-1s">
            Highlights of impactful engagements during our tenure
          </p>
        </div>
      </header>

      {/* EVENT SUMMARY */}
      <section className="bg-white">
        <div className="container">
          <div className="p-4 mb-5 rounded-4 shadow-sm bg-light border-start border-4 border-success animate__animated animate__fadeIn">
            <p className="lead mb-0 text-dark">
              During our tenure, the Southwest Regional Administration of the
              Nigerian Medical Laboratory Science Students’ Association
              (NIMELSSA) has actively engaged in impactful academic,
              professional, and leadership activities across institutions and
              events within and beyond the region.
            </p>
          </div>

          <div className="row g-4">
            {/* Summits and Visits */}
            <div className="col-md-6">
              <div className="card h-100 p-4 border-0 shadow-sm">
                <h5 className="fw-bold text-success mb-3">
                  <i className="bi bi-star-fill me-2"></i> Participation in Major Summits
                </h5>
                <p className="text-muted">
                  Attended the <strong>Young Medical Laboratory Scientists Forum (YMLSF)</strong> Regional and National Summits, representing the region with excellence and commitment.
                </p>

                <h5 className="fw-bold mt-4 text-success mb-3">
                  <i className="bi bi-building me-2"></i> Courtesy Visits to Institutions
                </h5>
                <ul className="list-unstyled text-muted">
                  {["Afe Babalola University", "Bowen University", "Trinity University", "Osun State University", "Redeemer’s University", "Lagos State University", "Fountain University"].map((uni, i) => (
                    <li key={i} className="mb-2"><i className="bi bi-check2-circle text-success me-2"></i>{uni}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Royal and Professional Engagements */}
            <div className="col-md-6">
              <div className="card h-100 p-4 border-0 shadow-sm">
                <h5 className="fw-bold text-success mb-3">
                  <i className="bi bi-award-fill me-2"></i> Royal & Professional Engagements
                </h5>
                <ul className="list-unstyled text-muted">
                  <li className="mb-3">
                    <i className="bi bi-check2-circle text-success me-2"></i>
                    Visited traditional rulers including the <strong>Alaafin of Oyo</strong> and the <strong>Soun of Ogbomoso</strong>.
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-check2-circle text-success me-2"></i>
                    Paid a courtesy visit to the <strong>AMLSN Oyo State Chairman-Elect, MLS Akinbile Adebola</strong>.
                  </li>
                  <li>
                    <i className="bi bi-check2-circle text-success me-2"></i>
                    Participated in the <strong>Ogbomoso Cradle Carnival</strong>.
                  </li>
                </ul>

                <h5 className="fw-bold mt-4 text-success mb-3">
                  <i className="bi bi-shield-check me-2"></i> Strategic Partnerships
                </h5>
                <ul className="list-unstyled text-muted">
                  <li className="mb-2"><i className="bi bi-check2-circle text-success me-2"></i>Secured distinguished patrons.</li>
                  <li className="mb-2"><i className="bi bi-check2-circle text-success me-2"></i>Strengthened institutional relationships.</li>
                  <li><i className="bi bi-check2-circle text-success me-2"></i>Received commendations for excellence.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="bg-light">
        <div className="container text-center">
          <h2 className="section-title">Gallery Highlights</h2>

          <div className="row g-3 justify-content-center">
            {previewImages.map((file, i) => (
              <div key={i} className="col-6 col-md-3">
                <div className="gallery-item overflow-hidden rounded-4 shadow-sm">
                  <img
                    src={`/Pictures/${file}`}
                    alt={file}
                    className="img-fluid gallery-img"
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            className="btn btn-success btn-lg px-5 mt-5"
            data-bs-toggle="modal"
            data-bs-target="#galleryModal"
          >
            View More Moments
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
