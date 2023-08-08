export const mockGetData = jest.fn();

mockGetData.mockImplementation(() => {
  // Simula una respuesta exitosa con datos de usuario falsos
  const mockUserData = { email: "prueba@test.com", role: "waiter", id: 3 };
  const mockResponse = { accessToken: "mockAccessToken", user: mockUserData };
  return Promise.resolve(mockResponse);
});

export default mockGetData;
