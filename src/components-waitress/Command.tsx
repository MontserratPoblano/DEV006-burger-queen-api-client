import { SelectProduct } from "../pages/Menu";
import DataTable, { TableColumn }from 'react-data-table-component';
import { BsTrash } from 'react-icons/bs';
import { AiOutlinePlusCircle, AiOutlineMinusCircle  } from 'react-icons/ai'


interface CommandProps {
  clientName: string;
  selectProduct: SelectProduct[];
}

const Command = ({ clientName, selectProduct }: CommandProps): JSX.Element => {
  const columns: TableColumn<SelectProduct>[] = [
    {
      name: 'Item',
      selector: row => row.product.name,
      sortable: true,
      width: '50%'
    },
    {
      name: 'Cantidad',
      selector: (row: SelectProduct) => row.qty.toString(),
      sortable: true,
      width: '25%',
      cell: (row) => (
        <div className="flex items-center justify-center">
          <AiOutlineMinusCircle className="cursor-pointer" />
          <span className="mx-2">{row.qty}</span>
          <AiOutlinePlusCircle className="cursor-pointer" />
        </div>
      ),
    },
    {
      name: 'Precio',
      selector: row => row.product.price,
      sortable: true,
      width: '20%'
    },
    {
      cell: () => <BsTrash />,
      button: true,
      width: '3%',
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
      <div className="mt-10 p-2 rounded-lg m-3">
      <DataTable 
        columns={columns}
        data={selectProduct}
        pagination={false}
      />
      </div>
    </>
  );
};

export default Command;