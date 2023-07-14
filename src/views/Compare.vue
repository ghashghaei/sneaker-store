<template>
  <div class="compare-wrapper">
    <div class="compare">
      <div v-if="isCompareEmpty" class="compare__no-items">
        <p class="compare__empty-text">Cart is empty :(</p>
        <router-link to="/products">Go back to shop</router-link>
      </div>
      <base-card>
        <compare-list></compare-list>
      </base-card>
    </div>
  </div>
</template>

<script>
import CompareList from "../components/CompareList.vue";

export default {
  components: {
    CompareList,
  },
  computed: {
    isCompareEmpty() {
      return this.$store.getters.getProductsCart.length === 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.compare-wrapper {
  background-color: #f4f4f4;
  min-height: 95vh;
}
.compare {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 50px;
  &__sum-up {
    min-width: 360px;
    flex-basis: 30vw;
    margin-bottom: 40px;
    max-width: 600px;
  }
  &__no-items {
    text-align: center;
  }
  &__empty-text {
    font-size: 1.2rem;
    padding: 30px;
  }
  a {
    text-decoration: none;
    padding: 10px;
    font-size: 0.9rem;
    color: #60b7f5;
    transition: 0.3s;
    &:hover {
      color: #2b9ff1;
    }
  }
}
</style>
