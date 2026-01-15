export default function Footer() {
  return (
    <footer className="py-5 text-white" style={{ backgroundColor: "var(--primary-color)" }}>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-4 text-center text-md-start">
            <h5 className="fw-bold mb-3">NIMELSSA SW</h5>
            <p className="small mb-0 opacity-75">
              Empowering Medical Laboratory Science students across the Southwest Region.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <div className="d-flex justify-content-center gap-4 fs-4">
              <a href="https://web.facebook.com/profile.php?id=61561918256194" className="text-white opacity-75 hover-opacity-100 transition">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://x.com/NimelssaR17193" className="text-white opacity-75 hover-opacity-100 transition">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://www.tiktok.com/@nimelssasouthwest" className="text-white opacity-75 hover-opacity-100 transition">
                <i className="bi bi-tiktok"></i>
              </a>
              <a href="https://www.instagram.com/nimelssa.southwest?igsh=bmtydGVjeXIxbTZi" className="text-white opacity-75 hover-opacity-100 transition">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <p className="small mb-0 opacity-75">&copy; 2025 Student Association. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}