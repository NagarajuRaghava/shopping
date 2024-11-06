import React from "react";
import "./header.scss";
import CrwnsSvg from "../../assets/crown";
import CartIcon from "../cart-icon/CartIcon";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo-container">
          {/* <NavLink to={"/"}>
            {" "}
            <CrwnsSvg />
          </NavLink> */}
          <CrwnsSvg />
        </div>
        <div className="options">
          <div className="option">
            SHOP
            {/* <NavLink to="/shop">SHOP</NavLink> */}
          </div>
          <div className="option">SIGN IN</div>
          <div className="option">SIGN UP</div>
          <div className="option">CONTACT</div>
          <CartIcon className="cart-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
