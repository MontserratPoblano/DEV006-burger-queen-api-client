/*TODO: funcion para obtener data


  const result =getData('https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0/users?_page=1&_limit=10');
  console.log(result)

 
*/

import { Token } from "../pages/Login";
// function getData(url: string): Promise<Token> {
//     return fetch(url, {
//       method: "POST",
//       headers: {
//         accept: "application/json",
        
//       },
//     }).then((response) => response.json());
//   }
  
//   export default getData;
  


export interface LoginData {
  email: string;
  password: string;
 
}

function getData(url: string, loginData: LoginData): Promise<Token> {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(loginData), // Aquí agregamos los datos al cuerpo de la solicitud
  }).then((response) => response.json());
}

export default getData;




