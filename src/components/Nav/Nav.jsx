import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Nav.css";
import { logoutUser } from "../../redux/action";
const Nav = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((store) => store);

  return (
    <div className="nav-container">
      <div className="nav-left">
        <h1>Logo</h1>
      </div>
      <div className="nav-right">
        <ul>
          <li>
            <Link to="/" id="home">
              Home
            </Link>
          </li>
          <li>
            <button onClick={() => dispatch(logoutUser(false))}>Logout</button>
          </li>
          <li style={{ color: "yellow" }}>{userInfo?.login}</li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
