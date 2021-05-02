export default {
  get: jest.fn().mockImplementation((url) => {
    switch (url) {
      case "/api/ingredients":
        return Promise.resolve({
          data: [
            { name: "Cheese", id: "1" },
            { name: "Tomato", id: "2" },
            { name: "Onion", id: "3" },
          ],
        });
      default:
        return Promise.resolve({ status: 200, data: {} });
    }
  }),
};
