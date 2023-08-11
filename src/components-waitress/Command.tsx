import { SelectProduct } from "../pages/Menu";
import DataTable from 'react-data-table-component';



interface CommandProps {
  clientName: string;
  selectProduct: SelectProduct[];
}

const Command = ({ clientName, selectProduct }: CommandProps): JSX.Element => {
  const columns = [
    {
      name: 'Producto',
      selector: 'product.name',
      sortable: true,
    },
    {
      name: 'Cantidad',
      selector: 'qty',
      sortable: true,
    },
    {
      name: 'Valor',
      selector: 'product.price',
      sortable: true,
    },
  ];

  const productsTable=selectProduct.map((product)=>{
    
  })
 

  return (
    <>
      <h2 className="text-center mt-5">Order #</h2>
      <div className="border-t border-black mt-4"></div>
      <ul className="ml-5 mt-3">
        <li className="mb-2">Cliente: {clientName} </li>
        <li>Nombre meser@:</li>
      </ul>
      <DataTable
        title="Detalle de la orden"
        columns={columns}
        data={selectProduct}
        pagination={false}
      />
    </>
  );
};

export default Command;