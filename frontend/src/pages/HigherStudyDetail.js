import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function HigherStudyDetail() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/higherstudies/${id}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [id]);

  if (!data) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-4">

      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2>{data.title}</h2>
      <p>{data.description}</p>

      {data.country && <p><b>Country:</b> {data.country}</p>}
      {data.university && <p><b>University:</b> {data.university}</p>}

    </div>
  );
}

export default HigherStudyDetail;