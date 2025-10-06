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
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #f0fdf4, #d9f99d)",
          marginTop: "80px",
        }}
      >
        <div className="container">
          {/* Header */}
          <div className="text-center mb-5">
            <h2 className="fw-bold text-success">Contact Us</h2>
            <p className="lead text-muted">
              We’d love to hear from you — drop us a message and we'll get back
              soon.
            </p>
          </div>

          <div className="row g-4">
            {/* === Contact Form === */}
            <div className="col-md-6">
              <div className="card shadow-lg border-0 rounded-4 p-4">
                <h5 className="mb-4">
                  <i className="bi bi-chat-left-text-fill text-success"></i>{" "}
                  Send Us a Message
                </h5>

                <form>
                  <div className="mb-3">
                    <label
                      htmlFor="name"
                      className="form-label fw-semibold"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control rounded-pill shadow-sm"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className="form-label fw-semibold"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control rounded-pill shadow-sm"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="message"
                      className="form-label fw-semibold"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="form-control shadow-sm rounded-4"
                      rows="4"
                      placeholder="Type your message..."
                      required
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="inquiryType"
                      className="form-label fw-semibold"
                    >
                      Reason for Contact
                    </label>
                    <select
                      id="inquiryType"
                      className="form-select shadow-sm rounded-pill"
                    >
                      <option>General inquiry</option>
                      <option>Membership</option>
                      <option>Events</option>
                      <option>Press</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-success w-100 rounded-pill shadow"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* === Contact Info + Map === */}
            <div className="col-md-6">
              <div className="card shadow-lg border-0 rounded-4 p-4 mb-4">
                <h5>
                  <i className="bi bi-envelope-fill text-success"></i> Email
                </h5>
                <p>Nimelssa.southwestregion@gmail.com</p>

                <h5>
                  <i className="bi bi-telephone-fill text-success"></i> Phone
                </h5>
                <p>+234 806 390 3225</p>

                <h5>
                  <i className="bi bi-geo-alt-fill text-success"></i> Office
                  Location
                </h5>
                <p>Ladoke Akintola University Of Technology, Ogbomo, Nigeria</p>

                <h5>
                  <i className="bi bi-globe2 text-success"></i> Connect with Us
                </h5>
                <div className="d-flex gap-3 fs-4">
                  <a
                    href="https://web.facebook.com/profile.php?id=61561918256194"
                    className="text-success"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a
                    href="https://x.com/NimelssaR17193"
                    className="text-success"
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/nimelssa.southwest?igsh=bmtydGVjeXIxbTZi"
                    className="text-success"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>

              {/* === Embedded Map === */}
              <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://maps.google.com/maps?q=Ladoke%20Akintola%20University%20of%20Technology%2C%20Ogbomoso&t=&z=15&ie=UTF8&iwloc=&output=embed"
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

