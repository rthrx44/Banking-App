import React, { useState } from "react";
import "./SideNavBar.css";

const SideNavBar = () => {
  const [isExpended, setExpendState] = useState(false);
  const menuItems = [
    {
      text: "Customer",
      img: "img/customer2.png",
    },
    {
      text: "Wallet",
      img: "img/wallet.png",
    },
    {
      text: "Card",
      img: "img/card2.png",
    },
    {
      text: "Finance Chart",
      img: "img/chart.png",
    },
    {
      text: "Transaction",
      img: "img/transaction.png",
    },
  ];
  return (
    <div
      className={
        isExpended
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }>
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpended && (
            <div className="nav-brand">
              <i class="fa-solid fa-building-columns"></i>
              <h1 className="logo-name"> Just Bank </h1>
            </div>
          )}
          <button
            className={
              isExpended ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpendState(!isExpended)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          {menuItems.map(({ text, img }) => (
            <a
              href="/"
              className={isExpended ? "menu-item" : "menu-item menu-item-NX"}>
              <img src={img} alt="menu-logo" srcSet="" />
              {isExpended && <p>{text}</p>}
              {!isExpended && <div className="tooltip">{text}</div>}
            </a>
          ))}
        </div>
      </div>
      <div className="nav-footer">
        <div className="nav-details">
          <img src="/img/profile.png" alt="admin avatar" srcSet="" />
          <div className="nav-footer-info">
            <p className="nav-footer-user-name">Ruther D.</p>
            <p className="nav-footer-user-position">Admin</p>
          </div>
        </div>
        <img
          className="logout-icon"
          src="/img/logout.png"
          alt="logout"
          srcSet=""
        />
      </div>
    </div>
  );
};

export default SideNavBar;
