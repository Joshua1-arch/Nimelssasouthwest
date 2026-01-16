// src/pages/HomePage.jsx
import { useEffect } from "react";
import imagesData from "../images.json";
import { NavLink } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  useEffect(() => {
    // Navbar scroll effect
    const handleScroll = () => {
      document
        .querySelector(".navbar")
        .classList.toggle("scrolled", window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="hero"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="animate__animated animate__fadeInUp">
                Welcome to the NIMELSSA LAUTECH CHAPTER
              </h1>
              <div className="animate__animated animate__fadeInUp animate__delay-2s">
                <a href="#about" className="btn btn-primary btn-lg px-5">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="bg-white">
        <div className="container text-center">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="row justify-content-center g-4">
            <div className="col-md-5">
              <div className="card h-100">
                <div className="p-3">
                  <img
                    src="/event1.jpeg"
                    className="card-img-top rounded-4"
                    alt="Ogbomos '25 Convention"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Orientation Program
                  </h5>
                  <p className="text-muted"><i className="bi bi-calendar-event me-2"></i>Sept 25, 2025</p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScLCJdC8a-HjvtPdqZIPT_-MYqmRfsb5wiS9mNxQjXDqdpaxw/viewform?usp=send_form"
                    className="btn btn-success w-100"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="card h-100">
                <div className="p-3">
                  <img
                    src="/event1.jpeg"
                    className="card-img-top rounded-4"
                    alt="Sports Festival"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Orientation Program</h5>
                  <p className="text-muted"><i className="bi bi-calendar-event me-2"></i>Oct 10, 2025</p>
                  <a
                    href=""
                    className="btn btn-success w-100"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section id="news" className="bg-light">
        <div className="container text-center">
          <h2 className="section-title">News & Updates</h2>
          <div className="row g-4">
            {/* News 1 */}
            <div className="col-md-6 text-start">
              <div className="card news-card h-100">
                <img
                  src="image1 (15).jpg"
                  className="card-img-top"
                  alt="News 1"
                />
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2">
                    <span className="badge bg-success-subtle text-success border border-success-subtle me-2">Regional</span>
                    <small className="text-muted"><i className="bi bi-clock me-1"></i>August 6, 2025</small>
                  </div>
                  <h5 className="card-title text-dark">THE SOUTHWEST SENTINEL</h5>
                  <p className="card-text text-muted mb-4">
                    NIMELSSA SW leaders pay courtesy visit to Redeemer's
                    University...
                  </p>
                  <NavLink to="/news/redeemers-visit" className="btn btn-outline-success">
                    Read Full Article
                  </NavLink>
                </div>
              </div>
            </div>

            {/* News 2 */}
            <div className="col-md-6 text-start">
              <div className="card news-card h-100">
                <img
                  src="image1 (55).jpg"
                  className="card-img-top"
                  alt="News 2"
                />
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2">
                    <span className="badge bg-success-subtle text-success border border-success-subtle me-2">Regional</span>
                    <small className="text-muted"><i className="bi bi-clock me-1"></i>July 8, 2025</small>
                  </div>
                  <h5 className="card-title text-dark">THE SOUTHWEST SENTINEL</h5>
                  <p className="card-text text-muted mb-4">
                    NIMELSSA SW leaders pay courtesy visit to Lagos State University...
                  </p>
                  <NavLink to="/news/lagos-visit" className="btn btn-outline-success">
                    Read Full Article
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presidential Speech Section */}
      <section id="about" className="bg-white overflow-hidden">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Image Section */}
            <div className="col-lg-5 text-center position-relative">
              <div className="speech-img-wrapper">
                <img
                  src="presido.jpg"
                  alt="President"
                  className="img-fluid rounded-4 shadow-lg mb-4"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    border: "8px solid #fff",
                  }}
                />
              </div>
              <div className="mt-2">
                <h4 className="mb-1 text-primary">Rt. Hon. Olorunniyi Pelumi Olaoluwa</h4>
                <p className="text-muted fw-500 mb-0">Regional President</p>
                <p className="text-primary small fw-bold">NIMELSSA Southwest Region</p>
              </div>
            </div>

            {/* Speech Text */}
            <div className="col-lg-7">
              <h2 className="section-title text-start mb-4">Presidential Speech</h2>
              <div className="speech-content">
                <p className="lead mb-4" style={{ textAlign: "justify" }}>
                  Dear Comrades and Visitors, it is a great honor to welcome you to the official website of the{" "}
                  <strong>Nigerian Medical Laboratory Science Students’ Association, Southwest Region</strong>.
                </p>

                <p className="mb-4" style={{ textAlign: "justify" }}>
                  This platform reflects our shared commitment to unity, innovation, and excellence among Medical
                  Laboratory Science students. At NIMELSSA Southwest, we are building a strong community that empowers students, bridges the gap
                  between learning and practice, and amplifies our relevance in the healthcare system.
                </p>

                <p className="mb-4" style={{ textAlign: "justify" }}>
                  Our focus remains clear — to inspire leadership, uphold professionalism, and advance the science that sustains life. Together, we continue to <strong>Inquire, Analyze, Create, and Transform (I ACT)</strong> for a healthier
                  and brighter future.
                </p>

                <div className="mt-5 p-4 bg-light rounded-4 border-start border-4 border-success">
                  <p className="fst-italic mb-2 text-muted">"With warm regards,"</p>
                  <p className="h5 fw-bold mb-0">Rt. Hon. Olorunniyi Pelumi Olaoluwa</p>
                  <p className="text-primary small mb-0 fw-bold text-uppercase tracking-wider">Regional President, NIMELSSA Southwest Region</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Universities Offering MLS in Southwestern Nigeria */}

