export default function ExecutivesPage() {
  return (
    <>
      <section id="home" className="hero">
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
              { name: "Mls Jimoh Hammed Babatunde", role: "2nd Nimelssa Southwest Regional President", img: "Jimoh.JPG" },
              { name: "Rt. Hon. Olorunniyi Pelumi Olaoluwa", role: "President", img: "presido.jpg" },
              { name: "Hon. Folorunso Habeeb", role: "Vice President 1", img: "vicepre.jpg" },
              { name: "Hon. Ayesa Grace Ayomide", role: "Vice President 2", img: "VP21.jpg" },
              { name: "Hon. Ogunniyi Akindele Isaac", role: "General Secretary", img: "GS.JPG" },
              { name: "Hon. Wycliff Chimda Hope", role: "Assistant General Secretary", img: "AGS.JPG" },
              { name: "Hon. Ayodele Emmanuel Ayooluwa", role: "Financial Secretary", img: "FIN.jpg" },
              { name: "Hon. Olatunbosun Olusola", role: "PRO 1", img: "PRO1.jpg" },
              { name: "Hon. Ibraheem Maryam", role: "PRO 2", img: "PRO2.jpg" },
              { name: "Hon. Oladeji Emmanuel Oluwafikayo", role: "Director of Health advocacy", img: "HEALTH.jpg" },
              { name: "Hon. Nureni Yusuff Mariam", role: "Welfare Director", img: "WELFARE.jpg" },
              { name: "Hon. Ahmad El-Mubeen Mas'ud", role: "Programme Coordinator 1", img: "PROGRAM.jpg" },
              { name: "Hon. Peterjegede Nancy", role: "Programme Coordinator 2", img: "PROGRAM2.jpg" },
              { name: "Hon. Odunsanya Enoch Oluwapelumi", role: "Sport Director", img: "SPORT.jpg" },
              { name: "Hon. Olaosebikan Amirat Ayomide", role: "Personal Assistant to the President", img: "PA.jpg" },
              { name: "Hon. Adeyemo Isaac O", role: "Director of Press", img: "PRESS.jpeg" },
              { name: "Hon. Ogundipe Ifeoluwa", role: "Director of Logistic", img: "LOGISTIC.jpg" },
              { name: "Hon. Abolaji Emmanuel O.", role: "Director of Graphics", img: "GRAPHIC.jpg" },
              { name: "Hon. Aanuoluwapo Bukunmi Emmanuel", role: "Chief Whip", img: "CHIEF.jpg" },
              { name: "Hon. Awoyemi Daniel Ishola", role: "Special Assistant on Special Duties to the president", img: "sa.jpg" },
              { name: "Hon. Olaboye Favor", role: "Director of Strategic Planning", img: "stra.jpg" },
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