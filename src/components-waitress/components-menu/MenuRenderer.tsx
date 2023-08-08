import { Product } from "../../pages/Menu";

interface MenuRendererProps {
  products: Product[];
}

const MenuRenderer = ({ products }: MenuRendererProps): JSX.Element => {
  console.log(products)
  const listItems = products.map((item) => (
    <li key={item.id}>
      <img src={item.image} width={100} height={100}  alt={item.name}  />
      <div>{item.name}</div>
      <div>{`Price: $${item.price.toFixed(2)}`}</div>
    </li>
  ));
  return <ul>{listItems}</ul>;
};

export default MenuRenderer;
