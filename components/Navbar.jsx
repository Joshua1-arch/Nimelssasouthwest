"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/contact") {
      setScrolled(true);
      return;
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? "scrolled shadow-sm" : ""}`}
      style={{
        backgroundColor: pathname === "/contact" ? "var(--primary-color)" : "transparent",
      }}
    >
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img src="/logo1.png" alt="Logo" height="40" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/" ? "active" : ""}`} href="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/executives" ? "active" : ""}`} href="/executives">Executives</Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/events" ? "active" : ""}`} href="/events">Events</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname.startsWith("/news") ? "active" : ""}`} href="/news">News</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/contact" ? "active" : ""}`} href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
