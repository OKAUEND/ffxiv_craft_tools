export default {
  props: {
    Categories: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      SelectRadioValue: "",
      isLabelClick: false
    };
  },
  computed: {
    isOpen() {
      return {
        "--Opend": this.isLabelClick
      };
    }
  },
  methods: {
    onExpasionButtomClick(value) {
      this.SelectedValue = value;
      return this.$emit("change", value);
    },
    switchLabelClicked() {
      this.isLabelClick = !this.isLabelClick;
    }
  }
};
