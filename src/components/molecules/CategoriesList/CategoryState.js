export class IconState {
  constructor(value) {
    this.ID = value.ID;
    this.type = value.type;
    this.name = value.name;
    this.code = value.jobcode;
    this.image = value.image;
  }
  static create(category) {
    return new IconState(category);
  }

  get isIcon() {
    return this.type === "Icon";
  }

  get formID() {
    return this.type + this.ID;
  }

  get fromSelectedData() {
    return {
      name: this.name,
      job: this.name
    };
  }

  LabelStyle(value) {
    return {
      "category-area-image": true,
      "Icon-radio-checkmark": this.name === value
    };
}
}

export class JobState extends IconState {
  static create(category) {
    return new JobState(category);
  }

  get Label() {
    return "static/CRAFTER/" + this.image;
  }
}

export class StringState {
  constructor(value) {
    this.ID = value.ID;
    this.name = value.name;
    this.type = value.type;
  }
  static create(category) {
    return new StringState(category);
  }

  get Style() {
    return {
      category_area_default: true,
      category_default_buttom: true
    };
  }

  get Label() {
    return this.name;
  }
}

export class LevelState {
  constructor(value) {
    this.ID = value.ID;
    this.type = value.type;
    this.lowerLevel = value.lowerLevel;
    this.upperLevel = value.upperLevel;
  }
  static create(category) {
    return new LevelState(category);
  }

  get Style() {
    return {
      category_area_Level: true,
      category_default_buttom: true
    };
  }

  get isIcon() {
    return this.type === "Icon";
  }

  get formID() {
    return this.type + this.ID;
  }

  get Label() {
    return this.lowerLevel + "~" + this.upperLevel;
  }
}
