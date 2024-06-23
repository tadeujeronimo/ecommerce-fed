import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { userLogged } = useContext(AuthContext);
  //console.log(userLogged);
  return !userLogged ? <Navigate to="/login" /> : children;
};

export default ProtectedRoute;
