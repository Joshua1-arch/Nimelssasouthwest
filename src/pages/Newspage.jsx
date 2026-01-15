import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";
import { NavLink } from "react-router-dom";

export default function NewsPage() {
  return (
    <>
      {/* Hero Header */}
      <section id="home" className="hero">
        <div className="container text-center">
          <h1 className="animate__animated animate__fadeInUp">News & Updates</h1>
          <p className="lead text-white opacity-90 animate__animated animate__fadeInUp animate__delay-1s">
            Stay informed with the latest happenings in the NIMELSSA Southwest Region
          </p>
        </div>
      </section>

      {/* News Section */}
      <main className="container py-5">
        <div className="row g-4">
          {[
            {
              title: "Introducing Our Esteemed Patron",
              date: "July 2025",
              img: "Pictures/1 (8).jpg",
              link: "/news/patron",
              text: "Meet Mr. Akeem Adesina Odekanmi, a seasoned Medical Laboratory Scientist and Acting Director/Head of Medical Laboratory Science at UCH Ibadan..."
            },
            {
              title: "NIMELSSA SW Leaders Visit Redeemer’s University",
              date: "August 6, 2025",
              img: "Pictures/1 (15).jpg",
              link: "/news/redeemers-visit",
              text: "The Southwest leadership of NIMELSSA paid a strategic courtesy visit to Redeemer’s University, strengthening collaboration..."
            },
            {
              title: "Courtesy Visit to the Acting Vice Chancellor, UNIMED Ondo",
              date: "June 7, 2025",
              img: "Pictures/1 (15).jpg",
              link: "/news/unimed-visit",
              text: "As part of the ongoing NIMELSSA Southwest Regional Congress, regional executives paid a courtesy visit to the Acting Vice Chancellor..."
            },
            {
              title: "NIMELSSA Southwest Pays Courtesy Visit to LASU",
              date: "July 8, 2025",
              img: "Pictures/1 (15).jpg",
              link: "/news/lagos-visit",
              text: "As part of its mission to expand NIMELSSA’s reach, the Southwest executives visited Lagos State University (LASU)..."
            }
          ].map((news, i) => (
            <div key={i} className="col-md-6">
              <div className="card h-100 border-0 shadow-sm overflow-hidden transition hover-y">
                <img src={news.img} className="card-img-top" alt={news.title} style={{ height: "240px", objectFit: "cover" }} />
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-2">
                    <span className="badge bg-success-subtle text-success border border-success-subtle me-2">Press Release</span>
                    <small className="text-muted"><i className="bi bi-calendar3 me-1"></i>{news.date}</small>
                  </div>
                  <h5 className="fw-bold text-dark mb-3">{news.title}</h5>
                  <p className="text-muted small mb-4">{news.text}</p>
                  <NavLink to={news.link} className="btn btn-outline-success">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
