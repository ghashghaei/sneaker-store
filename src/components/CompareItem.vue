<template>
  <div class="compare-item-parent">
    <div class="compare-item">
      <div class="compare-item__shoe-photo">
        <img class="compare-item__img" :src="image" :alt="name"/>
      </div>

      <div class="compare-item__brand-container">
        <div class="compare-item__brand">{{ name }}</div>

        <div class="compare-item__delete">
          <button class="compare-item__delete-btn" @click="deleteItem">
            <img
                class="compare-item__delete-img"
                src="../assets/trash-icon.svg"
                alt="delete"
            />
          </button>
        </div>
      </div>

      <div class="compare-item__container">
        <div class="compare-item__total-rate">{{ average }}</div>
      </div>

      <div class="compare-item__container">
        <div class="compare-item__caption">Lightness</div>
        <div class="compare-item__rate">{{ lightness }}</div>
        <progress class="compare-item__pbar" :value="lightness" max="10"></progress>
      </div>

      <div class="compare-item__container">
        <div class="compare-item__caption">Cushioning</div>
        <div class="compare-item__rate">{{ cushioning }}</div>
        <progress class="compare-item__pbar" :value="cushioning" max="10"></progress>
      </div>

      <div class="compare-item__container">
        <div class="compare-item__caption">Flexibility</div>
        <div class="compare-item__rate">{{ flexibility }}</div>
        <progress class="compare-item__pbar" :value="flexibility" max="10"></progress>
      </div>

      <div class="compare-item__container">
        <div class="compare-item__caption">Responsive</div>
        <div class="compare-item__rate">{{ responsive }}</div>
        <progress class="compare-item__pbar" :value="responsive" max="10"></progress>
      </div>

      <div class="compare-item__container">
        <div class="compare-item__caption">Stability</div>
        <div class="compare-item__rate">{{ stability }}</div>
        <progress class="compare-item__pbar" :value="stability" max="10"></progress>
      </div>

      <div class="compare-item__container">
        <div class="compare-item__caption">Grip</div>
        <div class="compare-item__rate">{{ grip }}</div>
        <progress class="compare-item__pbar" :value="grip" max="10"></progress>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
    cw: String,
    image: String,
    lightness: Number,
    cushioning: Number,
    flexibility: Number,
    responsive: Number,
    stability: Number,
    grip: Number,
    average: Number,
  },
  data() {
    return {
      isCreated: false,
    };
  },
  methods: {
    deleteItem() {
      this.$store.dispatch("deleteFromCompare", {id: this.id});
    },
  },
};
</script>

<style lang="scss" scoped>
.compare-item-parent {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc!important;
  margin: 10px;
  border-radius: 10px;
}

.compare-item {
  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 0;
  }

  &__brand-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0;
  }

  &__caption {
    width: 100px;
  }

  &__rate {
    width: 20px;
    font-weight: bold;
  }

  &__total-rate {
    width: 35px;
    height: 35px;
    background-color: #4ab155;
    border-radius: 5px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: white;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  &__pbar {
    width: 90px;
  }

  &__shoe-photo {
    text-align: center;
  }

  &__img {
    width: 150px;
  }

  &__delete-btn {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  &__delete-img {
    width: 20px;
  }

  &__brand {
    font-size: 1em;
    font-weight: bold;
  }

  &__delete {
    display: flex;
    flex-direction: row;
    justify-content: end;
  }
}
</style>
