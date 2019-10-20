class Expansion {
  constructor(ExpansionName) {
    this.ExpansionName = ExpansionName;
  }

  get name() {
    return this.ExpansionName;
  }
}

export class ARealReborn extends Expansion {
  constructor(ExpansionName) {
    super(ExpansionName);
  }
  static create() {
    return new ARealReborn();
  }

  get style() {
    return {};
  }

  get name() {
    return super();
  }
}

export class Heavensward extends Expansion {
  constructor(ExpansionName) {
    super(ExpansionName);
  }
  static create() {
    return new Heavensward();
  }

  get style() {
    return {};
  }

  get name() {
    return super();
  }
}

export class Stormblood extends Expansion {
  constructor(ExpansionName) {
    super(ExpansionName);
  }
  static create() {
    return new Stormblood();
  }

  get style() {
    return {};
  }

  get name() {
    return super();
  }
}

export class Shadowbringers extends Expansion {
  constructor(ExpansionName) {
    super(ExpansionName);
  }
  static create() {
    return new Shadowbringers();
  }

  get style() {
    return {};
  }

  get name() {
    return super();
  }
}
