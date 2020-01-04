<script>
export default {
  props: {
    value: {
      type: [String, Number, Object],
      required: true
    }
  },
  computed: {
    propsValue: {
      get() {
        return this.value;
      },
      set(value) {
        return this.$emit("input", value);
      }
    }
  }
};
</script>
