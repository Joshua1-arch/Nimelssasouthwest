import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";

export default function ContactPage() {
  return (
    <>
      {/* === Contact Section === */}
      <section
        id="contact-us"
        className="bg-light"
        style={{ marginTop: "80px" }}
      >
        <div className="container">
          {/* Header */}
          <div className="text-center mb-5">
            <h2 className="section-title">Get In Touch</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
              We’d love to hear from you — drop us a message and we'll get back
              soon.
            </p>
          </div>

          <div className="row g-5">
            {/* === Contact Form === */}
            <div className="col-lg-6">
              <div className="card shadow-sm border-0 rounded-4 p-4 p-lg-5">
                <h4 className="fw-bold mb-4 text-dark">
                  <i className="bi bi-chat-dots-fill text-success me-2"></i>{" "}
                  Send Us a Message
                </h4>

                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="form-label fw-bold small text-uppercase tracking-wider"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control bg-light border-0 py-3 px-4"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="form-label fw-bold small text-uppercase tracking-wider"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control bg-light border-0 py-3 px-4"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="inquiryType"
                      className="form-label fw-bold small text-uppercase tracking-wider"
                    >
                      Subject Type
                    </label>
                    <select
                      id="inquiryType"
                      className="form-select bg-light border-0 py-3 px-4"
                    >
                      <option>General inquiry</option>
                      <option>Membership</option>
                      <option>Events</option>
                      <option>Press</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="form-label fw-bold small text-uppercase tracking-wider"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      className="form-control bg-light border-0 py-3 px-4"
                      rows="5"
                      placeholder="Type your message..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-success w-100 py-3 fw-bold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* === Contact Info + Map === */}
            <div className="col-lg-6">
              <div className="d-flex flex-column h-100">
                <div className="card shadow-sm border-0 rounded-4 p-4 p-lg-5 mb-4 flex-grow-1">
                  <h4 className="fw-bold mb-4 text-dark">Contact Information</h4>
                  
                  <div className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-success-subtle text-success me-3">
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Email</h6>
                      <p className="text-muted mb-0">Nimelssa.southwestregion@gmail.com</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-success-subtle text-success me-3">
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Phone</h6>
                      <p className="text-muted mb-0">+234 806 390 3225</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-success-subtle text-success me-3">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Office Location</h6>
                      <p className="text-muted mb-0">Ladoke Akintola University Of Technology, Ogbomoso, Nigeria</p>
                    </div>
                  </div>

                  <hr className="my-4 opacity-10" />

                  <h6 className="fw-bold mb-3">Follow Our Journey</h6>
                  <div className="d-flex gap-3 fs-3">
                    <a href="https://web.facebook.com/profile.php?id=61561918256194" className="text-success hover-opacity-75 transition">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://x.com/NimelssaR17193" className="text-success hover-opacity-75 transition">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="https://www.instagram.com/nimelssa.southwest?igsh=bmtydGVjeXIxbTZi" className="text-success hover-opacity-75 transition">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>

                {/* === Embedded Map === */}
                <div className="card shadow-sm border-0 rounded-4 overflow-hidden" style={{ minHeight: "300px" }}>
                  <iframe
                    src="https://maps.google.com/maps?q=Ladoke%20Akintola%20University%20of%20Technology%2C%20Ogbomoso&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-100 h-100 border-0"
                    allowFullScreen
                    loading="lazy"
                    title="Campus Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Footer === */}

    </>
  );
}

