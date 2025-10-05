import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";
import { NavLink } from "react-router-dom";

export default function NewsPage() {
  return (
    <>
      {/* Hero Header */}
      <section id="home" className="hero position-relative text-center text-white">
        <div className="container position-relative">
          <h1 style={{ color: "#f8f9f5" }}>News & Updates</h1>
          <p className="lead">
            Stay informed with the latest happenings in the NIMELSSA Southwest Region
          </p>
        </div>
      </section>

      {/* News Section */}
      <main className="container mt-5 mb-5">
        <div className="row justify-content-center">
          {/* === NEWS 1 === */}
          <div className="col-md-6">
            <div className="news-card">
              <img src="Pictures/1 (8).jpg" alt="Mr A.A. Odekanmi - Patron" />
              <div className="news-body">
                <h5 className="headline">Introducing Our Esteemed Patron</h5>
                <p className="meta">Published: July 2025 | Author: NIMELSSA Southwest</p>
                <p>
                  Meet <strong>Mr. Akeem Adesina Odekanmi</strong>, a seasoned Medical Laboratory Scientist, 
                  Fellow of the Medical Laboratory Science Council of Nigeria, and Acting Director/Head of 
                  Medical Laboratory Science at UCH Ibadan...
                </p>
                <NavLink to="/news/patron" className="btn btn-readmore">
                   Read More
                  </NavLink>
              </div>
            </div>
          </div>

          {/* === NEWS 2 === */}
          <div className="col-md-6">
            <div className="news-card">
              <img src="Pictures/1 (15).jpg" alt="NIMELSSA SW Leaders at Redeemer’s University" />
              <div className="news-body">
                <h5 className="headline">NIMELSSA SW Leaders Visit Redeemer’s University</h5>
                <p className="meta">Press Release | August 6, 2025</p>
                <p>
                  The Southwest leadership of NIMELSSA paid a strategic courtesy visit to Redeemer’s University, 
                  strengthening collaboration and encouraging student participation in regional activities...
                </p>
                <NavLink to="/news/redeemers-visit" className="btn btn-readmore">
                  Read More
                  </NavLink>
              </div>
            </div>
          </div>

          {/* === NEWS 3 === */}
          <div className="col-md-6">
            <div className="news-card">
              <img src="Pictures/1 (15).jpg" alt="UNIMED Visit" />
              <div className="news-body">
                <h5 className="headline">Courtesy Visit to the Acting Vice Chancellor, UNIMED Ondo</h5>
                <p className="meta">June 7, 2025 • Southwest Regional Congress</p>
                <p>
                  As part of the ongoing NIMELSSA Southwest Regional Congress and Leadership Summit, regional executives 
                  paid a courtesy visit to the Acting Vice Chancellor, Professor Adolphus Loto, who emphasized the vital 
                  role of Medical Laboratory Scientists in healthcare...
                </p>
                <NavLink to="/news/unimed-visit" className="btn btn-readmore">
                  Read More
                </NavLink>                
              </div>
            </div>
          </div>

          {/* === NEWS 4 === */}
          <div className="col-md-6">
            <div className="news-card">
              <img src="Pictures/1 (15).jpg" alt="LASU Visit" />
              <div className="news-body">
                <h5 className="headline">
                  NIMELSSA Southwest Region Pays Courtesy Visit to Lagos State University
                </h5>
                <p className="meta">July 8, 2025 • NIMELSSA Southwest Press</p>
                <p>
                  As part of its mission to expand NIMELSSA’s reach and strengthen collaboration, the Southwest executives 
                  visited Lagos State University (LASU), where Medical Laboratory Science is a newly introduced program...
                </p>
                <NavLink to="/news/lagos-visit" className="btn btn-readmore">
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}

    </>
  );
}
