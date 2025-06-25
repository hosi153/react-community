import { Outlet } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import PostListPage from "./pages/PostListPage";

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
