import FormLogin from "../components-login/FormLogin";
import getData from "../api/getData";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface User {
  id: number;
  email: string;
  password: string;
  role: string;
}

const Login = (): JSX.Element => {
  const [userActual, setUserActual] = useState<User[]>([]);
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getData("http://localhost:8080/users")
      .then((response: User[]) => {
        setUserActual(response);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleLogin = (user: User) => {
    const foundUser = userActual.find((u) => u.email === user.email);

    if (foundUser) {
      navigate("/menu")

    } else {
       setError("Existen errores en tus credenciales, inténtalo de nuevo")
    }
  };

  return (
    <>
      <FormLogin handleLogin={handleLogin} error={error} />
    </>
  );
};

export default Login;
