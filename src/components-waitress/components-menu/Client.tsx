import { useState } from "react";

interface ClientProps {
  setClientName: (name: string) => void;
}
const Client =  ({ setClientName}: ClientProps): JSX.Element => {
  const [clientName, setLocalClientName] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setLocalClientName(newName); 
    setClientName(newName);
  };

  return (
    <>
    <span className="ml-2">Cliente:</span>
      <input
        className="mt-20 ml-4 w-80 h-12 border rounded-lg italic"
        type="text"
        value={clientName}
        onChange={handleInputChange}
        placeholder="Ingresa el nombre del cliente"
      />
    </>
  );
};

export default Client;
