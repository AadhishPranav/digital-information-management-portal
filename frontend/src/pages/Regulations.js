import { useEffect, useState } from "react";
import InfoCard from "../components/InfoCard";

function Regulations() {

  const [regulations, setRegulations] = useState([]);

  useEffect(() => {
    fetch("https://edu-portal-backend-qjkm.onrender.com/api/regulations")
      .then(res => res.json())
      .then(data => setRegulations(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Education Regulations</h2>

      {regulations.map((item, i) => (
        <InfoCard key={i} {...item} type="regulations" />
      ))}

    </div>
  );
}

export default Regulations;