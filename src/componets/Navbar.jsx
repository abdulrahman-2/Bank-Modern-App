import styles from "../style";
import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.flexBetween} py-6 relative`}>
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex flex-1 justify-end items-center gap-8 hidden">
        {navLinks.map((nav) => (
          <li key={nav.id}>
            <a
              className="text-white font-poppins font-normal text-[16px] hover:text-secondary transition-all duration-300"
              href=""
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 my-2 w-full rounded-xl sidbar`}
        >
          <ul className="list-none flex flex-1 flex-col justify-center items-center gap-6">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  className="text-white hover:text-secondary transition-all duration-300 font-poppins font-normal text-[16px]"
                  href=""
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
