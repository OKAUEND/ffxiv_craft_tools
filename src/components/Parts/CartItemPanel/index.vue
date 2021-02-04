<template>
  <div class="cartitempanel">
    <div class="cartitempanel__leftside">
      <base-image-small
        :path="CartItem.log.imageurl"
        :comment="CartItem.log.text.name"
      />
    </div>
    <div class="cartitempanel__centerbody">
      <span>{{ CartItem.log.text.name }}</span>
      <span>{{ CartItem.value }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, SetupContext } from "vue";
import { StoreLog } from "@/@types/FFXIVLogTypes";

import BaseImageSmall from "@/components/Base/Image/BaseImageSmall.vue";

interface Props {
  item: StoreLog;
}

export default defineComponent({
  components: {
    BaseImageSmall,
  },
  props: {
    item: {
      type: Object as PropType<StoreLog>,
      required: true,
    },
  },
  setup(props: Props, contex: SetupContext) {
    const CartItem = computed(() => {
      console.log(props.item);
      return props.item;
    });

    return { CartItem };
  },
});
</script>

<style lang="scss" scoped></style>
