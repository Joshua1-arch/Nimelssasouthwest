import { useEffect, useState } from "react";
// ✅ Import your JSON directly from src
import imagesData from "./images.json";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Set data directly from import
    setImages(imagesData);
  }, []);

  // Only show first 6 preview images
  const previewImages = images.slice(0, 6);

  return (
    <section id="gallery" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Gallery</h2>

        {/* Preview Grid */}
        <div className="row g-2" id="gallery-preview">
          {previewImages.map((file, index) => (
            <div key={index} className="col-6 col-md-4 mb-3">
              <img
                src={`Pictures/${encodeURIComponent(file)}`}
                alt={`Gallery ${index + 1}`}
                className="img-fluid rounded shadow-sm"
              />
            </div>
          ))}
        </div>

        {/* View More Button */}
        {images.length > 6 && (
          <div className="text-center mt-3">
            <button
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#galleryModal"
            >
              View More
            </button>
          </div>
        )}

        {/* Modal Carousel */}
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
                  aria-label="Close"
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
                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                      >
                        <img
                          src={`Pictures/${encodeURIComponent(file)}`}
                          className="d-block w-100"
                          style={{
                            objectFit: "contain",
                            maxHeight: "90vh",
                          }}
                          alt={`Gallery ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Carousel Controls */}
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
                    <span className="visually-hidden">Previous</span>
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
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>

              <div className="modal-footer border-0 justify-content-center">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
