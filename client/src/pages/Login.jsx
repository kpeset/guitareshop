import axios from "axios";
import { useState, useContext } from "react";
import AuthContext from "../services/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(AuthContext);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const sendCredentials = (event) => {
    event.preventDefault();
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/api/login`,
        { email, password },
        { withCredentials: true }
      )
      .then((response) => {
        setUser({
          id: response.data.id,
          email: response.data.email,
        });
      })
      .catch((error) => console.error(error));
  };

  console.info(email, password);

  return (
    <>
      <h1>Page de login</h1>
      <form onSubmit={sendCredentials}>
        <p>Email</p>
        <input
          type="email"
          placeholder="Votre email"
          onChange={handleChangeEmail}
        />
        <p>Password</p>
        <input
          type="password"
          placeholder="Votre password"
          onChange={handleChangePassword}
        />
        <input type="submit" />
      </form>
    </>
  );
}
