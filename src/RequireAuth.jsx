import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }) {
  const token = localStorage.getItem("token");
  const location = useLocation();
  return token ? children : <Navigate to="/login" replace state={{ from: location }} />;
}

/**
 * Petit garde pour nos pages privées.
 * S’il y a un token dans localStorage → on laisse entrer.
 * Sinon → on t’envoie sur /login (et on garde l’adresse pour revenir après).
 */

