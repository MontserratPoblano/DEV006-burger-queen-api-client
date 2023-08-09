// import { Product } from "../../pages/Menu";

// interface MenuRendererProps {
//   products: Product[];
//   setSelectProduct: (prevSelectedProducts: SelectedProduct[]) => void;
// }

// interface SelectedProduct {
//   name: string;
//   price: number;
// }


// const MenuRenderer = ({ products, setSelectProduct}: MenuRendererProps): JSX.Element => {
//   const handleProductClick = (product: Product) => {
//     const selectedProduct: SelectedProduct = {
//       name: product.name,
//       price: product.price,
//     };
    
//     setSelectProduct((prevSelectedProducts: SelectedProduct[]) => [
//       ...prevSelectedProducts,
//       selectedProduct,
//     ]);
//   };
  
  

//   const listItems = products.map((item) => (
//     <li key={item.id} onClick={() => handleProductClick(item)}>
//       <img src={item.image} width={100} height={100}  alt={item.name}  />
//       <div>{item.name}</div>
//       <div>{`Price: $${item.price.toFixed(2)}`}</div>
//     </li>
//   ));
//   return <ul>{listItems}</ul>;
// };

// export default MenuRenderer;

import { Product } from "../../pages/Menu";

interface MenuRendererProps {
  products: Product[];
  setSelectProduct: (name: string) => any;
}

const MenuRenderer = ({ products, setSelectProduct}: MenuRendererProps): JSX.Element => {
  const handleProductClick = (name: string) => {
    setSelectProduct(name); 
  };

  const listItems = products.map((item) => (
    <li key={item.id} onClick={() => handleProductClick(item.name)}>
      <img src={item.image} width={100} height={100}  alt={item.name}  />
      <div>{item.name}</div>
      <div>{`Price: $${item.price.toFixed(2)}`}</div>
    </li>
  ));
  return <ul>{listItems}</ul>;
};

export default MenuRenderer;

