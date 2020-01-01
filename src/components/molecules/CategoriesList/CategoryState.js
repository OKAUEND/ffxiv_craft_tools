export class IconState {
  constructor(value) {
    this.ID = value.ID;
    this.type = value.type;
    this.name = value.name;
    this.code = value.code;
    this.image = value.image;
  }
  static create(category) {
    return new IconState(category);
  }

  get isIcon() {
    return true;
  }

  get formID() {
    return this.type + this.ID;
  }

  get Name() {
    return this.name;
  }

  get fromSelectedData() {
    return {
      name: this.name,
      Iconcode: this.code
    };
  }

  LabelStyle(value) {
    return {
      "category-area__image": true,
      "Radio__Icon--checkmark": this.name === value
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

  get fromSelectedData() {
    return {
      name: this.name,
      JobName: this.name,
      JobCode: this.code
    };
  }
}

export class StringState {
  constructor(value) {
    this.ID = value.ID;
    this.code = value.code;
    this.name = value.name;
    this.type = value.type;
  }
  static create(category) {
    return new StringState(category);
  }

  get formID() {
    return this.type + this.ID;
  }

  get isIcon() {
    return this.type === "Icon";
  }

  get Name() {
    return this.name;
  }

  LabelStyle(value) {
    const LevelID = this.type + this.ID;
    return {
      "category-area__Normal": true,
      "Radio__Normal--checkmark": LevelID === value
    };
  }

  get fromSelectedData() {
    return {
      name: this.name,
      code: this.code
    };
  }

  get Label() {
    return this.name;
  }
}

export class LevelState extends StringState {
  constructor(value) {
    super(value);
    this.lowerLevel = value.lowerLevel ? value.lowerLevel : 0;
    this.upperLevel = value.upperLevel ? value.upperLevel : 0;
    this.MasterBand = value.type === "Master" ? value.code : 0;
  }
  static create(category) {
    return new LevelState(category);
  }

  get Name() {
    return this.type + this.ID;
  }

  get Label() {
    if (this.type === "Level") {
      return this.lowerLevel + "~" + this.upperLevel;
    } else {
      return this.name;
    }
  }

  get fromSelectedData() {
    const LevelName = this.type + this.code;
    return {
      name: LevelName,
      Bandtype: this.type,
      lowerLevelBand: this.lowerLevel,
      upperLevelBand: this.upperLevel,
      MasterBand: this.MasterBand
    };
  }
}

export class ErrorState extends StringState {
  constructor() {
    super({
      ID: 1,
      code: 1,
      name: "Error",
      type: "Error"
    });
  }
  static create() {
    return new ErrorState();
  }
}
