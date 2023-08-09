import { Product } from "../../pages/Menu";

interface MenuRendererProps {
  products: Product[];
}

const MenuRenderer = ({ products }: MenuRendererProps): JSX.Element => {
  const listItems = products.map((item) => (
    <div className="group h-48 shadow-xl rounded-lg relative"  key={item.id}>
    
        <img
          src={item.image}
          alt={item.name}
          className="object-cover object-center group-hover:opacity-30 "
        />
        <h3 className="mt-2 mx-2 text-sm text-gray-700 text-center group-hover:opacity-30">
          {item.name}
        </h3>
        <p className="absolute bottom-0 left-0 mt-2 mx-2 text-lg font-medium text-black group-hover:opacity-30">{`$${item.price.toFixed(
          2
        )}`}</p>


    </div>
  ));
  return (
    <section className="mx-2 max-w-2xl sm:px-3 lg:max-w-7xl lg:px-4">
      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {listItems}
      </ul>
    </section>
  );
};

export default MenuRenderer;
