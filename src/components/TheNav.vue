<template>
  <nav class="nav">
    <div class="nav__logo">
      <router-link to="/products" @click="$emit('toggle-preview', false)">
        <p class="nav__text">Company</p>
      </router-link>
    </div>

    <div class="nav__icon-bag">
      <button class="nav__btn-bag" @click="$emit('toggle-preview', true)">
        <img
          class="nav__image-bag"
          src="../assets/shopping-bag.svg"
          alt="cart"
        />
      </button>
      <p v-if="quantity" class="nav__qty">{{ quantity }}</p>
    </div>

    <div class="nav__icon-compare">
      <router-link to="/compare" @click="$emit('toggle-preview', false)">
        <button class="nav__btn-compare">
          <img
            class="nav__image-compare"
            src="../assets/compare.svg"
            alt="compare"
          />
        </button>
        <p v-if="compare" class="nav__qty">{{ compare }}</p>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  emits: ["toggle-preview"],
  data() {
    return {
      isCartPreviewVisible: false,
    };
  },
  computed: {
    quantity() {
      return this.$store.getters.getQuantity;
    },
    compare() {
      return this.$store.getters.getCompareQuantity;
    },
    currentRoute() {
      return this.$route.params == "checkout" ? false : true;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  width: 90%;
  margin: 0 auto;
  padding: 10px;

  &__logo {
    flex-grow: 1;
  }
  &__text {
    text-transform: uppercase;
    letter-spacing: -4px;
    font-weight: 700;
    font-size: 2.2rem;
  }
  &__image-bag,
  &__image-compare {
    width: 30px;
    height: 30px;
    transition: 0.2s;
    &:hover {
      transform: scale(110%);
    }
  }
  &__image-compare {
    margin-top: 10px;
  }
  &__icon-bag,
  &__icon-compare {
    display: flex;
    align-items: center;
    position: relative;
  }
  &__icon-compare {
    margin-left: 10px;
  }
  &__qty {
    font-size: 0.7rem;
    // margin-left: 5px;
    // padding: 5px;
    position: absolute;
    top: 15%;
    left: -15%;
    background-color: rgb(231, 61, 61);
    width: 17px;
    height: 17px;
    text-align: center;
    border-radius: 50%;
    color: white;
  }
  &__btn-bag,
  &__btn-compare {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: black;
  }
}
</style>
