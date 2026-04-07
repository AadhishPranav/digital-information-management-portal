import { useEffect, useState } from "react";
import InfoCard from "../components/InfoCard";

function News() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://edu-portal-backend-qjkm.onrender.com/api/news")
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">

      <h2 className="mb-4 text-center">📰 Education News</h2>

      <div className="row">
        {news.map((item, i) => (
          <div className="col-md-6 col-lg-4" key={i}>
            <InfoCard {...item} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default News;