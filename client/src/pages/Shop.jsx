import { useLoaderData, useNavigate } from "react-router-dom";

import GuitarCard from "../components/GuitarCard";

export default function Shop() {
  const { guitars, types } = useLoaderData();

  const navigate = useNavigate();

  const handleChangeSelect = (event) => {
    navigate(`/shop?type=${event.target.value}`);
  };

  return (
    <>
      <h1>Mon shop</h1>
      <select onChange={handleChangeSelect}>
        <option value="">Toutes les guitares</option>
        {types.map((type) => (
          <option key={type.id} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
      {guitars.map((guitar) => (
        <GuitarCard guitar={guitar} key={guitar.id} />
      ))}
    </>
  );
}
