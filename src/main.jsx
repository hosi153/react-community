import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PostListPage from "./pages/PostListPage.jsx";
import ProductListPage from "./pages/ProductListPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import WritePage from "./pages/WritePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "posts",
        element: <PostListPage />,
      },
      {
        path: "write",
        element: <WritePage />,
      },
      {
        path: "products",
        element: <ProductListPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
