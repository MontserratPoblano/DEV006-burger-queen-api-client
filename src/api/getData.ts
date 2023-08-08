/* eslint-disable @typescript-eslint/no-explicit-any */
import { Token } from "../pages/Login";


export interface LoginData {
  email: string;
  password: string;
 
}


export function getData(url: string, loginData: LoginData): Promise<Token> {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(loginData), 
  }).then((response) => response.json());
}

export function getDataProducts(url: string,token:string) : Promise<[]> {
  return fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:`Bearer ${token}`

    }
  }).then((response) => response.json());
}





