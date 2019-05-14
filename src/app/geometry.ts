import {VariableArr, Volume, VoxelizedPhantom} from './basic_class';

export class Geometry {
  world: Volume;              // shape 为 box
  scanner: SystemSub;
  phantom: PhantomSub;

  constructor() {
    this.world = new Volume();
    this.scanner = new SystemSub();
    this.phantom = new PhantomSub();
  }

  input_type(key: string) {
    switch (key) {
      case 'world': return 'Volume'; break;
      case 'scanner': return 'SystemSub'; break;
      case 'phantom': return 'PhantomSub'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////
export class PhantomSub {
  type: string;
  content: System;

  constructor() {
    this.type = 'undefined';
    this.content = undefined;
  }

  input_type(key: string) {
    switch (key) {
      case 'type': return {type: this.type, subclass: ['Scanner', 'CTscanner',
          'CylindricalPET', 'CPET', 'ECAT', 'ECATAccel', 'OPET', 'SPECThead']}; break;
      case 'content': return this.type; break;
    }
  }

  choose_subclass() {
    switch (this.type) {
      case 'Scanner': this.content = new Scanner(); break;
      case 'CTscanner': this.content = new CTscanner(); break;
      case 'CylindricalPET': this.content = new CylindricalPET(); break;
      case 'CPET': this.content = new CPET(); break;
      case 'ECAT': this.content = new ECAT(); break;
      case 'ECATAccel': this.content = new ECATAccel(); break;
      case 'OPET': this.content = new OPET(); break;
      case 'SPECThead': this.content = new SPECThead(); break;
      default: this.type = 'undefined'; this.content = undefined;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////
export class SystemSub {
  type: string;
  content: Volume | VoxelizedPhantom;

  constructor() {
    this.type = 'undefined';
    this.content = undefined;
  }

  input_type(key: string) {
    switch (key) {
      case 'type': return {type: this.type, subclass: ['Volume', 'VoxelizedPhantom']}; break;
      case 'content': return this.type; break;
    }
  }

  choose_subclass() {
    switch (this.type) {
      case 'Volume': this.content = new Volume(); break;
      case 'VoxelizedPhantom': this.content = new VoxelizedPhantom(); break;
      default: this.type = 'undefined'; this.content = undefined;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////
export class System {
  base: Volume;

  constructor() {
    this.base = new Volume();
  }
}

export class Scanner extends System {
  level1: Volume;
  level2: Volume;
  level3: Volume;
  level4: Volume;
  level5: Volume;

  constructor() {
    super();
    this.level1 = new Volume();
    this.level2 = new Volume();
    this.level3 = new Volume();
    this.level4 = new Volume();
    this.level5 = new Volume();
  }

  input_type(key: string) {
    switch (key) {
      case 'base': return 'Volume'; break;
      case 'level1': return 'Volume'; break;
      case 'level2': return 'Volume'; break;
      case 'level3': return 'Volume'; break;
      case 'level4': return 'Volume'; break;
      case 'level5': return 'Volume'; break;
    }
  }
}

export class CTscanner extends System {
  module: Volume;
  cluster: VariableArr;         // max3
  pixel: VariableArr;           // max3

  constructor() {
    super();
    this.module = new Volume();
    this.cluster = new VariableArr('Volume');
    this.pixel = new VariableArr('number');
  }

  input_type(key: string) {
    switch (key) {
      case 'base': return 'Volume'; break;
      case 'module': return 'Volume'; break;
      case 'cluster': return 'VariableArr'; break;
      case 'pixel': return 'VariableArr'; break;
    }
  }
}

export class CylindricalPET extends System {
  rsector: Volume;
  module: Volume;
  submodule: Volume;
  crystal: Volume;
  layer: VariableArr;           // max4

  constructor() {
    super();
    this.rsector = new Volume();
    this.module = new Volume();
    this.submodule = new Volume();
    this.crystal = new Volume();
    this.layer = new VariableArr('Volume');
  }

  input_type(key: string) {
    switch (key) {
      case 'base': return 'Volume'; break;
      case 'rsector': return 'Volume'; break;
      case 'module': return 'Volume'; break;
      case 'submodule': return 'Volume'; break;
      case 'crystal': return 'Volume'; break;
      case 'layer': return 'VariableArr'; break;
    }
  }
}

export class CPET extends System {
  sector: Volume;
  cassette: Volume;
  module: Volume;
  crystal: Volume;
  layer: VariableArr;          // max4

  constructor() {
    super();
    this.sector = new Volume();
    this.cassette = new Volume();
    this.module = new Volume();
    this.crystal = new Volume();
    this.layer = new VariableArr('Volume');
  }

  input_type(key: string) {
    switch (key) {
      case 'base': return 'Volume'; break;
      case 'sector': return 'Volume'; break;
      case 'cassette': return 'Volume'; break;
      case 'module': return 'Volume'; break;
      case 'crystal': return 'Volume'; break;
      case 'layer': return 'VariableArr'; break;
    }
  }
}

export class ECAT extends System {
  block: Volume;
  crystal: Volume;

  constructor() {
    super();
    this.block = new Volume();
    this.crystal = new Volume();
  }

  input_type(key: string) {
    switch (key) {
      case 'base': return 'Volume'; break;
      case 'block': return 'Volume'; break;
      case 'crystal': return 'Volume'; break;
    }
  }
}

export class ECATAccel extends System {
  block: Volume;
  crystal: Volume;

  constructor() {
    super();
    this.block = new Volume();
    this.crystal = new Volume();
  }

  input_type(key: string) {
    switch (key) {
      case 'base': return 'Volume'; break;
      case 'block': return 'Volume'; break;
      case 'crystal': return 'Volume'; break;
    }
  }
}

export class OPET extends System {
  rsector: Volume;
  module: Volume;
  submodule: Volume;
  crystal: Volume;
  layer: VariableArr;            // max8

  constructor() {
    super();
    this.rsector = new Volume();
    this.module = new Volume();
    this.submodule = new Volume();
    this.crystal = new Volume();
    this.layer = new VariableArr('Volume');
  }

  input_type(key: string) {
    switch (key) {
      case 'base': return 'Volume'; break;
      case 'rsector': return 'Volume'; break;
      case 'module': return 'Volume'; break;
      case 'submodule': return 'Volume'; break;
      case 'crystal': return 'Volume'; break;
      case 'layer': return 'VariableArr'; break;
    }
  }
}

export class SPECThead extends System {
  crystal: Volume;
  pixel: Volume;

  constructor() {
    super();
    this.crystal = new Volume();
    this.pixel = new Volume();
  }

  input_type(key: string) {
    switch (key) {
      case 'base': return 'Volume'; break;
      case 'crystal': return 'Volume'; break;
      case 'pixel': return 'Volume'; break;
    }
  }
}
