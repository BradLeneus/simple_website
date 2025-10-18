// src/axiosSetup.js
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8182";
axios.interceptors.request.use((config) => {
  const t = localStorage.getItem("token");
  if (t) config.headers.Authorization = `Bearer ${t}`;
  return config;
});

/**
 * Petit setup axios pour l’app.
 * - Définit la baseURL (backend).
 * - Si un token est dans localStorage, on l’ajoute en Authorization (Bearer …)
 *   sur TOUTES les requêtes, automatiquement.
 */
