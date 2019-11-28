export const Store = {
  state: {
    SelectedValue: ""
  },
  storeRadioSelectValue(value) {
    this.state.SelectedValue = value;
  },
  loadSelectValue() {
    return this.state.SelectedValue;
  }
};
