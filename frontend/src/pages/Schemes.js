import { useEffect, useState } from "react";
import InfoCard from "../components/InfoCard";

function Schemes() {

  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    fetch("https://edu-portal-backend-qjkm.onrender.com/api/schemes")
      .then(res => res.json())
      .then(data => setSchemes(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Government Schemes</h2>

      {schemes.map((item, i) => (
        <InfoCard key={i} {...item} type="schemes" />
      ))}

    </div>
  );
}

export default Schemes;