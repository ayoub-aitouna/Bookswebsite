import React from "react";
import style from "./navbar.module.css";
import * as Icon from "react-icons/gi";
import * as IconS from "react-icons/si";
import * as IconR from "react-icons/ri";
function Navbar() {
  return (
    <nav className={style.wrapper}>
      <ul>
        <li className={style.li}>
          <IconS.SiShopware />
          <p>PIQOBOO</p>
        </li>
        <li className={style.li}>
          <p>shop</p>
        </li>
        <li className={style.li}>
          <p>authors</p>
        </li>
        <li className={style.li}>
          <p>Categories</p>
          <IconR.RiArrowDownSLine />
        </li>
        <li className={style.li}>
          <p>Contact</p>
        </li>
        <li className={`${style.li} ${style.thirdpart}`}>
          <Icon.GiShoppingBag />
        </li>
        <li className={`${style.li} ${style.thirdpart}`}>
          <p>login</p>
        </li>
        <li className={`${style.li} ${style.thirdpart}`}>
          <p>Create Account</p>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
