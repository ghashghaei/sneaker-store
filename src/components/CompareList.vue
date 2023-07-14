<template>
  <div class="compare__list">
    <transition-group name="compare-element">
      <compare-item
        v-for="cardProd in compareProducts"
        :key="cardProd.name"
        :id="cardProd.id"
        :name="cardProd.name"
        :cw="cardProd.color_way"
        :image="cardProd.image"
        :lightness="cardProd.lightness"
        :cushioning="cardProd.cushioning"
        :flexibility="cardProd.flexibility"
        :responsive="cardProd.responsive"
        :stability="cardProd.stability"
        :grip="cardProd.grip"
        :average="cardProd.average"
      ></compare-item>
    </transition-group>
  </div>
</template>

<script>
import CompareItem from "./CompareItem.vue";
export default {
  components: {
    CompareItem,
  },
  computed: {
    compareProducts() {
      return this.$store.getters.getProductsCompare;
    },
  },
};
</script>

<style lang="scss" scoped>
.compare {
  &__list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
  }
}
.compare-element {
  &-enter-from {
    transform: translateX(-100%);
  }
  &-enter-active {
    transition: 0.2s;
  }
  &-enter-to {
    transform: translateX(0);
  }
  &-leave-from {
    transform: translateX(0);
  }
  &-leave-active {
    transition: 0.2s;
  }
  &-leave-to {
    transform: translateX(100%);
  }
  &-move {
    transition: transform 0.5s;
  }
}

@media (max-width: 540px) {
  .compare{
    &__list {
      flex-direction: column;
    }
  }
}
</style>
