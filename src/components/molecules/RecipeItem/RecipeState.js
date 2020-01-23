export class RecipeState {
  constructor(value) {
    this.ID = value.ID;
    this.job = value.job;
    this.name = value.name;
    this.icon = value.icon;
    this.type = value.type;
    this.childs = value.childs.map(element => {
      return RecipeChild.create(element);
    });
  }
  static create(category) {
    return new RecipeState(category);
  }

  get Name() {
    return this.name;
  }

  get createRecipeObject() {
    return {
      ID: this.ID,
      name: this.name
    };
  }

  get Label() {
    return this.name;
  }

  get ChildList() {
    return this.childs;
  }
}

class RecipeChild {
  constructor(ChildRecipe) {
    this.ID = ChildRecipe.ID;
    this.icon = ChildRecipe.icon;
    this.MaterialValue = ChildRecipe.value;
  }

  static create(category) {
    return new RecipeChild(category);
  }

  get ImagePath() {
    return this.icon;
  }

  get fromRequiredMaterialValue() {
    return `×${this.MaterialValue}`;
  }
}
