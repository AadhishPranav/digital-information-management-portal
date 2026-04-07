import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function NewsDetail() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/news/${id}`)
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!news) {
  return (
    <div className="text-center mt-5">
      <h5>🔄 Loading News Details...</h5>
      <p>If this takes too long, check backend API.</p>
    </div>
  );
}

  return (
    <div className="container mt-4">

      {/* Back Button */}
      <button
        className="btn btn-secondary mb-3"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <h2 className="mb-3">{news.title}</h2>

      <p>{news.fullContent || news.description}</p>

      <hr />

      {news.source && <p><b>Source:</b> {news.source}</p>}
      {news.date && <p><b>Date:</b> {news.date}</p>}

      {news.link && (
        <a href={news.link} target="_blank" rel="noreferrer">
          <button className="btn btn-primary">
            Visit Official Source
          </button>
        </a>
      )}

    </div>
  );
}

export default NewsDetail;