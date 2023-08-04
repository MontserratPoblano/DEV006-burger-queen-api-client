import { useEffect, useState } from "react";

const WelcomeMessage = (): JSX.Element => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  useEffect(() => {
    // Obtener los datos del usuario almacenados en el localStorage
    const userDataString = localStorage.getItem("userData");

    if (userDataString) {
      // Convertir un string en formato JSON
      const userData = JSON.parse(userDataString);
      const { role } = userData;
      setUserRole(role);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  }, []);

  return (
    <>
      {showMessage && (
        <p className="font-bold text-2xl ml-5 mt-5">¡Bienvenid@ {userRole}!</p>
      )}
    </>
  );
};

export default WelcomeMessage;
