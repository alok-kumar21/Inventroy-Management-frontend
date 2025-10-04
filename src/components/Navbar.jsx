import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <aside className=" bg-light d-flex flex-column ms-4">
      <div className="logo mb-4">
        <Link className="fs-1 fw-bold text-success text-decoration-none">
          Inventory
        </Link>
      </div>

      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="text-secondary nav-link" to="/dashboard">
            <i className="bi bi-window-dock me-2"></i> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="text-secondary nav-link" to="/projects">
            <i className="bi bi-ui-radios-grid me-2"></i> Projects
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Navbar;
