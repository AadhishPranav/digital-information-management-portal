import { Link } from "react-router-dom";

function Navbar() {

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    // redirect + refresh
    window.location.href = "/login";
  };

  return (
    <nav className="navbar navbar-dark bg-primary px-4">
      <h4 className="text-white">Edu Info Portal</h4>

      <div>
        <Link className="btn btn-light mx-1" to="/">Home</Link>
        <Link className="btn btn-light mx-1" to="/schemes">Schemes</Link>
        <Link className="btn btn-light mx-1" to="/policies">Policies</Link>
        <Link className="btn btn-warning mx-1" to="/higher-studies">Higher Studies</Link>

        <button className="btn btn-danger mx-1" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;