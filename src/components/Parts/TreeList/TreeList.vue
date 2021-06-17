<template>
  <ul class="treelist">
    <li class="treelist__parent">
      <div class="treelist__body">
        <img class="treelist__icon" />
        {{ props.Parent.name }}
        <div class="treelist__body--value">{{ props.Parent.value }}</div>
      </div>
      <ul class="treelsit__list">
        <li
          v-for="item in treeChilds"
          :key="item.order"
          class="treelist__list-item"
        >
          <div class="treelist__body">
            <base-image-medium :src="item.url" />
            {{ item.name }}
            <div class="treelist__body--value">{{ props.item.value }}</div>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style lang="scss" module>
.treelist {
  list-style: none;
  padding-left: 32px;

  .treelist__parent {
    position: relative;
    padding: 50px 0px 0px 35px;

    &:last-child:before {
      top: -22px;
      height: 90px;
    }

    & > .treelist_icon {
      &:before {
        height: 55px + 5;
        width: 55px + 5;
        top: -9.5px;
        background-color: #54a6d9;
        border: 7.5px solid #d5e9f6;
        font-size: 22px;
      }
    }

    > .treelist__body {
      width: 400px;
    }
  }
  .treelsit__list {
    display: flex;
    flex-direction: column;
    .treelist__list-item {
      position: relative;
      padding: 10px 0px 0px 35px;

      > .treelist__body {
        width: calc(400px - (45px + 30px));
      }

      &:before {
        content: "";
        position: absolute;
        top: -26px;
        left: -40px;
        border-left: 2px solid #a2a5b5;
        width: 1px;
        height: 100%;
      }

      &:after {
        content: "";
        position: absolute;
        border-top: 2px solid #a2a5b5;
        top: 34px;
        left: -40px;
        width: 65px;
      }

      &:last-child:before {
        top: -29px;
        height: 65px;
      }
    }
  }

  .treelist__icon {
    content: attr(data-level);
    position: absolute;
    left: -(55px / 2);
    top: -6.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    width: 55px;
    border-radius: 10%;
    border: 5.5px solid #eef6d5;
    background-color: #bada55;
    color: #fff;
    font-size: 20px;
  }

  .treelist__body {
    height: 45px;
    width: 300px;
    padding: 10px;
    padding-left: 5px;
    display: inline-block;
    border-radius: 5px;
    font-weight: 700;
    border: 1px solid #e3e5ef;
    position: relative;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .treelist__body--value {
    display: inline-block;
    right: 0px;
  }
}
</style>
