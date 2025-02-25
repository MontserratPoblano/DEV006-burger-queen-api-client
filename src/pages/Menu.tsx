import LeftSide from "../skeleton-components/Leftside";
import MiddleSide from "../skeleton-components/Middleside";
import RightSide from "../skeleton-components/Rightside";
import WelcomeMessage from "../components-waitress/WelcomeMessage";
import Command from "../components-waitress/Command";
import Navbar from "../components-waitress/components-menu/Navbar";
import Client from "../components-waitress/components-menu/Client";
import MenuRenderer from "../components-waitress/components-menu/MenuRenderer";
import OptionMenu from "../components-waitress/components-menu/OptionMenu";
import { getDataProducts } from "../api/getData";
import { useState, useEffect } from "react";
import useAuth from "../context/auth-hooks";
import Modal from "../components-waitress/components-menu/Modal";


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

  const findProductById = (productId: number) => {
    return listProducts.find((item) => item.id === productId);
  };

  const updateSelectedProduct = (
    selectedProducts: SelectProduct[],
    productSelect: Product
  ) => {
    const existingProductIndex = selectedProducts.findIndex(
      (selected) => selected.product.id === productSelect.id
    );

    if (existingProductIndex !== -1) {
      const updatedSelectedProducts = [...selectedProducts];
      const existingProduct = updatedSelectedProducts[existingProductIndex];

      existingProduct.qty += 1;
      existingProduct.product.price = existingProduct.qty * productSelect.price;

      return updatedSelectedProducts;
      
    } else {
      const newSelectedProduct: SelectProduct = {
        qty: 1,
        product: { ...productSelect },
      };

      return [...selectedProducts, newSelectedProduct];
    }
  };

  const handleProductClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const productId = +e.currentTarget.id;
    const productSelect = findProductById(productId);

    if (productSelect) {
      const updatedSelectedProducts = updateSelectedProduct(
        selectProduct,
        productSelect
      );
      setSelectProduct(updatedSelectedProducts);
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
    {/* VISTA PORTRAIT (VERTICAL) TABLET */}
    <section className="">
      {/* <div className="flex flex-row lg:h-[calc(80vw-100px)] lg:p-2 overflow-hidden"> */}
      <div className="portrait:block lg:hidden  ">
      <Navbar />
    
        <div className="flex mt-10">

          <div className="ml-8 w-80">
        <MiddleSide>
          <WelcomeMessage />
          <Client setClientName={handleNameChange} />
          <div className="grid grid-cols-2  place-content-center h-20">
            <OptionMenu category="Desayuno" handleClickMenu={handleClickMenu} />
            <OptionMenu category="Almuerzo" handleClickMenu={handleClickMenu} />
          </div>
          
          <MenuRenderer
            products={listByCategory}
            handleProductClick={handleProductClick}
          />
        </MiddleSide>
        </div>



        <div className="w-96">
        <RightSide>
          <Command clientName={clientName}  selectProduct={selectProduct} handleDeleteClick={handleDeleteClick} />
        </RightSide>
        </div>
        </div>
      </div>
    </section>





        {/* VISTA LANDSCAPE (HORIZONTAL) TABLET */}
        <section className="portrait:hidden">
      {/* <div className="flex flex-row lg:h-[calc(80vw-100px)] lg:p-2 overflow-hidden"> */}
  
  <div className="portait:hidden landscape:block "> 
      
      
    

        <div className="flex mt-10 mb-5 p-2 h-screen">
            
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
      </div>
   

    </section>
    
    <Modal handleCloseClick={handleCloseClick} showModal={showModal} handleDeleteItemClick={handleDeleteItemClick} />
    </>
  );
};
export default Menu;
