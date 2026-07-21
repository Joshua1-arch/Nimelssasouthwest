"use client";

import { useEffect, useState } from "react";
import imagesData from "@/app/images.json";

const EventsPage = () => {
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    document.title = "Events & Activities | NIMELSSA LAUTECH";
    if (imagesData && imagesData.length > 0) {
      const shuffled = [...imagesData].sort(() => 0.5 - Math.random());
      setPreviewImages(shuffled.slice(0, 4));
      setImages(imagesData);
    }
  }, []);

  const featuredHighlights = [
    {
      title: "Prof. E.A.O Afolayan Debate Competition",
      date: "May 19, 2026",
      subtitle: "National Debate Success",
      description: "Represented the LAUTECH Chapter, showcasing outstanding intellect and emerging as the Second Runner-Up nationwide.",
      icon: "bi-trophy",
      badge: "Academic Excellence"
    },
    {
      title: "Courtesy Visit to Patron",
      date: "May 12, 2026",
      subtitle: "Oba Dr. Sunday Oladapo Oyediran",
      description: "Presented our activity reports and upcoming projects to His Royal Majesty. Received royal commendation, fatherly blessings, and assurances of full support.",
      icon: "bi-crown",
      badge: "Royal Audience"
    }
  ];

  const allEvents = [
    {
      title: "Cultural Soirée",
      date: "April 24, 2026",
      subtitle: "Arts & Heritage",
      description: "Celebrating the rich heritage, diversity, and creativity of MLS students with exhibitions and cultural performances.",
      category: "Social",
      icon: "bi-stars"
    },
    {
      title: "Skill-Up Entrepreneurship Day",
      date: "May 16-17, 2026",
      subtitle: "Business & Hands-on Training",
      description: "A two-day event focusing on entrepreneurship, offering hands-on training to help students establish businesses.",
      category: "Academic",
      icon: "bi-cash-coin"
    },
    {
      title: "Beyond the Books Webinar",
      date: "May 2026",
      subtitle: "Academic & Professional Excellence",
      description: "Webinar series focusing on career success, resume/CV creation, and core medical lab learning sessions.",
      category: "Academic",
      icon: "bi-mortarboard"
    },
    {
      title: "NIMELSSA Toilet Renovation",
      date: "May 2026",
      subtitle: "Sanitary Facility Upgrade",
      description: "Complete opening, deep cleaning, and physical renovation of the student restroom facilities.",
      category: "Welfare",
      icon: "bi-tools"
    },
    {
      title: "First Aid & Sanitary Provisions",
      date: "Ongoing 2026",
      subtitle: "Health Support",
      description: "Fully stocked First Aid kits and emergency sanitary provisions made available for student health needs.",
      category: "Welfare",
      icon: "bi-heartpulse-fill"
    },
    {
      title: "Intradepartmental Cup",
      date: "May 16, 2026",
      subtitle: "Football Tournament",
      description: "Intradepartmental football competition promoting athletic participation and teamwork.",
      category: "Sports",
      icon: "bi-activity"
    },
    {
      title: "Atiba University Friendly Match",
      date: "May 13, 2026",
      subtitle: "Sports & Collaboration",
      description: "Coordinated a friendly football tournament against the MLS students of Atiba University in Oyo.",
      category: "Sports",
      icon: "bi-dribbble"
    },
    {
      title: "Inter-Level Competition",
      date: "April 2026",
      subtitle: "Sports Engagement",
      description: "Competitive events between classes to promote athletic participation, healthy rivalry, and teamwork.",
      category: "Sports",
      icon: "bi-trophy"
    }
  ];

  const filteredEvents = allEvents.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryClass = (category) => {
    switch (category) {
      case "Academic":
        return "bg-success-subtle text-success border border-success-subtle";
      case "Welfare":
        return "bg-info-subtle text-info border border-info-subtle";
      case "Sports":
        return "bg-warning-subtle text-warning border border-warning-subtle";
      case "Social":
        return "bg-danger-subtle text-danger border border-danger-subtle";
      default:
        return "bg-light text-dark";
    }
  };

  return (
    <div className="bg-light min-vh-100">
      <header className="hero">
        <div className="container text-center">
          <h1 className="animate__animated animate__fadeInUp">Events & Activities</h1>
          <p className="lead text-white opacity-90 animate__animated animate__fadeInUp animate__delay-1s">
            Official record of student programs, athletic tournaments, and academic achievements.
          </p>
        </div>
      </header>

      {/* Featured Highlights (Top section) */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-4">
            <h3 className="fw-bold text-dark text-uppercase tracking-wider">Major Highlights</h3>
            <p className="text-muted small">Key milestones and representations of the NIMELSSA LAUTECH Chapter</p>
          </div>
          <div className="row g-4 justify-content-center">
            {featuredHighlights.map((feat, index) => (
              <div key={index} className="col-lg-6">
                <div className="card h-100 border-0 shadow-sm overflow-hidden p-4 p-md-5 transition hover-y">
                  <div className="d-flex align-items-center mb-3">
                    <div className="p-3 bg-success-subtle text-success rounded-circle me-3">
                      <i className={`bi ${feat.icon} fs-4`}></i>
                    </div>
                    <div>
                      <span className="badge bg-success-subtle text-success border border-success-subtle mb-1">{feat.badge}</span>
                      <h4 className="fw-bold mb-0 text-dark">{feat.title}</h4>
                    </div>
                  </div>
                  <p className="text-muted mb-0 small" style={{ textAlign: "justify", lineHeight: "1.7" }}>
                    {feat.description}
                  </p>
                  <div className="mt-3 text-end">
                    <small className="text-muted"><i className="bi bi-calendar-event me-2"></i>{feat.date}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid of Events & Search Filter */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card p-3 border-0 shadow-sm rounded-4 mb-4 bg-white">
                <div className="row align-items-center g-3">
                  <div className="col-md-5">
                    <div className="input-group">
                      <span className="input-group-text bg-light border-0 text-muted">
                        <i className="bi bi-search"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control bg-light border-0 ps-0"
                        placeholder="Search events..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="d-flex flex-wrap gap-2 justify-content-md-end align-items-center">
                      <span className="small text-muted me-2">Categories:</span>
                      {["All", "Academic", "Welfare", "Sports", "Social"].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`btn btn-sm rounded-pill px-3 transition ${
                            selectedCategory === cat
                              ? "btn-success"
                              : "btn-outline-secondary"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((act, index) => (
                    <div key={index} className="col-md-6 col-lg-4">
                      <div className="activity-card h-100 bg-white p-4 rounded-4 shadow-sm border border-light d-flex flex-column justify-content-between transition hover-y">
                        <div>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="activity-icon-container">
                              <i className={`bi ${act.icon} fs-5`}></i>
                            </div>
                            <span className={`badge category-badge ${getCategoryClass(act.category)}`}>
                              {act.category}
                            </span>
                          </div>
                          <h5 className="fw-bold mb-1 text-dark">{act.title}</h5>
                          <span className="text-success small fw-semibold d-block mb-3">{act.subtitle}</span>
                          <p className="text-muted mb-0 small-text" style={{ textAlign: "justify", lineHeight: "1.6" }}>
                            {act.description}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-top border-light text-end">
                          <small className="text-muted"><i className="bi bi-calendar3 me-1"></i>{act.date}</small>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-center py-5">
                    <i className="bi bi-inbox fs-1 text-muted d-block mb-3"></i>
                    <p className="text-muted mb-0">No activities found matching your filters.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

{/* 
      <section id="gallery" className="bg-white py-5">
        <div className="container text-center">
          <h2 className="section-title">Gallery Highlights</h2>
          <p className="text-muted mb-5">Captured moments from our general meetings, visits, and cultural events.</p>
          <div className="row g-3 justify-content-center">
            {previewImages.map((file, i) => (
              <div key={i} className="col-6 col-md-3">
                <div className="gallery-item overflow-hidden rounded-4 shadow-sm">
                  <img src={`/Pictures/${file}`} alt={file} className="img-fluid gallery-img" />
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn-success btn-lg px-5 mt-5" data-bs-toggle="modal" data-bs-target="#galleryModal">
            View More Moments
          </button>
        </div>
      </section>
*/}

{/* 
      <div className="modal fade" id="galleryModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content bg-dark">
            <div className="modal-header border-0">
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body p-0">
              <div id="galleryCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {images.map((file, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                      <img src={`/Pictures/${file}`} alt={file} className="d-block w-100" style={{ objectFit: "contain", maxHeight: "90vh" }} />
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
            <div className="modal-footer border-0 justify-content-center">
              <button className="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
*/}

      <style>{`
        .activity-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .activity-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(34, 81, 45, 0.08) !important;
          border-color: rgba(34, 81, 45, 0.15) !important;
        }
        .activity-icon-container {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(34, 81, 45, 0.08);
          color: var(--primary-color);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .activity-card:hover .activity-icon-container {
          background: var(--primary-color);
          color: #fff;
        }
        .category-badge {
          font-size: 0.75rem;
          padding: 4px 12px;
          border-radius: 50px;
          font-weight: 500;
        }
        .small-text {
          font-size: 0.9rem;
          line-height: 1.6;
        }
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
