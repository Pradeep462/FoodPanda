import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useUserOnline from "../Utils/useUserOnline";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  const changeText = () => {
    if (btnText === "Login") setBtnText("Logout");
    else setBtnText("Login");
  };

  const inonline = useUserOnline();

  const cardData = useSelector(store => store.card.items);

  return (
    <div className="flex justify-between items-center px-8 mb-8 shadow-lg py-4 sticky top-0 bg-white z-10">
      <img
        className="w-16"
        src="https://logotaglines.com/wp-content/uploads/2021/06/Foodpanda-Logo-tagline-slogan-motto-owner-founder.jpg"
        alt="app logo"
      />
      <div className="px-3">
        <span className="px-3">
          Online states
          {inonline ? "🟢" : "🔴"}
        </span>
        <span className="px-3">
          <Link to="/">Home</Link>
        </span>
        <span className="px-3">
          <Link to="/instamart">instamart</Link>
        </span>
        <span className="px-3">
          <Link to="/about">about</Link>
        </span>
        <span className="px-3">
          <Link to="/contactus">contact</Link>
        </span>
        <span className="px-3 font-bold">
          <Link to="/cart">card {cardData.length}-items</Link>
        </span>
        <button className="log-on-out-btn" onClick={() => changeText()}>
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Header;
