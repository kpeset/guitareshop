import { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthContext from "../services/AuthContext";

export default function Navbar() {
  const { user, setUser } = useContext(AuthContext);

  console.info("user", user);

  const disconnect = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/disconnect`, {
        withCredentials: true,
      })
      .then(() => {
        setUser({ id: null, email: null });
        localStorage.clear();
      })
      .catch((error) => console.error(error));
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/shop">Catalogue</Link>
        </li>
        <li>{user.id ? <Link to="/dashboard">Dashboard</Link> : null}</li>
        <li>{user.id ? null : <Link to="/login">Se connecter</Link>}</li>
        {user.id ? (
          <button onClick={disconnect} type="button">
            Se déconnecter
          </button>
        ) : null}
      </ul>
    </nav>
  );
}
