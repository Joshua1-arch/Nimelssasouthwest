import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container text-center">
          <h1 className="animate__animated animate__fadeInUp">News & Updates</h1>
          <p className="lead text-white opacity-90 animate__animated animate__fadeInUp animate__delay-1s">
            Stay informed with the latest happenings in NIMELSSA LAUTECH Chapter
          </p>
        </div>
      </section>

      <main className="container py-5">
        <div className="row g-4">
          {[
            { title: "Tribute to Prof. Sulaiman Nassar", date: "16th January, 2026", img: "/1 (8).jpg", link: "/news/nassar-tribute", text: "A special evening to honour the outstanding impact and dedication of Prof Nassar." },
            { title: "NIMELSSA LAUTECH Emerges as First Runner-Up at the NUNSA Symposium Debate", date: "July 30, 2026", img: "/image1 (15).jpg", link: "/news/nunsa-debate", text: "The Executive Council is pleased to announce that the NIMELSSA LAUTECH Chapter emerged as the First Runner-Up in the debate competition..." },
            { title: "Report of Courtesy Visit to Our Patron", date: "May 13, 2026", img: "/image1 (55).jpg", link: "/news/patron-visit", text: "The leadership of NIMELSSA, LAUTECH Chapter, recently paid a Courtesy Visit to our Patron, His Royal Majesty, Oba Dr. Sunday Oladapo Oyediran..." },
            { title: "Outcome of the Meeting with the Deputy Vice Chancellor of LAUTECH", date: "January 23, 2026", img: "/newt.jpg", link: "/news/dvc-meeting", text: "The meeting commenced with a formal introduction of the student executive representatives. Professor Araromi welcomed the delegation and acknowledged their efforts..." }
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
                  <Link href={news.link} className="btn btn-outline-success">Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
