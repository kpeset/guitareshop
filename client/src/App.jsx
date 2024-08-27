import { useState } from "react";
import axios from "axios";

function App() {
  // const fetchGuitars = () => {
  //   axios
  //     .get("http://localhost:3310/api/guitars")
  //     .then((response) => console.info(response))
  //     .catch((error) => console.error(error));
  // };

  // useEffect(() => {
  //   fetchGuitars();
  // }, []);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const guitarProperties = {
    name,
    price,
    description,
    typeId: 1,
    modeleId: 2,
  };

  const sendGuitar = () => {
    axios
      .post("http://localhost:3310/api/guitars/", guitarProperties)
      .then((response) => console.info(response))
      .catch((error) => console.error(error));
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  console.info(name, price, description);

  return (
    <>
      <p>Nom de la guitare</p>
      <input
        type="text"
        placeholder="nom de la guitare"
        onChange={handleChangeName}
      />
      <p>Prix</p>
      <input type="text" placeholder="le prix" onChange={handleChangePrice} />
      <p>Description</p>
      <input
        type="text"
        placeholder="ta description"
        onChange={handleChangeDescription}
      />
      <button type="button" onClick={sendGuitar}>
        Envoyer
      </button>
    </>
  );
}

export default App;
