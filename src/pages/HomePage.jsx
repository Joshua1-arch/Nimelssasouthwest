// src/pages/HomePage.jsx
import { useEffect } from "react";
import imagesData from "../images.json";
import { NavLink } from "react-router-dom";
import "../HomePage.css";

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
        className="hero text-center text-white d-flex align-items-center justify-content-center"
        style={{
          background:
            "url('https://picsum.photos/1920/600?random=1') center/cover no-repeat",
          padding: "120px 20px",
        }}
      >
        <div className="container">
          <h1>Welcome to the NIMELSSA SOUTHWEST</h1>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Upcoming Events</h2>
          <div className="row justify-content-center">
            <div className="col-md-5 mb-4">
              <div className="card shadow-sm text-center">
                <img
                  src="event2.jpg"
                  className="mx-auto d-block mt-3 rounded"
                  alt="Ogbomos '25 Convention"
                  style={{ maxWidth: "90%" }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Ogbomos '25 NIMELSSA Southwest Convention
                  </h5>
                  <p>Date: Sept 25, 2025</p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScLCJdC8a-HjvtPdqZIPT_-MYqmRfsb5wiS9mNxQjXDqdpaxw/viewform?usp=send_form"
                    className="btn btn-primary"style={{ backgroundColor: "rgba(34,81,45,1)", borderColor: "rgba(34,81,45,1)" }}
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-5 mb-4">
              <div className="card shadow-sm text-center">
                <img
                  src="event2.jpg"
                  className="mx-auto d-block mt-3 rounded"
                  alt="Sports Festival"
                  style={{ maxWidth: "90%" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Sports Festival</h5>
                  <p>Date: Oct 10, 2025</p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScLCJdC8a-HjvtPdqZIPT_-MYqmRfsb5wiS9mNxQjXDqdpaxw/viewform?usp=send_form"
                    className="btn btn-primary"style={{ backgroundColor: "rgba(34,81,45,1)", borderColor: "rgba(34,81,45,1)" }}
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section id="news" className="py-5" style={{ backgroundColor: "#F8F9F5" }}>
        <div className="container">
          <h2
            className="text-center mb-5"
            style={{ color: "rgba(34,81,45,255)" }}
          >
            News & Updates
          </h2>
          <div className="row">
            {/* News 1 */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm h-100">
                <img
                  src="image1 (15).jpg"
                  className="card-img-top"
                  alt="News 1"
                />
                <div className="card-body">
                  <h5 className="card-title">THE SOUTHWEST SENTINEL</h5>
                  <p className="text-muted">
                    <small>Published: August 6, 2025</small>
                  </p>
                  <p className="card-text">
                    NIMELSSA SW leaders pay courtesy visit to Redeemer's
                    University...
                  </p>
                  <NavLink to="/news/redeemers-visit" className="btn btn-readmore">
                                    Read More
                                    </NavLink>
                </div>
              </div>
            </div>

            {/* News 2 */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm h-100">
                <img
                  src="image1 (55).jpg"
                  className="card-img-top"
                  alt="News 2"
                />
                <div className="card-body">
                  <h5 className="card-title">THE SOUTHWEST SENTINEL</h5>
                  <p className="text-muted">
                    <small>Published: July 8, 2025</small>
                  </p>
                  <p className="card-text">
                    NIMELSSA SW leaders pay courtesy visit to Lagos State University...
                  </p>
                  <NavLink to="/news/lagos-visit" className="btn btn-readmore">
                  Read More
                </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presidential Speech Section */}
      <section
        id="about"
        className="py-5"
        style={{ backgroundColor: "#f8f9f5" }}
      >
        <div className="container">
          <h2
            className="text-center mb-5"
            style={{
              color: "rgba(34,81,45,255)",
              fontWeight: "bold",
            }}
          >
            Presidential Speech
          </h2>

          <div className="row align-items-center">
            {/* Image Section */}
            <div className="col-md-5 text-center mb-4 mb-md-0">
              <img
                src="presido.jpg"
                alt="President"
                className="img-fluid rounded-circle shadow-sm"
                style={{
                  maxWidth: "220px",
                  border: "5px solid rgba(34,81,45,255)",
                }}
              />
              <h5 className="mt-3 mb-0" style={{ color: "rgba(34,81,45,255)" }}>
                Rt. Hon. Olorunniyi Pelumi Olaoluwa
              </h5>
              <p className="text-muted mb-0">Regional President</p>
              <p className="text-muted">NIMELSSA Southwest Region</p>
            </div>

            {/* Speech Text */}
            <div className="col-md-7">
              <p style={{ textAlign: "justify", fontSize: "1.05rem", lineHeight: "1.8" }}>
                Dear Comrades and Visitors, it is a great honor to welcome you to the official website of the{" "}
                <strong>Nigerian Medical Laboratory Science Students’ Association, Southwest Region</strong>.
                This platform reflects our shared commitment to unity, innovation, and excellence among Medical
                Laboratory Science students.
              </p>

              <p style={{ textAlign: "justify", fontSize: "1.05rem", lineHeight: "1.8" }}>
                At NIMELSSA Southwest, we are building a strong community that empowers students, bridges the gap
                between learning and practice, and amplifies our relevance in the healthcare system. Our focus remains
                clear — to inspire leadership, uphold professionalism, and advance the science that sustains life.
              </p>

              <p style={{ textAlign: "justify", fontSize: "1.05rem", lineHeight: "1.8" }}>
                Together, we continue to <strong>Inquire, Analyze, Create, and Transform (I ACT)</strong> for a healthier
                and brighter future.
              </p>

              <p className="mt-4 mb-0" style={{ fontStyle: "italic", color: "#22512d" }}>
                With warm regards,
              </p>
              <p className="mb-0 fw-bold">Rt. Hon. Olorunniyi Pelumi Olaoluwa</p>
              <p>Regional President, NIMELSSA Southwest Region</p>
            </div>
          </div>
        </div>
      </section>
{/* Universities Offering MLS in Southwestern Nigeria */}
<section
  id="universities"
  className="py-5"
  style={{ backgroundColor: "#ffffff" }}
>
  <div className="container">
    <h2
      className="text-center mb-5 fw-bold"
      style={{ color: "rgba(34,81,45,255)" }}
    >
      Universities Offering Medical Laboratory Science in Southwestern Nigeria
    </h2>

    <div className="table-responsive">
      <table className="table table-striped table-hover align-middle">
        <thead className="table-success text-center">
          <tr>
            <th>S/N</th>
            <th>University Name</th>
            <th>Location (State)</th>
            <th>Official Website</th>
          </tr>
        </thead>
        <tbody>
          {[
            { name: "Achievers University, Owo", state: "Ondo State", link: "https://www.achievers.edu.ng" },
            { name: "Adeleke University, Ede", state: "Osun State", link: "https://adelekeuniversity.edu.ng" },
            { name: "Afe Babalola University, Ado-Ekiti (ABUAD)", state: "Ekiti State", link: "https://www.abuad.edu.ng" },
            { name: "Anchor University, Lagos", state: "Lagos State", link: "https://aul.edu.ng" },
            { name: "Atiba University, Oyo", state: "Oyo State", link: "https://www.atibauniversity.edu.ng" },
            { name: "Babcock University, Ilisan-Remo", state: "Ogun State", link: "https://www.babcock.edu.ng" },
            { name: "Bowen University, Iwo", state: "Osun State", link: "https://www.bowen.edu.ng" },
            { name: "Caleb University, Imota, Lagos", state: "Lagos State", link: "https://www.calebuniversity.edu.ng" },
            { name: "Chrisland University, Abeokuta", state: "Ogun State", link: "https://www.chrislanduniversity.edu.ng" },
            { name: "Covenant University, Ota", state: "Ogun State", link: "https://www.covenantuniversity.edu.ng" },
            { name: "Dominion University, Ibadan", state: "Oyo State", link: "https://www.dominionuniversity.edu.ng" },
            { name: "Ekiti State University (EKSU)", state: "Ekiti State", link: "https://eksu.edu.ng" },
            { name: "Elizade University, Ilara-Mokin", state: "Ondo State", link: "https://www.elizadeuniversity.edu.ng" },
            { name: "Federal University of Health Sciences, Ila-Orangun", state: "Osun State", link: "https://fuhsila.edu.ng" },
            { name: "Federal University of Oye-Ekiti (FUOYE)", state: "Ekiti State", link: "https://fuoye.edu.ng" },
            { name: "Federal University of Technology, Akure (FUTA)", state: "Ondo State", link: "https://www.futa.edu.ng" },
            { name: "Fountain University, Osogbo", state: "Osun State", link: "https://fountainuniversity.edu.ng" },
            { name: "Harvarde College of Science, Business & Management Studies", state: "Ogun State", link: "https://harvardecollege.edu.ng" },
            { name: "Joseph Ayo Babalola University (JABU)", state: "Osun State", link: "https://www.jabu.edu.ng" },
            { name: "Kola Daisi University, Ibadan", state: "Oyo State", link: "https://www.koladaisiuniversity.edu.ng" },
            { name: "Ladoke Akintola University of Technology (LAUTECH)", state: "Oyo State", link: "https://www.lautech.edu.ng" },
            { name: "Lagos State University (LASU)", state: "Lagos State", link: "https://lasu.edu.ng" },
            { name: "Lead City University, Ibadan", state: "Oyo State", link: "https://www.lcu.edu.ng" },
            { name: "McPherson University, Seriki Sotayo", state: "Ogun State", link: "https://www.mcu.edu.ng" },
            { name: "Mountain Top University, Makogi-Oba", state: "Ogun State", link: "https://mtu.edu.ng" },
            { name: "Olabisi Onabanjo University (OOU), Ago-Iwoye", state: "Ogun State", link: "https://oouagoiwoye.edu.ng" },
            { name: "Osun State University (UNIOSUN)", state: "Osun State", link: "https://uniosun.edu.ng" },
            { name: "Redeemer’s University, Ede", state: "Osun State", link: "https://run.edu.ng" },
            { name: "Trinity University, Lagos", state: "Lagos State", link: "https://www.trinityuniversity.edu.ng" },
            { name: "University of Ibadan (UI)", state: "Oyo State", link: "https://www.ui.edu.ng" },
            { name: "University of Ilesa", state: "Osun State", link: "https://unilesa.edu.ng" },
            { name: "University of Lagos (UNILAG)", state: "Lagos State", link: "https://unilag.edu.ng" },
            { name: "University of Medical Sciences (UNIMED), Ondo City", state: "Ondo State", link: "https://unimed.edu.ng" },
          ].map((uni, index) => (
            <tr key={index}>
              <td className="text-center">{index + 1}</td>
              <td>{uni.name}</td>
              <td className="text-center">{uni.state}</td>
              <td className="text-center">
                <a href={uni.link} target="_blank" rel="noreferrer">
                  {new URL(uni.link).hostname.replace("www.", "")}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</section>
<section id="gallery" className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-4 fw-bold" style={{ color: "rgba(34,81,45,255)" }}>
      Gallery
    </h2>

    {/* Preview Grid (first 6 images) */}
    <div className="row g-2" id="gallery-preview">
      {imagesData && imagesData.length > 0 ? (
        imagesData.slice(0, 6).map((file, index) => (
          <div key={index} className="col-6 col-md-4 mb-3">
            <img
              src={`Pictures/${encodeURIComponent(file)}`}
              alt={`Gallery ${index + 1}`}
              className="img-fluid rounded shadow-sm"
              onError={(e) => (e.target.style.display = "none")} // hides broken images
            />
          </div>
        ))
      ) : (
        <p className="text-center text-muted">No images found</p>
      )}
    </div>

    {/* View More Button */}
    {imagesData.length > 6 && (
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

              {/* Controls */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#galleryCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#galleryCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="modal-footer border-0 justify-content-center">
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* sponsor section */}{/* Partners / Sponsors Section */}{/* Partners / Sponsors Section */}
<section id="partners" className="py-5" style={{ backgroundColor: "#f8f9f5" }}>
  <div className="container text-center">
    <h2 className="fw-bold mb-4" style={{ color: "rgba(34,81,45,255)" }}>
      Our Partners & Sponsors
    </h2>
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
          <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
            <img
              src="Life Anchor Advert.png"
              alt="Sponsor 1"
              className="img-fluid"
              style={{ maxHeight: "80px", objectFit: "contain" }}
            />
            <img
              src="total.png"
              alt="Sponsor 2"
              className="img-fluid"
              style={{ maxHeight: "80px", objectFit: "contain" }}
            />
            <img
              src="Genomac.png"
              alt="Sponsor 3"
              className="img-fluid"
              style={{ maxHeight: "80px", objectFit: "contain" }}
            />
            <img
              src="sqi.png"
              alt="Sponsor 4"
              className="img-fluid"
              style={{ maxHeight: "80px", objectFit: "contain" }}
            />
            <img
              src="genesis.png"
              alt="Sponsor 5"
              className="img-fluid"
              style={{ maxHeight: "80px", objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
            <img
              src="Genomac.png"
              alt="Sponsor 5"
              className="img-fluid"
              style={{ maxHeight: "80px", objectFit: "contain" }}
            />
            <img
              src="genesis.png"
              alt="Sponsor 5"
              className="img-fluid"
              style={{ maxHeight: "80px", objectFit: "contain" }}
            />
            <img
              src="sqi.png"
              alt="Sponsor 6"
              className="img-fluid"
              style={{ maxHeight: "80px", objectFit: "contain" }}
            />
            <img
              src="total.png"
              alt="Sponsor 7"
              className="img-fluid"
              style={{ maxHeight: "80px", objectFit: "contain" }}
            />
            <img
              src="Life Anchor Advert.png"
              alt="Sponsor 8"
              className="img-fluid"
              style={{ maxHeight: "80px", objectFit: "contain" }}
            />
          </div>
        </div>

      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#sponsorCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#sponsorCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</section>


{/* E-Library / Resources Section */}
<section id="resources" className="py-5 bg-light text-center">
  <div className="container">
    <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
      {/* Modal Trigger Button */}
      <button
        type="button"
        className="btn btn-success btn-lg px-5 py-3"
        data-bs-toggle="modal"
        data-bs-target="#elibraryModal"
      >
        📚 Access E-Library
      </button>

      {/* Other Resource Buttons */}
      <a
        href="NIMELSSA_SOUTHWEST_CONSTITUTION[1].docx"
        target="_blank"
        rel="noreferrer"
        className="btn btn-success btn-lg px-4 py-3"
      >
        📜 Download the Constitution
      </a>
      <a
        href="https://example-elibrary-link.com"
        target="_blank"
        rel="noreferrer"
        className="btn btn-success btn-lg px-4 py-3"
      >
        🎶 Download the NIMELSSA Anthem
      </a>
    </div>
  </div>
</section>

{/* E-Library Modal */}
<div
  className="modal fade"
  id="elibraryModal"
  tabIndex="-1"
  aria-labelledby="elibraryTitle"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header bg-success text-white">
        <h5 className="modal-title fw-bold" id="elibraryTitle">
          📚 NIMELSSA E-LIBRARY
        </h5>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body text-start">
        <p>
          <strong>The NIMELSSA National Directorate of Academics</strong> is proud to announce
          the <strong>launch of the NIMELSSA E-Library</strong> — a platform offering access to
          top Medical Laboratory Science textbooks, scholarship past questions, and professional
          exam past questions.
        </p>

        <h6 className="fw-bold mt-3 text-success">
          📘 General Medical Laboratory Science Textbooks
        </h6>
        <p>
          <a
            href="https://drive.google.com/drive/folders/1HlKZHWpxOtY1BbxjewJs1jRmre8aFTRc"
            target="_blank"
            rel="noreferrer"
            className="link-success text-decoration-none"
          >
            Access Textbooks
          </a>
        </p>

        <h6 className="fw-bold mt-3 text-success">
          🎓 Scholarship Past Questions, CV Samples, and Statements of Purpose
        </h6>
        <p>
          <a
            href="https://drive.google.com/drive/folders/1GghrKVRaIJ3QtyGoMyB5PP7ntoFjqp61"
            target="_blank"
            rel="noreferrer"
            className="link-success text-decoration-none"
          >
            Access Scholarship Resources
          </a>
        </p>

        <h6 className="fw-bold mt-3 text-success">🧪 Professional Examination Past Questions</h6>
        <p>
          <a
            href="https://drive.google.com/drive/folders/1LOkGjXmYFgkzy8HAh899I4Ho5CNUmu1n"
            target="_blank"
            rel="noreferrer"
            className="link-success text-decoration-none"
          >
            Access Professional Exams
          </a>
        </p>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</div>

          

          <section id="contact" className="py-5 bg-light">
  <div className="container">
    <h2
      className="text-center mb-4 fw-bold"
      style={{ color: "rgba(34,81,45,255)" }}
    >
      Contact Us
    </h2>

    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="card shadow-sm border-0 rounded-4">
          <div className="card-body p-4">
            <form>
              <div className="row mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control form-control-lg"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-success btn-lg px-5">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-4 text-muted">
          <p>
            <i className="bi bi-geo-alt-fill text-success me-2"></i>
            Ladoke Akintola University of Technology, Ogbomoso, Nigeria
          </p>
          <p>
            <i className="bi bi-envelope-fill text-success me-2"></i>
            info@nimelssasouthwest.org
          </p>
          <p>
            <i className="bi bi-telephone-fill text-success me-2"></i>
            +234 812 345 6789
          </p>
        </div>
      </div>
    </div>
  </div>
</section>




    </>
  );
}
