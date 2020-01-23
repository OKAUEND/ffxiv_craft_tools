<template>
  <div class="CartItems">
    <div class="CartItems__Icon">
      <atom-list-icon />
    </div>
    <span class="CartItems__Value --green">5</span>
  </div>
</template>

<script>
import AtomListIcon from "@/components/atoms/Icon/ListALL.vue";
export default {
  name: "CartItems",
  components: {
    AtomListIcon
  }
};
</script>

<style lang="scss" scoped>
.CartItems {
  width: 35px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and(min-width: 481px) {
    width: 50px;
    padding: 4px;
    border-radius: 5px;
  }

  &__Icon {
    width: 25px;
    height: 35px;
    @media screen and (min-width: 481px) {
      width: 25px;
      height: 30px;
    }
  }

  &__Value {
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    font-size: 14px;
    right: 0;
    bottom: -5px;
    line-height: 15px;
    text-align: center;
    border: solid 2px #333333;
    font-weight: 800;

    @media screen and (min-width: 481px) {
      width: 20px;
      height: 20px;
      line-height: 21px;
      bottom: -3px;
    }

    &.--red {
      background-color: #fa514b;
      color: #fffffe;
    }

    &.--green {
      background-color: #17bf63;
      color: #fffffe;
    }

    &.--yellow {
      background-color: #fada4b;
      color: #242424;
    }
  }
}
</style>
