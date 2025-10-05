import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Disable scroll effect only for the Contact page
    if (location.pathname === "/contact") {
      setScrolled(true); // always solid
      return; // stop the listener
    }

    // Normal scroll behavior for other pages
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${
        scrolled ? "scrolled" : ""
      }`}
      style={{
        backgroundColor:
          location.pathname === "/contact"
            ? "rgba(34,81,45,1)"
            : scrolled
            ? "rgba(34,81,45,0.95)"
            : "transparent",
        transition: "background 0.3s ease",
      }}
    >
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src="/logo1.png" alt="Logo" height="40" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/executives">Executives</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/#events">Events</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/news">News</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
