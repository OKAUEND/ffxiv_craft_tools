export class RecipeState {
  constructor(value) {
    this.ID = value.ID;
    this.code = value.code;
    this.name = value.name;
    this.type = value.type;
    this.Count = 1;
  }
  static create(category) {
    return new RecipeState(category);
  }

  get Name() {
    return this.name;
  }

  LabelStyle() {}

  get RecipeDetail() {
    return {};
  }

  get ProductCount() {
    return this.Count;
  }

  get Label() {
    return this.name;
  }

  Increment() {
    this.Count += 1;
  }
}
