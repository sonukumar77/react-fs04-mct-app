import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserInfo, loginUser } from "../../redux/action";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const fetchData = () => {
    fetch("https://api.github.com/users/sonukumar77")
      .then((res) => res.json())
      .then((data) => {
        // console.log("data", data);
        dispatch(addUserInfo(data));
      });
  };

  const handleLogin = () => {
    if (username === "sonukumar77" && password === "sonu") {
      dispatch(loginUser(true));
      fetchData();
    } else {
      alert("Invalid credentials!");
    }
  };
  // console.log("userrr", user);
  // console.log("storeData", storeData);
  return (
    <div className="login-container">
      <div className="login-left-panel">
        <img
          src="https://cdn.pixabay.com/photo/2021/11/18/11/35/attack-6806140__340.png"
          alt="login_left_poster"
        />
      </div>
      <div className="login-right-panel">
        <div className="login-form">
          <h1>LOGIN</h1>
          <div className="input-container">
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="username"
              placeholder="e.g.sonukumar77"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              placeholder="e.g.sonu"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-container">
            <button className="btn" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
