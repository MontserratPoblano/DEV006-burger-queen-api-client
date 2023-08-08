import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./context/auth-context";


function App() {
  return (
   
   
   <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
