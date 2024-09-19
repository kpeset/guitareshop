import PropTypes from "prop-types";
import { createContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    id: localStorage.getItem("id"),
    email: localStorage.getItem("email"),
  });

  useEffect(() => {
    if (user.id && user.email) {
      localStorage.setItem("id", user.id);
      localStorage.setItem("email", user.email);
    }
  }, [user]);

  const props = useMemo(() => ({ user, setUser }), [user]);

  return <AuthContext.Provider value={props}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
