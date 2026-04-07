import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary px-4">
      <h4 className="text-white">Edu Info Portal</h4>

      <div>
        <Link className="btn btn-light mx-1" to="/">Home</Link>
        <Link className="btn btn-light mx-1" to="/schemes">Schemes</Link>
        <Link className="btn btn-light mx-1" to="/policies">Policies</Link>
        <Link className="btn btn-light mx-1" to="/regulations">Regulations</Link>
        <Link className="btn btn-warning mx-1" to="/higher-studies">Higher Studies</Link>
      </div>
    </nav>
  );
}

export default Navbar;
