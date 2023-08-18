import { GiHamburger } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { TbLogout } from "react-icons/tb";

import lareinaburguer from "../../../src/assets/lareinaburguer.png";
import { useState, useEffect } from "react";

const Navbar = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

    useEffect(() => {
    const handleDocumentClick = () => {
      // Cerrar el menú si está abierto y se hace clic en cualquier parte de la pantalla
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [menuOpen]);

  return (
    <>
      <nav>
        <div className="lg:hidden  relative">
          <img
            src={lareinaburguer}
            alt="lareina"
            className="m-auto mt-8 mb-5"
          />
          <div className="ml-10 mr-5">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-black focus:outline-none"
            >
              <div className="space-y-2 ">
                <div className="w-8 h-0.5 bg-gray-600" />
                <div className="w-8 h-0.5 bg-gray-600" />
                <div className="w-8 h-0.5 bg-gray-600" />
              </div>
            </button>
          </div>
       
          <ul
            className={`space-y-2 tracking-wide left-10  ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <a
                href="#"
                className="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-black"
              >
                <ImSpoonKnife />
                <h3 className="-mr-1 font-medium">Órdenes enviadas</h3>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-black"
              >
                <GiHamburger />
                <h3 className="text-black">Menú</h3>
              </a>
            </li>
            <a className="px-4 py-3 flex items-center space-x-4 rounded-md text-black">
              <TbLogout />
              <h3>Cerrar sesión</h3>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
