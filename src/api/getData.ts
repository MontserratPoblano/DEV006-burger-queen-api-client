/*TODO: funcion para obtener data


  const result =getData('https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0/users?_page=1&_limit=10');
  console.log(result)

 
*/
function getData(url:string):Promise<string[]>{
    return fetch( url,{
        method: "GET",
        headers:{
            Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
            accept:"application/json",
        }
    }).then((response) => response.json());
}

export  default getData;





