import { useEffect, useState } from "react";
import InfoCard from "../components/InfoCard";

function Policies() {

  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    fetch("https://edu-portal-backend-qjkm.onrender.com/api/policies")
      .then((res) => res.json())
      .then((data) => setPolicies(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Education Policies</h2>

      {policies.map((item, i) => (
        <InfoCard key={i} {...item} type="policies" />
      ))}

    </div>
  );
}

export default Policies;