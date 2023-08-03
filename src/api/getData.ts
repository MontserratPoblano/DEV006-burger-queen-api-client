/*TODO: funcion para obtener data


  const result =getData('https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0/users?_page=1&_limit=10');
  console.log(result)

 
*/

import { User } from "../pages/Login";
function getData(url: string): Promise<User[]> {
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuaXRhLmJvcmdAc3lzdGVycy54eXoiLCJpYXQiOjE2OTEwNzEzMDQsImV4cCI6MTY5MTA3NDkwNCwic3ViIjoiMSJ9.NwmnXolk8gnmFC3UzlF1_WCZcn0C8GVlOPiHwAjkxR0",
        accept: "application/json",
      },
    }).then((response) => response.json());
  }
  
  export default getData;
  




