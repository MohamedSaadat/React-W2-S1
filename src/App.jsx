import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import NotFound from "./NotFound";
import Services from "./Services";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
