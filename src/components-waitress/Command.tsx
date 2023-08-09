
interface CommandProps {
  clientName: string;
  selectProduct: string;
}

const Command = ({ clientName, selectProduct }: CommandProps): JSX.Element => {

  return (
    <>
      <h2 className="text-center mt-5">Order #</h2>
      <div className="border-t border-black mt-4"> </div>
      <ul className="ml-5 mt-3">
        <li className="mb-2">Cliente: {clientName} </li>
        <li>Nombre meser@:</li>
        {selectProduct}
      </ul>

      <thead>
        <tr>
          <th
            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Item
          </th>
          <th
            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Cantidad
          </th>
          <th
            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Precio
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div className="flex items-center">

              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                {selectProduct}
                </p>
              </div>
            </div>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">Admin</p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">
              Jan 21, 2020
            </p>
          </td>
        </tr>
      </tbody>

    </>
  )
};

      export default Command;