<section id="gallery" className="bg-light">
  <div className="container text-center">
    <h2 className="section-title">Gallery</h2>

    {/* Preview Grid (first 6 images) */}
    <div className="row g-3" id="gallery-preview">
      {imagesData && imagesData.length > 0 ? (
        imagesData.slice(0, 6).map((file, index) => (
          <div key={index} className="col-6 col-md-4">
            <div className="gallery-item overflow-hidden rounded-4 shadow-sm">
              <img
                src={`Pictures/${encodeURIComponent(file)}`}
                alt={`Gallery ${index + 1}`}
                className="img-fluid"
                style={{ height: "250px", width: "100%", objectFit: "cover" }}
                onError={(e) => (e.target.closest('.col-6').style.display = "none")} 
              />
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-muted">No images found</p>
      )}
    </div>

    {/* View More Button */}
    {imagesData.length > 6 && (
      <div className="mt-5">
        <button
          className="btn btn-success btn-lg px-5"
          data-bs-toggle="modal"
          data-bs-target="#galleryModal"
        >
          View Full Gallery
        </button>
      </div>
    )}
  </div>
</section>

{/* Partners / Sponsors Section */}
<section id="partners" className="bg-white">
  <div className="container text-center">
    <h2 className="section-title">Our Partners & Sponsors</h2>
    <p className="text-muted mb-5">
      We proudly collaborate with outstanding institutions and brands supporting our vision.
    </p>

    {/* Bootstrap Carousel */}
    <div
      id="sponsorCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2500"
    >
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap px-5">
            <img src="Life Anchor Advert.png" alt="Sponsor" className="sponsor-logo" />
            <img src="total.png" alt="Sponsor" className="sponsor-logo" />
            <img src="Genomac.png" alt="Sponsor" className="sponsor-logo" />
            <img src="sqi.png" alt="Sponsor" className="sponsor-logo" />
            <img src="genesis.png" alt="Sponsor" className="sponsor-logo" />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap px-5">
            <img src="Genomac.png" alt="Sponsor" className="sponsor-logo" />
            <img src="genesis.png" alt="Sponsor" className="sponsor-logo" />
            <img src="sqi.png" alt="Sponsor" className="sponsor-logo" />
            <img src="total.png" alt="Sponsor" className="sponsor-logo" />
            <img src="Life Anchor Advert.png" alt="Sponsor" className="sponsor-logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Resources Section */}
<section id="resources" className="bg-light text-center">
  <div className="container">
    <h2 className="section-title">Resources</h2>
    <div className="row g-4 justify-content-center">
      <div className="col-md-4">
        <button
          type="button"
          className="btn btn-white w-100 p-4 shadow-sm border-0 rounded-4 transition hover-y"
          data-bs-toggle="modal"
          data-bs-target="#elibraryModal"
        >
          <div className="mb-3 fs-1 text-success"><i className="bi bi-book-half"></i></div>
          <h5 className="fw-bold">Access E-Library</h5>
          <p className="small text-muted mb-0">Textbooks, past questions & resources</p>
        </button>
      </div>
      <div className="col-md-4">
        <a
          href="NIMELSSA_SOUTHWEST_CONSTITUTION[1].docx"
          target="_blank"
          rel="noreferrer"
          className="btn btn-white w-100 p-4 shadow-sm border-0 rounded-4 transition hover-y text-decoration-none"
        >
          <div className="mb-3 fs-1 text-success"><i className="bi bi-file-earmark-text"></i></div>
          <h5 className="fw-bold text-dark">Our Constitution</h5>
          <p className="small text-muted mb-0">Read our governing principles</p>
        </a>
      </div>
      <div className="col-md-4">
        <a
          href="https://example-elibrary-link.com"
          target="_blank"
          rel="noreferrer"
          className="btn btn-white w-100 p-4 shadow-sm border-0 rounded-4 transition hover-y text-decoration-none"
        >
          <div className="mb-3 fs-1 text-success"><i className="bi bi-music-note-beamed"></i></div>
          <h5 className="fw-bold text-dark">NIMELSSA Anthem</h5>
          <p className="small text-muted mb-0">Download our official anthem</p>
        </a>
      </div>
    </div>
  </div>
</section>

{/* Gallery Modal */}
<div className="modal fade" id="galleryModal" tabIndex="-1" aria-hidden="true">
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
        <div id="galleryCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {imagesData.map((file, index) => (
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

{/* E-Library Modal */}
<div className="modal fade" id="elibraryModal" tabIndex="-1" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content border-0 shadow-lg rounded-4">
      <div className="modal-header bg-success text-white p-4 border-0">
        <h5 className="modal-title fw-bold">
          <i className="bi bi-book-half me-2"></i> NIMELSSA E-LIBRARY
        </h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
      </div>
      <div className="modal-body p-4 text-start">
        <p className="lead mb-4">
          Access top Medical Laboratory Science textbooks, scholarship resources, and professional exam past questions.
        </p>

        <div className="resource-category mb-4 p-3 bg-light rounded-3">
          <h6 className="fw-bold text-success mb-2">
            <i className="bi bi-journal-text me-2"></i> Medical Laboratory Science Textbooks
          </h6>
          <a href="https://drive.google.com/drive/folders/1HlKZHWpxOtY1BbxjewJs1jRmre8aFTRc" target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-success">
            Access Folder
          </a>
        </div>

        <div className="resource-category mb-4 p-3 bg-light rounded-3">
          <h6 className="fw-bold text-success mb-2">
            <i className="bi bi-mortarboard me-2"></i> Scholarships & CV Samples
          </h6>
          <a href="https://drive.google.com/drive/folders/1GghrKVRaIJ3QtyGoMyB5PP7ntoFjqp61" target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-success">
            Access Folder
          </a>
        </div>

        <div className="resource-category p-3 bg-light rounded-3">
          <h6 className="fw-bold text-success mb-2">
            <i className="bi bi-test-tube me-2"></i> Professional Exam Past Questions
          </h6>
          <a href="https://drive.google.com/drive/folders/1LOkGjXmYFgkzy8HAh899I4Ho5CNUmu1n" target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-success">
            Access Folder
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<section id="contact" className="bg-white">
  <div className="container">
    <h2 className="section-title text-center d-block">Contact Us</h2>

    <div className="row justify-content-center g-5">
      <div className="col-lg-7">
        <div className="card p-4">
          <form>
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Full Name" required />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Email Address" required />
              </div>
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Subject" required />
            </div>
            <div className="mb-4">
              <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-success w-100">Send Message</button>
          </form>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="h-100 d-flex flex-column justify-content-center">
          <div className="d-flex align-items-center mb-4">
            <div className="icon-box bg-success-subtle text-success me-3">
              <i className="bi bi-geo-alt"></i>
            </div>
            <div>
              <h6 className="fw-bold mb-0">Location</h6>
              <p className="text-muted small mb-0">LAUTECH, Ogbomoso, Nigeria</p>
            </div>
          </div>
          <div className="d-flex align-items-center mb-4">
            <div className="icon-box bg-success-subtle text-success me-3">
              <i className="bi bi-envelope"></i>
            </div>
            <div>
              <h6 className="fw-bold mb-0">Email</h6>
              <p className="text-muted small mb-0">info@nimelssasouthwest.org</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="icon-box bg-success-subtle text-success me-3">
              <i className="bi bi-telephone"></i>
            </div>
            <div>
              <h6 className="fw-bold mb-0">Phone</h6>
              <p className="text-muted small mb-0">+234 812 345 6789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




    </>
  );
}
