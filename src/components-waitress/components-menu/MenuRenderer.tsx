import { Product } from "../../pages/Menu";

interface MenuRendererProps {
  products: Product[];
  handleProductClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const MenuRenderer = ({ products, handleProductClick}: MenuRendererProps): JSX.Element => {

    const listItems = products.map((item) => (
    <div className="group h-32 w-32 shadow-xl rounded-lg relative flex flex-col items-center gap-3 mb-10 " id={item.id.toString()} key={item.id}  onClick={ handleProductClick}>
    
        <img
          src={item.image}
          alt={item.name}
          className="w-10  object-cover max-h-40 object-center group-hover:opacity-30 "
         
        />
        <h3 className="mx-2 text-sm text-gray-700 text-center group-hover:opacity-30">
          {item.name}
        </h3>
        <p className="absolute bottom-0 left-0 mt-2 mx-2 text-lg font-medium text-black group-hover:opacity-30 ">{`$${item.price.toFixed(
          2
        )}`}</p>
    </div>

  ));
  return (
    <section className="mx-2 max-w-2xl ">
      <ul className="grid grid-cols-1 gap-x-10 gap-y-10 portrait:block">
        {listItems}
      </ul>
    </section>
    
  );
};

export default MenuRenderer;

