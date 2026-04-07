import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function RegulationDetail() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [regulation, setRegulation] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/regulations/${id}`)
      .then(res => res.json())
      .then(data => setRegulation(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!regulation) {
    return <p className="text-center mt-5">Loading Regulation...</p>;
  }

  return (
    <div className="container mt-4">

      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2>{regulation.title}</h2>

      <p>{regulation.description}</p>

      <hr />

      {regulation.issuedBy && <p><b>Issued By:</b> {regulation.issuedBy}</p>}
      {regulation.year && <p><b>Year:</b> {regulation.year}</p>}

      {regulation.link && (
        <a href={regulation.link} target="_blank" rel="noreferrer">
          <button className="btn btn-primary">
            View Official Document
          </button>
        </a>
      )}

    </div>
  );
}

export default RegulationDetail;