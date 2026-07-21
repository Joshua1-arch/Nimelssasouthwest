export default function NassarTributePage() {
  return (
    <>
      <header className="hero">
        <div className="container text-center">
          <h1 className="animate__animated animate__fadeInUp">NIMELSSA Announcements</h1>
          <p className="lead text-white opacity-90 animate__animated animate__fadeInUp animate__delay-1s">Honoring the Lives and Legacies of Our Mentors</p>
        </div>
      </header>

      <section className="container py-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="badge bg-danger-subtle text-danger border border-danger-subtle mb-3 p-2 px-3">Tribute & Announcement</div>
            <h2 className="fw-bold text-dark mb-2 text-uppercase">Tribute to Prof. Sulaiman Nassar</h2>
            <p className="text-muted small mb-5"><i className="bi bi-calendar3 me-2"></i>Issued: 16th January, 2026</p>

            <div className="blog-body fs-5 text-muted" style={{ lineHeight: "1.8" }}>
              <div className="p-4 bg-light rounded-4 border-start border-4 border-danger mb-5">
                <p className="lead mb-3 text-dark fw-bold">
                  A special evening to honour the outstanding impact and dedication of Prof. Sulaiman Nassar.
                </p>
                <p className="mb-4">
                  We invite all members of the Nigerian Medical Laboratory Science Students’ Association (NIMELSSA), colleagues, and the academic community to join us in honoring his memory.
                </p>

                <div className="row g-3 mt-2">
                  <div className="col-sm-6">
                    <div className="p-3 bg-white rounded-3 shadow-sm border">
                      <strong className="text-danger d-block mb-1"><i className="bi bi-calendar-event me-2"></i>Date</strong>
                      <span className="text-dark">Monday, 19th January, 2026</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="p-3 bg-white rounded-3 shadow-sm border">
                      <strong className="text-danger d-block mb-1"><i className="bi bi-clock me-2"></i>Time</strong>
                      <span className="text-dark">5:00 PM</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="p-3 bg-white rounded-3 shadow-sm border">
                      <strong className="text-danger d-block mb-1"><i className="bi bi-geo-alt me-2"></i>Venue</strong>
                      <span className="text-dark">400 Lecture Theatre</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="p-3 bg-white rounded-3 shadow-sm border">
                      <strong className="text-danger d-block mb-1"><i className="bi bi-person-badge me-2"></i>Dress Code</strong>
                      <span className="text-dark">Black attire (corporate, casual, or native)</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mb-4">
                All NIMELSSAties are expected to be present at this gathering. There will be dedicated time during the program for individuals to share their comments, memories, and tributes.
              </p>

              <p className="mb-4">
                In support of the family during this challenging time, financial assistance is welcomed and will be collected at the venue or through designated association channels.
              </p>

              <div className="mt-5 p-4 bg-light rounded-4 border">
                <p className="fst-italic mb-2 text-muted">&quot;Warm regards,&quot;</p>
                <p className="h5 fw-bold mb-0 text-dark">Executive Council</p>
                <p className="text-primary small mb-0 fw-bold text-uppercase tracking-wider">NIMELSSA LAUTECH Chapter</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
