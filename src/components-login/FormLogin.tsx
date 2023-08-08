import { useState, useRef } from "react";
//import { User } from "../pages/Login";
import logo4 from "../assets/logo4.png";
import { LoginData } from "../api/getData";

type FormLoginProps = {
  // handleLogin: (user: User) => void;
  error?: string;
  onFormSubmit: (loginData: LoginData) => void;
};

// type User={
//   id:number;
//   email:string;
//   password:string;
//   role:string;
// }



const FormLogin = ({  error, onFormSubmit }: FormLoginProps): JSX.Element => {
  const [user, setUser] = useState<LoginData>({
    // id: 0,
    email: "",
    password: "",
   
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onFormSubmit(user)


    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, email: event.target.value });
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, password: event.target.value });
  };

  return (
    <>
      <div className="bg-custom-green relative lg:py-20 w-full max-full">
        <div
          className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row"
        >
          <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
            <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
              <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                <img src={logo4} className="btn-" />
              </div>
            </div>
            <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
              <form
                className="flex flex-col items-start justify-start pt-20 pr-10 pb-24 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10"
                onSubmit={handleSubmit}
                ref={formRef}
              >
                <p className="w-full mb-10 text-3xl text-center leading-snug font-serif">
                  Ingresa con tus credenciales
                </p>
                <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-lg text-gray-600
                  absolute"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      placeholder="123@ex.com"
                      type="text"
                      className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                      onChange={handleEmail}
                      required
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute text-lg"
                    >
                      Contraseña
                    </label>

                    <input
                      id="password"
                      placeholder="*******"
                      type="password"
                      className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                      onChange={handlePassword}
                      required
                    />
                  </div>

                  <button
                    className="w-full inline-block pt-4 pr-5 pb-4 pl-5 mt-4 text-xl font-medium text-center text-white bg-custom-yellow
                  rounded-lg transition duration-200 hover:bg-black ease"
                    type="submit"
                    role="button"
                  >
                    Enviar
                  </button>
                  {error? <p className="text-red-600 font-medium">{error}</p>: null}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLogin;
