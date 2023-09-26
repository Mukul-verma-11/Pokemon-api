import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then(res => setData(res.data.results))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      {data?.map((poke, index) => (
        <div key={index}>
          <Card pokeurl={poke.url} />
        </div>
      ))}
    </div>
  );
}

export default App;
