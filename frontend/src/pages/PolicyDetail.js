import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function PolicyDetail() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [policy, setPolicy] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/policies/${id}`)
      .then(res => res.json())
      .then(data => setPolicy(data));
  }, [id]);

  if (!policy) return <p className="text-center mt-5">Loading Policy...</p>;

  return (
    <div className="container mt-4">

      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2>{policy.title}</h2>
      <p>{policy.description}</p>

      {policy.ministry && <p><b>Ministry:</b> {policy.ministry}</p>}
      {policy.year && <p><b>Year:</b> {policy.year}</p>}

      {policy.link && (
        <a href={policy.link} target="_blank" rel="noreferrer">
          <button className="btn btn-primary">View Official</button>
        </a>
      )}

    </div>
  );
}

export default PolicyDetail;