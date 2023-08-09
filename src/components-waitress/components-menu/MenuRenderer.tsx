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

