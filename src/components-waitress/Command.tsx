import { SelectProduct } from "../pages/Menu";
import DataTable, { TableColumn }from 'react-data-table-component';
import { BsTrash } from 'react-icons/bs';
import { AiOutlinePlusCircle, AiOutlineMinusCircle  } from 'react-icons/ai'


interface CommandProps {
  clientName: string;
  selectProduct: SelectProduct[];
  handleDeleteClick:(e: React.MouseEvent<HTMLButtonElement>) => void;
 
}

const Command = ({ clientName, selectProduct,handleDeleteClick }: CommandProps): JSX.Element => {
 
 
  const columns: TableColumn<SelectProduct>[] = [
    {
      name: 'Item',
      selector: row => row.product.name,
      sortable: true,
      width: '49%'
    },
    {
      name: 'Cant',
      selector: (row: SelectProduct) => row.qty.toString(),
      sortable: true,
      width: '23%',
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
      width: '22%'
    },
    {
      cell: (row) => <BsTrash id={row.product.id} onClick={handleDeleteClick} className="cursor-pointer"/>,
      button: true,
      width: '3%',
    },
  ];

  
 

  return (
    <>
      <h2 className="text-center mt-5">Order #</h2>
      <div className="border-t border-black mt-4"></div>
      <ul className="ml-5 mt-3">
        <li className="mb-2">Cliente: {clientName} </li>
        <li>Nombre meser@:</li>
      </ul>
      <div className="mt-10 p-2 rounded-lg">
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