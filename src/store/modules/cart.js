export default {
  state() {
    return {
      cart: { products: [], totalAmount: 0, totalQuantity: 0 },
      compare: { products: [], totalQuantity: 0 },
    };
  },
  mutations: {
    addProductToCart(state, payload) {
      let isAlready = false;
      state.cart.products.forEach((el, ind) => {
        if (el.id === payload.id) {
          state.cart.products[ind].qty++;
          isAlready = true;
        }
      });
      if (!isAlready) {
        payload.qty = 1;
        state.cart.products.push(payload);
      }
      state.cart.totalAmount += payload.price;
      state.cart.totalQuantity++;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    deleteProductFromCart(state, payload) {
      const indToDel = state.cart.products.findIndex(
        (el) => el.id === payload.id
      );
      state.cart.products.splice(indToDel, 1);
      state.cart.totalAmount -= payload.price * payload.qty;
      state.cart.totalQuantity -= payload.qty;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    addQty(state, payload) {
      const currEl = state.cart.products.find((el) => el.id === payload.id);
      currEl.qty++;
      state.cart.totalAmount += currEl.price;
      state.cart.totalQuantity++;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    reduceQty(state, payload) {
      const currEl = state.cart.products.find((el) => el.id === payload.id);
      currEl.qty--;
      if (currEl.qty === 0) {
        const indToDel = state.cart.products.findIndex(
          (el) => el.id === payload.id
        );
        state.cart.products.splice(indToDel, 1);
      }
      state.cart.totalAmount -= currEl.price;
      state.cart.totalQuantity--;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    cartFromLocalStorage(state, payload) {
      state.cart = payload;
    },
    addProductToCompare(state, payload) {
      let isAlready = false;
      state.compare.products.forEach((el) => {
        if (el.id === payload.id) isAlready = true;
      });
      if (!isAlready) {
        payload.qty = 1;
        state.compare.products.push(payload);

        state.compare.totalQuantity++;
        localStorage.setItem("compare", JSON.stringify(state.compare));
      }
    },
    deleteProductFromCompare(state, payload) {
      const indToDel = state.compare.products.findIndex(
        (el) => el.id === payload.id
      );
      state.compare.products.splice(indToDel, 1);
      state.compare.totalQuantity -= payload.qty;
      localStorage.setItem("compare", JSON.stringify(state.compare));
    },
    compareFromLocalStorage(state, payload) {
      state.compare = payload;
    },
  },
  actions: {
    addToCart(context, payload) {
      const prods = context.rootGetters.getProducts;
      const toCart = prods.find((prod) => prod.id === payload.id);
      context.commit("addProductToCart", toCart);
    },
    deleteFromCart(context, payload) {
      const prods = context.getters.getProductsCart;
      const fromCart = prods.find((prod) => prod.id === payload.id);
      context.commit("deleteProductFromCart", fromCart);
    },
    addQuantity(context, payload) {
      context.commit("addQty", payload);
    },
    reduceQuantity(context, payload) {
      context.commit("reduceQty", payload);
    },
    setCartFromLocalStorage(context) {
      if (JSON.parse(localStorage.getItem("cart"))) {
        context.commit(
          "cartFromLocalStorage",
          JSON.parse(localStorage.getItem("cart"))
        );
      }
    },
    addToCompare(context, payload) {
      const prods = context.rootGetters.getProducts;
      const toCompare = prods.find((prod) => prod.id === payload.id);
      context.commit("addProductToCompare", toCompare);
    },
    deleteFromCompare(context, payload) {
      const prods = context.getters.getProductsCompare;
      const fromCompare = prods.find((prod) => prod.id === payload.id);
      context.commit("deleteProductFromCompare", fromCompare);
    },
    setCompareFromLocalStorage(context) {
      if (JSON.parse(localStorage.getItem("compare"))) {
        context.commit(
            "compareFromLocalStorage",
            JSON.parse(localStorage.getItem("compare"))
        );
      }
    },
  },
  getters: {
    getQuantity(state) {
      return state.cart.totalQuantity;
    },
    getCompareQuantity(state) {
      return state.compare.totalQuantity;
    },
    getAmount(state) {
      return state.cart.totalAmount.toFixed(2) * 1;
    },
    getProductsCart(state) {
      return state.cart.products;
    },
    getProductsCompare(state) {
      return state.compare.products;
    },
  },
};
