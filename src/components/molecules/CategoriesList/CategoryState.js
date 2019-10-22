class Category {
  constructor(value) {
    this.ID = value.ID;
    this.name = value.name;
    this.type = value.type;
  }
}

export class IconState extends Category {
  static create(value) {
    return new IconState(value);
  }

  constructor(value) {
    super(value);
    this.Image = value.Image;
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

  constructor(value) {
    super(value);
    this.lowerLevel = value.lowerLevel;
    this.upperLevel = value.upperLevel;
  }

  get Label() {
    super();
    return this.category.lowerLevel + "~" + this.category.upperLevel;
  }
}
