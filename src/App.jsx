import "./App.css";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import ErrorPage from "./pages/error";
import DashboardPage from "./pages/dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BalancePage from "./pages/balance";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/balance",
    element: <BalancePage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
