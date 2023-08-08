import { GiHamburger } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { TbLogout } from "react-icons/tb";

import lareinaburguer from "../../../src/assets/lareinaburguer.png";


const Navbar = (): JSX.Element => {
  return (
    <aside>
      <section className="-mx-6 px-6 py-4 mt-4">
        <img src={lareinaburguer} alt="lareina" className="m-auto" />
      </section>
      <div className="border-t border-black mt-4"> </div>
      <section className="px-6 -ml-6 pt-4 mt-5 flex justify-between items-center">
        <ul className="space-y-2 tracking-wide">
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
        </ul>
      </section>
        <a className="px-4 py-3 flex items-center space-x-4 rounded-md text-black">
          <TbLogout />
          <h3>Cerrar sesión</h3>
        </a>
    </aside>
  );
};

export default Navbar;
