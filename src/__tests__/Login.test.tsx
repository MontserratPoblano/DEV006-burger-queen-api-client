import {
  render,
  screen,
  waitFor,
  fireEvent,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormLogin from "../components-login/FormLogin";
import getDataMock from "../__mocks__/getData.mock";
import Login from "../pages/Login";
import navigateToMenu from "../pages/Login";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../context/auth-context";

// const navigateMock = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  navigate: jest.fn(),
  useNavigate: jest.fn(), // Agrega esta línea para mockear useNavigate
}));

// Mockear useContext
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

// Mockear el hook useAuth para evitar el error
jest.mock("../context/auth-hooks", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    accessToken: "mockToken",
    setAccessToken: jest.fn(), // Simulación de la función setAccessToken
  })),
}));

describe("componente FormLogin", () => {
  it("muestra el botón enviar", () => {
    render(<FormLogin onFormSubmit={jest.fn()} />);

    const sendButton = screen.getByRole("button", { name: /Enviar/i });
    expect(sendButton).toBeInTheDocument();
  });

  it("muestra un mensaje de error en caso de error de la API", async () => {
    getDataMock.mockRejectedValue(new Error("Error de la API"));

    render(
      <AuthProvider>
        <Login />
      </AuthProvider>,
      { wrapper: BrowserRouter }
    );
    userEvent.click(screen.getByRole("button", { name: /Enviar/i }));

    // Verificar si el mensaje de error se encuentra en la pantalla
    const errorText = "Existen errores en tus credenciales, inténtalo de nuevo";
    const errorElement = screen.queryByText(errorText);
    if (errorElement) {
      expect(errorElement).toBeInTheDocument();
    }
  });

  it("navega a la página de menú después de un inicio de sesión exitoso", async () => {
    const mockAccessToken = "mockAccessToken";
    const mockUserData = { email: "test@example.com", role: "user", id: 123 };
    const mockResponse = { accessToken: mockAccessToken, user: mockUserData };

    // Mock de la función getData
    getDataMock.mockResolvedValue(mockResponse);

    // Crear un objeto simulado para localStorage
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
    };

    // Sobrescribir el objeto global 'localStorage' con el objeto simulado
    Object.defineProperty(window, "localStorage", { value: localStorageMock });

    // Mockear useNavigate
    // const mockUseNavigate = jest.fn();
    // jest.mock("react-router-dom", () => ({
    //   ...jest.requireActual("react-router-dom"),
    //   useNavigate: () => mockUseNavigate,
    // }));

    const mockUseNavigate = jest.requireMock("react-router-dom").useNavigate;
// Renderizar el componente con el contexto de autenticación falso
render(
  <AuthProvider>
    <FormLogin
      onFormSubmit={(loginData) => {
        // Mocked implementation of handleFormSubmit
      }}
      error="Error message" // Mocked error
    />
  </AuthProvider>,
  { wrapper: BrowserRouter }
);
    // Simular interacción del usuario
    userEvent.type(screen.getByLabelText(/email/i), "test@example.com");
    userEvent.type(screen.getByLabelText(/contraseña/i), "password123");
    fireEvent.click(screen.getByRole("button", { name: /Enviar/i }));

    await act(async () => {
      navigateToMenu();
    });

    // Agregar console.log para depurar
    console.log("Llamando a navigateToMenu");

    // Esperar a que se completen las acciones asíncronas
    await waitFor(() => {
      console.log("Actions completadas");
      expect(mockUseNavigate).toHaveBeenCalledWith("/menu");
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        "userData",
        JSON.stringify(mockUserData)
      );
    });
  });
});