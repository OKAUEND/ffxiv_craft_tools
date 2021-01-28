import { readonly, Ref, ref } from "vue";

const changeCount = (count: Ref<number>) => (value: number) => {
  count.value = value;
};

export const useCount = () => {
  const count = ref<number>(1);
  return { count: readonly(count), changeCount: changeCount(count) };
};
