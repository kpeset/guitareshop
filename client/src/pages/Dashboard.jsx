import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

export default function Dasboard() {
  const { types, modeles } = useLoaderData();
  console.info(types, modeles);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [typeId, setTypeId] = useState("");
  const [modeleId, setModeleId] = useState("");

  const guitarProperties = {
    name,
    price,
    description,
    typeId,
    modeleId,
  };

  const sendGuitar = () => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/guitars/`, guitarProperties, {
        withCredentials: true,
      })
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

  const handleChangeType = (event) => {
    setTypeId(event.target.value);
  };

  const handleChangeModele = (event) => {
    setModeleId(event.target.value);
  };

  return (
    <>
      <p>Nom de la guitare</p>
      <input
        type="text"
        placeholder="nom de la guitare"
        onChange={handleChangeName}
      />
      <p>Modèle</p>
      <select onChange={handleChangeModele}>
        {modeles.map((modele) => (
          <option key={modele.id} value={modele.id}>
            {modele.name}
          </option>
        ))}
      </select>
      <p>Type</p>
      <select onChange={handleChangeType}>
        {types.map((type) => (
          <option key={type.id} value={type.id}>
            {type.name}
          </option>
        ))}
      </select>
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
