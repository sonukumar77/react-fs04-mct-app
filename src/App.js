import CreateBlog from "./components/CreateBlog/CreateBlog";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Protected from "./components/Protected";
import BlogDetail from "./components/BlogDetail/BlogDetail";
import { useSelector } from "react-redux";
import Nav from "./components/Nav/Nav";

export default function App() {
  const { user } = useSelector((store) => store);
  return (
    <div className="App">
      {user.isLoggedIn ? <Nav /> : <Login />}
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/createBlog"
          element={
            <Protected>
              <CreateBlog />
            </Protected>
          }
        />
        <Route
          path="/blogDetail/:id"
          element={
            <Protected>
              <BlogDetail />
            </Protected>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Login /> */}

      {/* <CreateBlog /> */}
    </div>
  );
}
