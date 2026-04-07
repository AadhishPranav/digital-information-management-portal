import { useNavigate } from "react-router-dom";

function InfoCard({ _id, title, description, type = "news" }) {

  const navigate = useNavigate();

  return (
    <div className="card custom-card p-3 mb-4">

      <h5 className="fw-bold">{title}</h5>

      <p>{description?.substring(0, 120)}...</p>

      <button
        className="btn btn-primary w-100"
        onClick={() => navigate(`/${type}/${_id}`)}
      >
        View Full Details
      </button>

    </div>
  );
}

export default InfoCard;