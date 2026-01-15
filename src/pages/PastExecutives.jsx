import React from 'react';

export default function PastExecutives() {
  
  // Data organized by "Sets" or "Tenures"
  const pastSets = [
    {
      year: "2023/2024 Executive Council",
      members: [
        { name: "Comr. Previous President", role: "President", img: "https://via.placeholder.com/150" },
        { name: "Comr. Previous VP", role: "Vice President", img: "https://via.placeholder.com/150" },
        { name: "Comr. Previous Gen Sec", role: "Gen. Secretary", img: "https://via.placeholder.com/150" },
        // Add more members for this year
      ]
    },
    {
      year: "2022/2023 Executive Council",
      members: [
        { name: "Comr. Old President", role: "President", img: "https://via.placeholder.com/150" },
        { name: "Comr. Old VP", role: "Vice President", img: "https://via.placeholder.com/150" },
        // Add more members for this year
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="past-hero" className="hero">
        <div className="container">
          <h1 className="animate__animated animate__fadeInUp">Hall of Fame</h1>
          <p className="lead text-white opacity-90 animate__animated animate__fadeInUp animate__delay-1s">
            Honoring the leaders who built our foundation.
          </p>
        </div>
      </section>

      {/* Loop through the sets */}
      <div className="container py-5">
        {pastSets.map((set, index) => (
          <div key={index} className="mb-5">
            {/* Year Header */}
            <h2 className="section-title">
              {set.year}
            </h2>
            
            {/* Grid for this specific year */}
            <div className="row text-center justify-content-center g-4">
              {set.members.map((member, i) => (
                <div key={i} className="col-6 col-md-4 col-lg-3 team-member mb-4">
                  <div className="team-card p-3 transition hover-y">
                    <img 
                      src={member.img} 
                      alt={member.role} 
                      className="rounded-circle mb-3 shadow-sm border border-4 border-white" 
                      style={{ width: "130px", height: "130px", objectFit: "cover", filter: "grayscale(100%)" }} 
                    />
                    <h6 className="fw-bold mb-1 text-dark">{member.name}</h6>
                    <p className="text-muted small mb-0">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}