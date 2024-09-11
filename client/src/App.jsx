import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

// import { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//   const fetchGuitars = () => {
//     axios
//       .get("http://localhost:3310/api/guitars", {
//         withCredentials: true,
//       })
//       .then((response) => console.info(response))
//       .catch((error) => console.error(error));
//   };

//   useEffect(() => {
//     fetchGuitars();
//   }, []);

//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState(null);

//   const sendGuitar = () => {
//     const formData = new FormData();

//     formData.append("name", name);
//     formData.append("price", price);
//     formData.append("description", description);
//     formData.append("typeId", 1);
//     formData.append("modeleId", 2);
//     formData.append("image", image);

//     axios
//       .post("http://localhost:3310/api/guitars/", formData, {
//         "Content-Type": "multipart/form-data",
//       })
//       .then((response) => console.info(response))
//       .catch((error) => console.error(error));
//   };

//   const handleChangeName = (event) => {
//     setName(event.target.value);
//   };

//   const handleChangePrice = (event) => {
//     setPrice(event.target.value);
//   };

//   const handleChangeDescription = (event) => {
//     setDescription(event.target.value);
//   };

//   const handleChangeImage = (event) => {
//     setImage(event.target.files[0]);
//   };

//   return (
//     <>
//       <p>Nom de la guitare</p>
//       <input
//         type="text"
//         placeholder="nom de la guitare"
//         onChange={handleChangeName}
//       />
//       <p>Prix</p>
//       <input type="text" placeholder="le prix" onChange={handleChangePrice} />
//       <p>Description</p>
//       <input
//         type="text"
//         placeholder="ta description"
//         onChange={handleChangeDescription}
//       />
//       <p>Image</p>
//       <input type="file" onChange={handleChangeImage} />
//       <button type="button" onClick={sendGuitar}>
//         Envoyer
//       </button>
//     </>
//   );
// }

// export default App;
