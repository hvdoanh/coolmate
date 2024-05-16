import React, { useState } from "react";

import { IoSearchOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import "../styles/home/header.css";

function Header() {
  const [showSideBar, setShowSideBar] = useState(true);

  const handleShowSideBar = () => {
    setShowSideBar(false);
  };

  const handleHiddenSideBar = () => {
    setShowSideBar(true);
  };

  return (
    <div className="header-container">
      <div className="header-icon-mobile">
        <FaBarsStaggered onClick={handleShowSideBar} />
        <IoSearchOutline />
      </div>
      <img
        className="header-logo"
        src="https://res.cloudinary.com/dqiryahpb/image/upload/v1715689571/g0en3eyom34z1rtvskws.png"
        alt="logo"
      />
      <ul className="header-navlinks">
        <li>Đồ thể thao</li>
        <li>Đồ lót nam</li>
        <li>Đồ lót nữ</li>
        <li>Trang sức</li>
        <li>Phụ kiện</li>
        <li>Mặc hằng ngày</li>
      </ul>
      <div className="header-handles">
        <div className="header-handles-search">
          <IoSearchOutline />
          <input type="text" placeholder="Tim kiem san pham..." />
        </div>
        <FaUser className="header-icon-user" />
        <div className="header-icon-bag">
          <IoBag />
          <span>0</span>
        </div>
      </div>

      <div
        className={
          showSideBar ? "header-sidebar-moblie" : "header-sidebar-moblie show"
        }
      >
        <div>
          <IoClose onClick={handleHiddenSideBar} />
        </div>
        <ul className="header-sidebar-navlinks">
          <li>
            Đồ thể thao
            <FaArrowRight />
          </li>
          <li>
            Đồ lót nam
            <FaArrowRight />
          </li>
          <li>
            Đồ lót nữ
            <FaArrowRight />
          </li>
          <li>
            Trang sức
            <FaArrowRight />
          </li>
          <li>
            Phụ kiện
            <FaArrowRight />
          </li>
          <li>
            Mặc hằng ngày
            <FaArrowRight />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
