import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar bg-light navbar-expand-lg">
        <div>
          <Link to="/" className="navbar-brand text-decoration-none">Feane</Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link">HOME</Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="nav-link">MENU</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link to="/bookTable" className="nav-link">BOOK TABLE</Link>
            </li>
          </ul>
          
          <div className="  ms-auto">
            <Link to="#"><i className="fa-solid fa-user text-dark m-3 fs-4"></i></Link>
            <Link to="#"><i className="fa-solid fa-cart-shopping text-dark m-3 fs-4"></i></Link>
            <Link to="#"><i className="fa-solid fa-magnifying-glass text-dark m-3 fs-4"></i></Link>
            <Link to="#" className="text-decoration-none text-white m-3 fs-4 bg-warning rounded-5 p-1">Order Now</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
