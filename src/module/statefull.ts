import { readonly, Ref, ref } from "vue";

const changeCount = (count: Ref<number>) => (value: number) => {
  count.value = value;
};

export const useCount = () => {
  const count = ref<number>(1);
  return { count: readonly(count), changeCount: changeCount(count) };
};

const progress = ref<number>(0);
const onceValue = ref<number>(0);

const forwardProgress = (
  progress: Ref<number>,
  onceValue: Ref<number>
) => () => {
  progress.value = progress.value + onceValue.value;
};

const calculateOnceProgressValue = (logCount: number) => {
  onceValue.value = PROGRESSVALUE_IN_DATA_REQUEST / logCount;
};

export const useProgress = () => {
  return {
    progress: readonly(progress),
    onceValue: readonly(onceValue),
    forwardProgress: forwardProgress(progress, onceValue),
    calculateOnceProgressValue: calculateOnceProgressValue,
  };
};
