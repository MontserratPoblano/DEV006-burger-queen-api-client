import getData from "../api/getData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormLogin from "../components-login/FormLogin";
import { LoginData } from "../api/getData";

interface UserData {
  email: string;
  role: string;
  id: number;
}

export interface Token {
  accessToken: string;
  user: UserData;
}

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const navigateToMenu = () => {
    navigate("/menu");
  };

  const handleResponse = (response: Token) => {
    if (response.accessToken) {
      localStorage.setItem("userData", JSON.stringify(response.user));
      navigateToMenu();
    } else {
      setError("Existen errores en tus credenciales, inténtalo de nuevo");
    }
  };

  const handleError = () => {
    setError("Error al enviar la solicitud");
  };

  const handleFormSubmit = (loginData: LoginData) => {
    getData("http://localhost:8080/login", loginData)
      .then(handleResponse)
      .catch(handleError);
  };

  return (
    <>
      <FormLogin onFormSubmit={handleFormSubmit} error={error} />
    </>
  );
};

export default Login;
