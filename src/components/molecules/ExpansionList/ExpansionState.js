class Expansion {
  constructor(value) {
    this.name = value.name;
    this.type = value.type;
    this.version = value.version;
    this.ExpansionCode = `${value.type}${value.version}`;
  }

  get Name() {
    return `${this.type}${this.version}`;
  }

  get IsIcon() {
    return false;
  }

  get Label() {
    return this.name;
  }

  get formID() {
    return this.ExpansionCode;
  }

  get fromSelectedData() {
    return {
      ExpansionCode: this.ExpansionCode,
      version: this.version
    };
  }
}

export class ARealReborn extends Expansion {
  static create(value) {
    return new ARealReborn(value);
  }

  LabelStyle(value) {
    return {
      Expansion_area: true,
      "Expansion_radio--checkmark": this.ExpansionCode === value,
      _AAR: true
    };
  }
}

export class Heavensward extends Expansion {
  static create(value) {
    return new Heavensward(value);
  }

  LabelStyle(value) {
    return {
      Expansion_area: true,
      _HEV: true,
      "Expansion_radio--checkmark": this.ExpansionCode === value
    };
  }
}

export class Stormblood extends Expansion {
  static create(value) {
    return new Stormblood(value);
  }

  LabelStyle(value) {
    return {
      Expansion_area: true,
      _STB: true,
      "Expansion_radio--checkmark": this.ExpansionCode === value
    };
  }
}

export class Shadowbringers extends Expansion {
  static create(value) {
    return new Shadowbringers(value);
  }

  LabelStyle(value) {
    return {
      Expansion_area: true,
      _SHB: true,
      "Expansion_radio--checkmark": this.ExpansionCode === value
    };
  }
}

export class ErrorExpansion extends Expansion {
  constructor() {
    super({
      ID: 1,
      version: 99,
      name: "Error",
      type: "Error"
    });
  }
  static create() {
    return new ErrorExpansion();
  }

  LabelStyle(value) {
    return {
      Expansion_area: true,
      "Expansion_radio--checkmark": this.ExpansionCode === value,
      _ERR: true
    };
  }
}
