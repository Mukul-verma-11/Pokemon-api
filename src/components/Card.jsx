learcimport React, { useEffect, useState } from "react";
import "./card.css";
import axios from "axios";

function Card({ pokeurl }) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get(pokeurl)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, [pokeurl]);

  return (
    <div className="container">
      <img src={data?.sprites?.front_default} alt="image not available" />
      <p>{data?.name}</p>
    </div>
  );
}

export default Card;
