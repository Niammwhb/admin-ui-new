import "./App.css";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import ErrorPage from "./pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex justify-center items-center min-h-screen">
        <Link to="/login" className="p-2 m-5 bg-primary text-white">
          Login
        </Link>
        <span>|</span>
        <Link to="/register" className="p-2 m-5 bg-primary text-white">
          Register
        </Link>
      </div>
    ),
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
