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

<style lang="scss" scoped></style>
