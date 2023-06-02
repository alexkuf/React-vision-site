import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth.context";

const Footer = ({ theme }) => {
  const { user } = useAuth();
  return (
    <footer
      className="d-flex flex-wrap justify-content-between mt-5"
      style={{
        backgroundColor: theme === "light" ? "#e3f2fd" : "#15232d",
      }}
    >
      <nav className="nav m-auto mt-2 mb-2 d-flex">
        <ul className="nav ms-auto fs-5">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/"
              style={{
                color: theme === "light" ? "black" : "white",
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/about"
              style={{
                color: theme === "light" ? "black" : "white",
              }}
            >
              About
            </NavLink>
          </li>
          {user?.biz && (
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/my-cards"
                style={{
                  color: theme === "light" ? "black" : "white",
                }}
              >
                <i className="bi bi-person-vcard me-1"></i>
                My Cards
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      <div className="d-flex mt-3 justify-content-end me-2">
        <span className="mx-2">&copy; Alex </span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
