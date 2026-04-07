import { useEffect, useState } from "react";
import InfoCard from "../components/InfoCard";

function Policies() {

  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/policies")
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