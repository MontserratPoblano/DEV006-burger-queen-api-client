import { useState, useEffect } from "react";
import { IoMdSend } from "react-icons/io";

interface ClientProps {
  setClientName: (name: string) => void;
}

const Client = ({ setClientName }: ClientProps): JSX.Element => {
  const [clientName, setLocalClientName] = useState<string>("");
  const [inputBlocked, setInputBlocked] = useState<boolean>(false);
  
  useEffect(() => {
    if (clientName) {
      localStorage.setItem("clientName", clientName);
    }
  }, [clientName]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setLocalClientName(newName);
  };

  const handleInputSubmit = () => {
    if (clientName.trim() !== "") {
      setClientName(clientName);
      setInputBlocked(true);
    }
  };

  const handleInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); 
      handleInputSubmit();
    }
  };

  return (
    <>
    <div className="flex flex-row">
      <span className="ml-2 mt-10">Cliente:</span>
        <input
          className="mt-8 ml-5 w-72 h-10 border rounded-lg italic"
          type="text"
          value={clientName}
          onChange={handleInputChange}
          onKeyUp={handleInputKeyPress}
          placeholder=" Ingresa el nombre del cliente"
          disabled={inputBlocked}
          
        />
        <div className="mt-1">
        <button
          className="mt-7 ml-3 h-10 border rounded-lg px-2 text-white bg-black"
          onClick={handleInputSubmit}
          disabled={inputBlocked}
        >
          <IoMdSend />
        </button>
        </div>
      </div>
    </>
  );
};

export default Client;
