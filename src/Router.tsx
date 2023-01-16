import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Root from "./pages/Root";
import SignUp from "./pages/SignUp";
import Todos from "./pages/Todos";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "logIn", element: <LogIn /> },
        { path: "todos", element: <Todos />, children: [] },
      ],
    },
    { path: "signUp", element: <SignUp /> },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
