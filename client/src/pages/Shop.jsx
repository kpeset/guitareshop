import { useLoaderData } from "react-router-dom";

import GuitarCard from "../components/GuitarCard";

export default function Shop() {
  const guitars = useLoaderData();

  console.info(guitars);

  return (
    <>
      <h1>Mon shop</h1>
      {guitars.map((guitar) => (
        <GuitarCard guitar={guitar} key={guitar.id} />
      ))}
    </>
  );
}
