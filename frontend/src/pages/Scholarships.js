import { useEffect, useState } from "react";
import InfoCard from "../components/InfoCard";

function Scholarships() {

  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    fetch("https://edu-portal-backend-qjkm.onrender.com/api/scholarships")
      .then(res => res.json())
      .then(data => setScholarships(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Scholarships</h2>

      {scholarships.map((item, i) => (
        <InfoCard key={i} {...item} type="scholarships" />
      ))}

    </div>
  );
}

export default Scholarships;