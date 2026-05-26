import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Layout from "./Layout";
import NotFound from "./NotFound";
import Projects from "./Projects";
import Services from "./Services";
import Web from "./Web";
import Android from "./Android";
import IOS from "./IOS";
import Products from "./Products";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "Products", element: <Products /> },
      {
        path: "projects",
        element: <Projects />,
        children: [
          { path: "", element: <Navigate to={"web"} /> },
          { path: "web", element: <Web /> },
          { path: "android", element: <Android /> },
          { path: "ios", element: <IOS /> },
          { path: "*", element: <NotFound /> },
        ],
      },
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
