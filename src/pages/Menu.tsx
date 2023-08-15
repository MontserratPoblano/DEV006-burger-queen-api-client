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
import Modal from "../components-waitress/components-menu/Modal"



export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  dateEntry: string;
}

export interface SelectProduct {
  qty: number;
  product: Product;
}

const Menu = (): JSX.Element => {
  const [clientName, setClientName] = useState<string>("");
  const [listProducts, setListProducts] = useState<Product[]>([]);
  const [listByCategory, setListByCategory] = useState<Product[]>([]);
  const { accessToken } = useAuth();
  const [selectProduct, setSelectProduct] = useState<SelectProduct[]>([]);
  const [showModal,setShowModal] = useState(false)
  const [deleteItem,setDeleteItem] = useState<number | undefined>(undefined)

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

  const handleProductClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const productId = +e.currentTarget.id;

    //FUNCION A PARTE, QUE SE LLAME AQUI HACERLA AQUI EN ESTE ARCHIVO.
    const productSelect = listProducts.find((item) => item.id === productId);

    if (productSelect) {
      const existingProductIndex = selectProduct.findIndex(
        (selected) => selected.product.id === productSelect.id
      );

      if (existingProductIndex !== -1) {
        //COPIA INMUTABLE
        const updatedSelectedProducts = [...selectProduct];
        const existingProduct = updatedSelectedProducts[existingProductIndex];

        existingProduct.qty += 1;
        existingProduct.product.price =
          existingProduct.qty * productSelect.price;

        setSelectProduct(updatedSelectedProducts);
      } else {
        const newSelectedProduct: SelectProduct = {
          qty: 1,
          product: { ...productSelect },
        };
        setSelectProduct([...selectProduct, newSelectedProduct]);
      }

    }
  };

 
  const handleClickMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    const categoryId = e.currentTarget.id;
    const productsByCategory = listProducts.filter((product) =>
      product.type.includes(categoryId)
    );
    setListByCategory(productsByCategory);
  };

  const handleDeleteClick = (e:React.MouseEvent<HTMLButtonElement>) =>{
    const getIdItem=+e.currentTarget.id
    setDeleteItem(getIdItem)
    console.log(getIdItem,"estoy borrando")
    
    setShowModal(true)
  }

  const handleCloseClick = () =>{
    setShowModal(false)
  }

  const handleDeleteItemClick = () =>{
    const selectDeleteItem=selectProduct.filter((item)=>{
     return item.product.id!==deleteItem
    })
    setShowModal(false)
    setSelectProduct(selectDeleteItem)
  }

  


  return (
    <>
    <section className="">
      <div className="flex flex-row lg:h-[calc(80vw-100px)] lg:p-2 overflow-hidden">

        <LeftSide>
          <Navbar />
        </LeftSide>
        <MiddleSide>
          <WelcomeMessage />
          <Client setClientName={handleNameChange} />
          <div className="grid grid-cols-2 gap-2 place-content-center h-20">
            <OptionMenu category="Desayuno" handleClickMenu={handleClickMenu} />
            <OptionMenu category="Almuerzo" handleClickMenu={handleClickMenu} />
          </div>
          <MenuRenderer
            products={listByCategory}
            handleProductClick={handleProductClick}
          />
        </MiddleSide>
        <RightSide>
          <Command clientName={clientName}  selectProduct={selectProduct} handleDeleteClick={handleDeleteClick} />
        </RightSide>
      </div>
      <Modal handleCloseClick={handleCloseClick} showModal={showModal} handleDeleteItemClick={handleDeleteItemClick} />
    </section>
    </>
  );
};
export default Menu;
