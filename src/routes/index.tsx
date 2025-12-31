import { Navigate } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import authRoutes from "./authRoutes";
import dashboardRoutes from "./dashboardRoutes";
import popupRoutes from "./popupRoutes";

const routes = [
  { path: "/", element: <Navigate to="/login" replace /> },
  ...authRoutes,
  ...dashboardRoutes,
  ...popupRoutes,
];

const BASENAME = import.meta.env.BASE_URL === "/" ? undefined : import.meta.env.BASE_URL.replace(/\/$/, "");

export const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,
});
