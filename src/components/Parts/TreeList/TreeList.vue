<template>
  <ul class="treelist">
    <li class="treelist__parenttitle">
      {{ props.Parent.name }}
      <ul class="treelsit__list">
        <li
          v-for="item in treeChilds"
          :key="item.order"
          class="treelist__listitem"
        >
          <base-image-medium :src="item.url" />
          {{ item.name }}
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
