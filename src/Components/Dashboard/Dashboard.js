import React from "react";
import style from "./dashboard.module.css";
import DashboardImg from "../../Assets/dashboardimg.jpg";
import * as Icon from "react-icons/gi";
function Dashboard() {
  return (
    <div className={style.wrapper}>
      <div className={style.imgContainer}>
        <img src={DashboardImg} alt="" srcset="" />
      </div>
      <div className={style.left}>
        <p>
          Explore Your Favorite Books <Icon.GiSecretBook />
        </p>
        <h1>
          Get Your New <span className={style.lister}>B</span>ook With The Best
          Price
        </h1>

        <div className={style.input}>
          <input
            type="text"
            placeholder="Search books, authers, categories..."
          />
          <button>Search</button>
        </div>
      </div>
      <div className={style.right}></div>
    </div>
  );
}

export default Dashboard;
