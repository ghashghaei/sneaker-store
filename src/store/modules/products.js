export default {
  state() {
    return {
      products: [],
    };
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    async loadProducts(context) {
      const response = await fetch("http://localhost:8080/products.json");
      const responseData = await response.json();
      const prods = [];
      if (!response.ok) {
        const err = new Error(responseData.message || "Error");
        throw err;
      }
      for (let key in responseData) {
        prods.push({
          id: key * 1,
          name: responseData[key].name,
          color_way: responseData[key].color_way,
          description: responseData[key].description,
          price: responseData[key].price,
          image: responseData[key].image,
          lightness: responseData[key].lightness,
          cushioning: responseData[key].cushioning,
          flexibility: responseData[key].flexibility,
          responsive: responseData[key].responsive,
          stability: responseData[key].stability,
          grip: responseData[key].grip,
          average: responseData[key].average,
        });
      }
      context.commit("setProducts", prods);
    },
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
};
