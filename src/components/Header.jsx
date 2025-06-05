import React, { useState } from "react";
import logo from "./../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderList from "./HeaderList";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];

  return (
    <header className="relative z-50 bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] shadow-lg">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex gap-8 items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-[80px] md:w-[115px] object-cover drop-shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <nav className="hidden md:flex gap-8">
            {menu.map((item, idx) => (
              <HeaderList
                key={item.name}
                name={item.name}
                Icon={item.icon}
                className="hover:text-[#e94560] transition-colors duration-200"
              />
            ))}
          </nav>
          <div className="flex md:hidden gap-5">
            {menu.slice(0, 3).map((item) => (
              <HeaderList
                key={item.name}
                name=""
                Icon={item.icon}
                className="hover:text-[#e94560] transition-colors duration-200"
              />
            ))}
            <div className="relative">
              <button
                className="focus:outline-none"
                onClick={() => setToggle((prev) => !prev)}
              >
                <HeaderList name="" Icon={HiDotsVertical} />
              </button>
              {toggle && (
                <div
                  className="absolute right-0 mt-3 w-48 bg-[#232946] border border-[#e94560] rounded-lg shadow-xl p-4 animate-fade-in"
                  onMouseLeave={() => setToggle(false)}
                >
                  {menu.slice(3).map((item) => (
                    <HeaderList
                      key={item.name}
                      name={item.name}
                      Icon={item.icon}
                      className="hover:text-[#e94560] transition-colors duration-200 py-2"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          alt="User"
          className="w-[40px] rounded-full border-2 border-[#e94560] shadow-md hover:scale-110 transition-transform duration-300"
        />
      </div>
      {/* Cool animated underline for desktop nav */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </header>
  );
}

export default Header;
