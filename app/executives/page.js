export default function ExecutivesPage() {
  return (
    <>
      <section id="home" className="hero" style={{ background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/ALLEX.jpg') center/cover no-repeat fixed" }}>
        <div className="container">
          <h1 className="animate__animated animate__fadeInUp">Meet Our Executives</h1>
          <p className="lead text-white opacity-90 animate__animated animate__fadeInUp animate__delay-1s">
            Dedicated leaders working together to serve, inspire, and empower students.
          </p>
        </div>
      </section>

      <section id="team" className="bg-white">
        <div className="container text-center">
          <h2 className="section-title">The Executive Council</h2>
          <div className="row g-4 justify-content-center">
            {[
              { name: "Rt. Hon. Popoola David Ayanfeoluwa", role: "President", img: "/presido.jpg" },
              { name: "Hon. Amusa Aisha Adebola", role: "Vice President", img: "/vicepre.jpg" },
              { name: "Hon. Hamzat Temitayo Grace", role: "General Secretary", img: "/GS.JPG" },
              { name: "Hon. Adegbonmire Adeola Mercy", role: "Assistant General Secretary", img: "/AGS.JPG" },
              { name: "Hon. Olaniyi Oluwaseye Gideon", role: "Financial Secretary", img: "/FIN.jpg" },
              { name: "Hon. Abayomi Vincent Obafemi", role: "PRO", img: "/PRO1.jpg" },
              { name: "Hon. Lawal Firdaus Adetoun", role: "Welfare Director", img: "/WELFARE.jpg" },
              { name: "Hon. Ojo Israel Ayanfeoluwa", role: "Librarian", img: "/PRESS.jpg" },
              { name: "Hon. Odunsanya Enoch Oluwapelumi", role: "Sport Director", img: "/SPORT.JPG" },
            ].map((member, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-3 mb-5">
                <div className="team-card p-3 transition hover-y">
                  <div className="position-relative mb-3">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="rounded-circle shadow-sm border border-4 border-white"
                      style={{ width: "160px", height: "160px", objectFit: "cover" }}
                    />
                  </div>
                  <h6 className="fw-bold mb-1 text-dark">{member.name}</h6>
                  <p className="text-primary small fw-500 mb-0">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
