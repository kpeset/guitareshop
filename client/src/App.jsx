import { useEffect } from "react";
import axios from "axios";

function App() {
  const fetchGuitars = () => {
    axios
      .get("http://localhost:3310/api/guitars")
      .then((response) => console.info(response))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchGuitars();
  }, []);

  return (
    <>
      <h1>Notre future site de guitare LOzerien</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sapiente,
        repellat dolore suscipit ipsam tempora unde non dolorum tenetur
        laudantium commodi? Accusantium excepturi aliquam facere dolor. Porro
        quidem modi nihil?
      </p>
    </>
  );
}

export default App;
