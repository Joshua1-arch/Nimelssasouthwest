"use client";

import { useEffect } from "react";
import Link from "next/link";
import imagesData from "./images.json";

export default function HomePage() {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelector(".navbar")?.classList.toggle("scrolled", window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="animate__animated animate__fadeInUp fw-bold text-uppercase tracking-wider mb-2">
                NIMELSSA LAUTECH
              </h1>
              <p className="lead text-white opacity-90 animate__animated animate__fadeInUp animate__delay-1s fs-4 mb-0">
                Nigerian Medical Laboratory Science Students&apos; Association
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="bg-white">
        <div className="container text-center">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="row justify-content-center g-4">
            <div className="col-md-5">
              <div className="card h-100">
                <div className="p-3">
                  <img
                    src="/event1.jpg"
                    className="card-img-top rounded-4"
                    alt="Health Week'26"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Health Week'26</h5>
                  <p className="text-muted mb-0"><i className="bi bi-calendar-event me-2"></i>July 20-24, 2026</p>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="card h-100">
                <div className="p-3">
                  <img
                    src="/event2.jpg"
                    className="card-img-top rounded-4"
                    alt="Sports Festival"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Orientation Program</h5>
                  <p className="text-muted mb-0"><i className="bi bi-calendar-event me-2"></i>July 24, 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="bg-light">
        <div className="container text-center">
          <h2 className="section-title">News & Updates</h2>
          <div className="row g-4">
            <div className="col-md-6 text-start">
              <div className="card news-card h-100">
                <img src="/image1 (15).jpg" className="card-img-top" alt="News 1" />
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2">
                    <span className="badge bg-success-subtle text-success border border-success-subtle me-2">Academic</span>
                    <small className="text-muted"><i className="bi bi-clock me-1"></i>July 30, 2026</small>
                  </div>
                  <h5 className="card-title text-dark fw-bold text-uppercase">NIMELSSA LAUTECH EMERGES AS FIRST RUNNER-UP AT THE NUNSA SYMPOSIUM DEBATE</h5>
                  <p className="card-text text-muted mb-4">
                    The Executive Council is pleased to announce that the NIMELSSA LAUTECH Chapter emerged as the First Runner-Up in the debate competition held during the NUNSA Symposium...
                  </p>
                  <Link href="/news/nunsa-debate" className="btn btn-outline-success">Read Full Article</Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 text-start">
              <div className="card news-card h-100">
                <img src="/image1 (55).jpg" className="card-img-top" alt="News 2" />
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2">
                    <span className="badge bg-success-subtle text-success border border-success-subtle me-2">Chapter</span>
                    <small className="text-muted"><i className="bi bi-clock me-1"></i>May 13, 2026</small>
                  </div>
                  <h5 className="card-title text-dark fw-bold text-uppercase">REPORT OF COURTESY VISIT TO OUR PATRON</h5>
                  <p className="card-text text-muted mb-4">
                    The leadership of NIMELSSA, LAUTECH Chapter, recently paid a Courtesy Visit to our Patron, His Royal Majesty, Oba Dr. Sunday Oladapo Oyediran...
                  </p>
                  <Link href="/news/patron-visit" className="btn btn-outline-success">Read Full Article</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white overflow-hidden">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5 text-center position-relative">
              <div className="speech-img-wrapper" style={{ marginBottom: "2rem" }}>
                <img
                  src="/presido.jpg"
                  alt="President"
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ width: "100%", maxWidth: "400px", border: "8px solid #fff" }}
                />
              </div>
              <div className="mt-2">
                <h4 className="mb-1 text-primary">Rt. Hon. Popoola David Ayanfeoluwa</h4>
                <p className="text-muted fw-500 mb-0">Chapter President</p>
                <p className="text-primary small fw-bold">NIMELSSA LAUTECH Chapter</p>
              </div>
            </div>

            <div className="col-lg-7">
              <h2 className="section-title text-start mb-4">Presidential Speech</h2>
              <div className="speech-content">
                <p className="lead mb-4" style={{ textAlign: "justify" }}>
                  Dear Colleagues, Esteemed Guests, and Visitors,
                </p>
                <p className="mb-4" style={{ textAlign: "justify" }}>
                  It is with great joy and humility that I welcome you to the official platform of the{" "}
                  <strong>Nigerian Medical Laboratory Science Students&apos; Association (NIMELSSA), LAUTECH Chapter</strong>.
                </p>
                <p className="mb-4" style={{ textAlign: "justify" }}>
                  Our guiding theme, <strong>&quot;The Future of MLS: Innovation, Leadership, and Impact,&quot;</strong> reflects our deep
                  commitment to advancing Medical Laboratory Science through excellence, collaboration, and purposeful service.
                  Throughout this tenure, we have worked diligently to strengthen the bridge between academic learning and clinical
                  practice. We have achieved this through impactful seminars, capacity-building workshops, our flagship annual{" "}
                  <strong>Health Week</strong>, and community health outreaches, all while fostering leadership and promoting the vital role of
                  Medical Laboratory Science in the healthcare ecosystem.
                </p>
                <p className="mb-4" style={{ textAlign: "justify" }}>
                  These achievements are a testament to our collective dedication. Every milestone we have reached has been made
                  possible through the unwavering support, commitment, and shared vision of our members, partners, and stakeholders.
                </p>
                <div className="mt-5 p-4 bg-light rounded-4 border-start border-4 border-success">
                  <p className="fst-italic mb-2 text-muted">&quot;With warm regards,&quot;</p>
                  <p className="h5 fw-bold mb-0">Rt. Hon. Popoola David Ayanfeoluwa</p>
                  <p className="text-primary small mb-0 fw-bold text-uppercase tracking-wider">President, NIMELSSA LAUTECH Chapter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
      <section id="gallery" className="bg-light">
        <div className="container text-center">
          <h2 className="section-title">Gallery</h2>
          <div className="row g-3" id="gallery-preview">
            {imagesData && imagesData.length > 0 ? (
              imagesData.slice(0, 6).map((file, index) => (
                <div key={index} className="col-6 col-md-4">
                  <div className="gallery-item overflow-hidden rounded-4 shadow-sm">
                    <img
                      src={`/Pictures/${encodeURIComponent(file)}`}
                      alt={`Gallery ${index + 1}`}
                      className="img-fluid"
                      style={{ height: "250px", width: "100%", objectFit: "cover" }}
                      onError={(e) => (e.target.closest(".col-6").style.display = "none")}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted">No images found</p>
            )}
          </div>
          {imagesData.length > 6 && (
            <div className="mt-5">
              <button className="btn btn-success btn-lg px-5" data-bs-toggle="modal" data-bs-target="#galleryModal">
                View Full Gallery
              </button>
            </div>
          )}
        </div>
      </section>
*/}

      <section id="resources" className="bg-light text-center">
        <div className="container">
          <h2 className="section-title">Resources</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <button type="button" className="btn btn-white w-100 p-4 shadow-sm border-0 rounded-4 transition hover-y" data-bs-toggle="modal" data-bs-target="#elibraryModal">
                <div className="mb-3 fs-1 text-success"><i className="bi bi-book-half"></i></div>
                <h5 className="fw-bold">Access E-Library</h5>
                <p className="small text-muted mb-0">Textbooks, past questions & resources</p>
              </button>
            </div>
            <div className="col-md-4">
              <a href="/REVIEWED CONSTITUTION 23-24.pdf" target="_blank" rel="noreferrer" className="btn btn-white w-100 p-4 shadow-sm border-0 rounded-4 transition hover-y text-decoration-none">
                <div className="mb-3 fs-1 text-success"><i className="bi bi-file-earmark-text"></i></div>
                <h5 className="fw-bold text-dark">Our Constitution</h5>
                <p className="small text-muted mb-0">Read our governing principles</p>
              </a>
            </div>
            <div className="col-md-4">
              <a href="https://example-elibrary-link.com" target="_blank" rel="noreferrer" className="btn btn-white w-100 p-4 shadow-sm border-0 rounded-4 transition hover-y text-decoration-none">
                <div className="mb-3 fs-1 text-success"><i className="bi bi-music-note-beamed"></i></div>
                <h5 className="fw-bold text-dark">NIMELSSA Anthem</h5>
                <p className="small text-muted mb-0">Download our official anthem</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 
      <div className="modal fade" id="galleryModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content bg-dark">
            <div className="modal-header border-0">
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-0">
              <div id="galleryCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {imagesData.map((file, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                      <img src={`/Pictures/${encodeURIComponent(file)}`} className="d-block w-100" style={{ objectFit: "contain", maxHeight: "90vh" }} alt={`Gallery ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
*/}

      <div className="modal fade" id="elibraryModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content border-0 shadow-lg rounded-4">
            <div className="modal-header bg-success text-white p-4 border-0">
              <h5 className="modal-title fw-bold"><i className="bi bi-book-half me-2"></i> NIMELSSA E-LIBRARY</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body p-4 text-start">
              <p className="lead mb-4">Access top Medical Laboratory Science textbooks, scholarship resources, and professional exam past questions.</p>
              <div className="resource-category mb-4 p-3 bg-light rounded-3">
                <h6 className="fw-bold text-success mb-2"><i className="bi bi-journal-text me-2"></i> Medical Laboratory Science textbooks</h6>
                <a href="https://bit.ly/4joUG6t" target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-success">Access Folder</a>
              </div>
              <div className="resource-category mb-4 p-3 bg-light rounded-3">
                <h6 className="fw-bold text-success mb-2"><i className="bi bi-mortarboard me-2"></i> Scholarships & CV Samples</h6>
                <a href="https://drive.google.com/drive/folders/1GghrKVRaIJ3QtyGoMyB5PP7ntoFjqp61" target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-success">Access Folder</a>
              </div>
              <div className="resource-category p-3 bg-light rounded-3">
                <h6 className="fw-bold text-success mb-2"><i className="bi bi-test-tube me-2"></i> Professional Exam Past Questions</h6>
                <a href="https://drive.google.com/drive/folders/1LOkGjXmYFgkzy8HAh899I4Ho5CNUmu1n" target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-success">Access Folder</a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
