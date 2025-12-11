import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import ErrorPage from "./pages/error";
import DashboardPage from "./pages/dashboard";

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
]);

export default function App() {
  return <RouterProvider router={router} />;
}
