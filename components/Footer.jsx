export default function Footer() {
  return (
    <footer className="py-5 text-white" style={{ backgroundColor: "var(--primary-color)" }}>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-4 text-center text-md-start">
            <h5 className="fw-bold mb-3">NIMELSSA LAUTECH</h5>
            <p className="small mb-0 opacity-75">
              Empowering Medical Laboratory Science students across LAUTECH Chapter.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <div className="d-flex justify-content-center gap-4 fs-4">
              <a href="https://www.instagram.com/lautech_nimelssa?igsh=ZGtva2U4amV6d3Vw" className="text-white opacity-75 hover-opacity-100 transition">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <p className="small mb-0 opacity-75">&copy; 2026 Student Association. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
