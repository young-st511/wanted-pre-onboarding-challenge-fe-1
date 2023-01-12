import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import LogIn from "./pages/LogIn";
import Root from "./pages/Root";
import SignUp from "./pages/SignUp";
import Todos from "./pages/Todos";
import GlobalStyle from "./themes/GlobalStyle";
import mainTheme from "./themes/mainTheme";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "signUp", element: <SignUp /> },
        { path: "logIn", element: <LogIn /> },
        { path: "todos", element: <Todos />, children: [] },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default Router;
