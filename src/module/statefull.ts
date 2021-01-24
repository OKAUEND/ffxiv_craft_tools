import { readonly, Ref, ref } from "vue";

const count = ref<number>(1);

const changeCount = (count: Ref<number>) => (value: number) => {
  count.value = value;
};

export const useCount = () => {
  return { count: readonly(count), changeCount: changeCount(count) };
};
