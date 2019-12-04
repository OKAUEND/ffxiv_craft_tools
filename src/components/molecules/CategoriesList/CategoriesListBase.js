export default {
  props: {
    category: {
      type: Object,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    emitMethod(value) {
      return this.$emit("change", value);
    }
  }
};
