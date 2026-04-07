import { useEffect, useState } from "react";
import InfoCard from "../components/InfoCard";

function HigherStudies() {

  const [studies, setStudies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/higherstudies")
      .then(res => res.json())
      .then(data => setStudies(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Higher Study Opportunities</h2>

      {studies.map((item, i) => (
        <InfoCard key={i} {...item} type="higherstudies" />
      ))}

    </div>
  );
}

export default HigherStudies;