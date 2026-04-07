import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <div className="hero text-center text-white">
        <h1>How can we help you?</h1>

        <input
          type="text"
          placeholder="Search policies, schemes, exams..."
          className="search-bar"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="container mt-5">

        <div className="row">

          {/* LEFT SIDE TOPICS */}
          <div className="col-md-3">
            <h5>Most Searched Topics</h5>

            <ul className="list-group">
              <li className="list-group-item">Scholarships</li>
              <li className="list-group-item">Exams</li>
              <li className="list-group-item">Higher Studies</li>
              <li className="list-group-item">Fellowships</li>
              <li className="list-group-item">Academic Policies</li>  
            </ul>
          </div>

          {/* RIGHT SIDE DASHBOARD */}
          <div className="col-md-9">

            <h5 className="mb-4">TOP CATEGORIES</h5>

            <div className="row">

              <div className="col-md-4 mb-4">
                <Link to="/schemes" className="card-link">
                  <div className="info-card">
                    🎓
                    <h5>Schemes</h5>
                    <p>View Government Schemes</p>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 mb-4">
                <Link to="/policies" className="card-link">
                  <div className="info-card">
                    📜
                    <h5>Policies</h5>
                    <p>Education policies & guidelines</p>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 mb-4">
                <Link to="/regulations" className="card-link">
                  <div className="info-card">
                    📘
                    <h5>Regulations</h5>
                    <p>Academic rules & regulations</p>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 mb-4">
                <Link to="/higher-studies" className="card-link">
                  <div className="info-card">
                    🚀
                    <h5>Higher Studies</h5>
                    <p>Exams & study opportunities</p>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 mb-4">
               <Link to="/scholarships" className="card-link">
                 <div className="info-card">
                  💰
                  <h5>Scholarships</h5>
                  <p>Explore financial aid & merit scholarships</p>
                 </div>
               </Link>
             </div>

             <div className="col-md-4 mb-4">
               <Link to="/news" className="card-link">
                 <div className="info-card">
                  📰
                  <h5>Education News</h5>
                 <p>Latest updates & announcements</p>
                </div>
              </Link>
             </div>

             </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;
