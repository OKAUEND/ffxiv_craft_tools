export default {
  data() {
    return {
      isClickble: false
    };
  },
  computed: {
    isClick() {
      return {
        "--Clickble": this.isClickble
      };
    }
  },
  methods: {
    onClick() {
      this.isClickble = !this.isClickble;
      return this.$emit("click");
    }
  }
};
