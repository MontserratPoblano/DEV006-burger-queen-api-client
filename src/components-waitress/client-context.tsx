// import { createContext, ReactNode, useState } from "react";

// interface ClientContextProps {
//   clientName: string;
//   setClientName: (name: string) => void;
//   inputBlocked: boolean;
//   setInputBlocked: (blocked: boolean) => void;
// }

// export const ClientContext = createContext<ClientContextProps | undefined>(undefined);

// export const ClientProvider=({children}:{children:ReactNode})=>{

//   const [clientName, setClientName] = useState<string>(()=>{ 
//    return localStorage.getItem("clientName") || ""
//   });
//   const [inputBlocked, setInputBlocked] = useState<boolean>(false);

//   return (
//     <ClientContext.Provider
//       value={{
//         clientName,
//         setClientName,
//         inputBlocked,
//         setInputBlocked,
//       }}
//     >
//       {children}
//     </ClientContext.Provider>
//   );
// };