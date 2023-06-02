import ReactSwitch from "react-switch";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth.context";

const Navbar = ({ theme, toggleTheme }) => {
  const { user } = useAuth();

  const handleCollapse = () => {
    const nav = document.getElementById("navbarsExample04");
    nav.classList.remove("show");
  };

  return (
    <nav
      className="navbar navbar-expand-md fixed-top"
      aria-label="Fourth navbar example"
      style={{
        backgroundColor: theme === "light" ? "#e3f2fd" : "#15232d",
      }}
    >
      <div className="container">
        <i className="bi bi-buildings fs-3 me-2"> Vision</i>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            backgroundColor: theme === "light" ? null : "#ffffff",
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse fs-5" id="navbarsExample04">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                onClick={handleCollapse}
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
                onClick={handleCollapse}
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
                  onClick={handleCollapse}
                  style={{
                    color: theme === "light" ? "black" : "white",
                  }}
                >
                  My Cards
                </NavLink>
              </li>
            )}
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            {user ? (
              <li className="nav-item">
                <NavLink
                  className="nav-link me-3"
                  to="/sign-out"
                  onClick={handleCollapse}
                  style={{
                    color: theme === "light" ? "black" : "white",
                  }}
                >
                  Sign Out
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/sign-in"
                    onClick={handleCollapse}
                    style={{
                      color: theme === "light" ? "black" : "white",
                    }}
                  >
                    Sing In
                  </NavLink>
                </li>
                <li className="nav-item me-2">
                  <NavLink
                    className="nav-link"
                    to="/sign-up"
                    onClick={handleCollapse}
                    style={{
                      color: theme === "light" ? "black" : "white",
                    }}
                  >
                    Sing Up
                  </NavLink>
                </li>
              </>
            )}
            <div className="d-flex mt-2 float-end">
              <label className="me-2 ms-3">
                {theme === "light" ? (
                  <i className="bi bi-moon"></i>
                ) : (
                  <i className="bi bi-brightness-high"></i>
                )}
              </label>
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
