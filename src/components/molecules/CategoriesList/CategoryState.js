class Category {
  constructor(value) {
    this.category = value;
  }
}

export class IconState extends Category {
  static create(value) {
    return new IconState(value);
  }

  get Label() {
    return this.category.Image;
  }
}

export class StringState extends Category {
  static create(value) {
    return new StringState(value);
}

  get Label() {
    return this.category.name;
  }
}

export class LevelState extends Category {
  static create(value) {
    return new LevelState(value);
  }

  get Label() {
    super();
    return this.category.lowerLevel + "~" + this.category.upperLevel;
  }
}
