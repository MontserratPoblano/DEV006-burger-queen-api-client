
interface CommandProps {
  clientName: string;
}

const Command = ({ clientName}: CommandProps): JSX.Element => {
 
  return (
    <>
    <h2 className="text-center mt-5">Order #</h2>
    <div className="border-t border-black mt-4"> </div>
    <ul className="ml-5 mt-3">
    <li className="mb-2">Cliente: {clientName}</li>
    <li>Nombre meser@:</li>
    </ul>
    </>
  );
};

export default Command;