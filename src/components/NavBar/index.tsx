import "./style.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "../../hooks/useDispatch";
import { useQueryContext } from "../../hooks/useQueryContext";
import { useState } from "react";
import ButtonBase from "../Button";

const NavBar = () => {
  const dispatch = useDispatch();
  const dataContext = useQueryContext();
  const [toggle, setToggle] = useState(false);

  const handleNavigation = () => {
    dispatch({ type: "pagination", data: dataContext?.data, currentPage: 1 });
  };
  const navigate = useNavigate();

  const handleLogout = () => {
   localStorage.removeItem("ACCESS_TOKEN_KEY");
   navigate("/login")
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className={`navbar ${toggle ? "open" : "close"}`}>
        <div className="navbar__hamburger" onClick={handleToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
          >
            <path
              d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"
              fill="#fff"
            ></path>
          </svg>
        </div>
        <h2 className="navbar__logo">Tiki</h2>

        <div className="navbar__navlink">
          <NavLink
            to="/"
            onClick={() => handleNavigation()}
            className="navbar__link"
          >
           Home
          </NavLink>
          <ButtonBase  onFunction={handleLogout} >Logout</ButtonBase>
        </div>
      </div>
    </>
  );
};
export default NavBar;
