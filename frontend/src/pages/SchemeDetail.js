import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function SchemeDetail() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [scheme, setScheme] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/schemes/${id}`)
      .then(res => res.json())
      .then(data => setScheme(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!scheme) {
    return <p className="text-center mt-5">Loading Scheme...</p>;
  }

  return (
    <div className="container mt-4">

      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2>{scheme.title}</h2>

      <p>{scheme.description}</p>

      <hr />

      {scheme.ministry && <p><b>Ministry:</b> {scheme.ministry}</p>}
      {scheme.eligibility && <p><b>Eligibility:</b> {scheme.eligibility}</p>}
      {scheme.year && <p><b>Year:</b> {scheme.year}</p>}

      {scheme.link && (
        <a href={scheme.link} target="_blank" rel="noreferrer">
          <button className="btn btn-primary">
            Visit Official Website
          </button>
        </a>
      )}

    </div>
  );
}

export default SchemeDetail;