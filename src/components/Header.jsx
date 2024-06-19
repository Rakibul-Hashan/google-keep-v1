import { useState } from "react";
import "./custom.css";
// icons and logos imports
import { IoMdSearch } from "react-icons/io";
import { IoApps } from "react-icons/io5";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import GridLayoutIcon from "/src/assets/images/grid-layout-icon.svg";
import RefreshIcon from "/src/assets/images/refresh-icon.svg";
import SettingsICon from "/src/assets/images/settings-icon.svg";
import keepLogo from "/src/assets/keep-logo.png";
import userPhoto from "/src/assets/images/user-photo.jpg";
const Header = ({ open, setOpen }) => {
  const [focused, setFocused] = useState(false);
  console.log(focused);
  return (
    <header className="header-container grid grid-cols-2 p-2 items-center border-b-2 ">
      <div className="header-left flex items-center gap-20 w-full">
        {/* logo and text */}
        <div className="icon-o-logo-container flex items-center ">
          <RxHamburgerMenu
            onClick={() => setOpen(!open)}
            className=" text-[48px] p-3 hover:bg-[#e4e6e7] rounded-full cursor-pointer "
          />
          <div className="logo-wrapper flex items-center">
            <img className=" w-10 h-10" src={keepLogo} alt="logo" />
            <span className=" text-2xl">Keep</span>
          </div>
        </div>
        {/* search */}
        <div
          className={`search-bar-container flex-grow gap-4 ${
            focused ? "focus-within:shadow-md bg-transparent" : "bg-[#f1f3f4]"
          } overflow-hidden rounded-lg focus:shadow-md `}
        >
          <form id="search-form" className="flex items-center gap-5 p-1 px-3">
            <button className="focus:outline-none bg-[#fff0]">
              <IoMdSearch
                className="text-4xl p-2 hover:bg-[#e4e6e7] rounded-full cursor-pointer  flex items-center justify-center"
                title="Search"
              />
            </button>
            <input
              className="w-full bg-[inherit] focus:outline-none py-2"
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              autoComplete="off"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
            <button className="focus:outline-none bg-[#fff0]">
              <RxCross2
                className="text-4xl p-2 hover:bg-[#e4e6e7] rounded-full cursor-pointer  flex items-center justify-center"
                title="Clear Search"
              />
            </button>
          </form>
        </div>
      </div>
      <div className="header-right w-full flex justify-end">
        <div className="right-first flex">
          <img
            className="custom-icon-hover"
            aria-label="Refresh"
            title="Refresh"
            src={RefreshIcon}
            alt=""
          />
          <img
            className="custom-icon-hover"
            aria-label="GridLayout"
            title="GridLayout"
            src={GridLayoutIcon}
            alt=""
          />
          <img
            className="custom-icon-hover"
            aria-label="Settings"
            title="Settings"
            src={SettingsICon}
            alt=""
          />
        </div>
        <div className="right-second flex items-center gap-3">
          <IoApps title="Apps" className="custom-icon-hover" />
          <a
            to={``}
            aria-label={`Google Account: \nsumaiya ahmed\n(sumu126@gmail.com)`}
          >
            <img
              src={userPhoto}
              alt="user-photo"
              // title="Google Account"

              className="w-12 h-12 object-cover rounded-full"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
