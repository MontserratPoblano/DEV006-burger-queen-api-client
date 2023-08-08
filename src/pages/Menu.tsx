/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from "../components-waitress/components-menu/Navbar";
import LeftSide from "../skeleton-components/Leftside";
import MiddleSide from "../skeleton-components/Middleside";
import RightSide from "../skeleton-components/Rightside";
import WelcomeMessage from "../components-waitress/WelcomeMessage";
import Client from "../components-waitress/components-menu/Client";
import Command from "../components-waitress/Command";
import OptionMenu from "../components-waitress/components-menu/OptionMenu";
import { useState, useEffect } from "react";
import useAuth from "../context/auth-hooks";
import { getDataProducts } from "../api/getData";
import MenuRenderer from "../components-waitress/components-menu/MenuRenderer";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  dateEntry: string;
}

const Menu = (): JSX.Element => {
  const [clientName, setClientName] = useState<string>("");
  const [listProducts, setListProducts] = useState<Product[]>([]);
  const [listByCategory, setListByCategory] = useState<Product[]>([]);
  const { accessToken } = useAuth();
  console.log('desde el render', accessToken)


  useEffect(() => {
    if (accessToken) { 
       getDataProducts(
        "http://localhost:8080/products?_page=1&_limit=10",
        accessToken
      ).then((response) => {
        setListProducts(response);
      });
    }
  }, [accessToken]);

  const handleNameChange = (name: string) => {
    setClientName(name);
  };

  const handleClickMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    const categoryId = e.currentTarget.id;
    const productsByCategory = listProducts.filter((product) =>
      product.type.includes(categoryId)
    );
    setListByCategory(productsByCategory);
  };

  return (
    <section className="h-screen">
      <div className="flex flex-row mx-3 h-full">
        <LeftSide>
          <Navbar />
        </LeftSide>
        <MiddleSide>
          <WelcomeMessage />
          <Client setClientName={handleNameChange} />
          <div className="grid grid-cols-2 gap-2 place-content-center h-40">
          <OptionMenu category="Desayuno" handleClickMenu={handleClickMenu} />
          <OptionMenu category="Almuerzo" handleClickMenu={handleClickMenu} />
          </div>
          <MenuRenderer products={listByCategory}/>
        </MiddleSide>
        <RightSide>
          <Command clientName={clientName} />
        </RightSide>
      </div>
    </section>
  );
};
export default Menu;
