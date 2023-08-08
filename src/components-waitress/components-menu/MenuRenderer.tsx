import { Product } from "../../pages/Menu";

interface MenuRendererProps {
  products: Product[];
}

const MenuRenderer = ({ products }: MenuRendererProps): JSX.Element => {
  const listItems = products.map((item) => (
    <li className="group" key={item.id}>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{`Price: $${item.price.toFixed(
        2
      )}`}</p>
    </li>
  ));
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 overflow-hidden">
      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {listItems}
      </ul>
    </section>
  );
};

export default MenuRenderer;
