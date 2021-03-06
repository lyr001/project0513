import {
  Box,
  Cone,
  Cylinder,
  Ellipsoid,
  EllipticalTube,
  Hexagone,
  Shape,
  Sphere,
  Tessellated,
  TetMeshBox,
  TRPD,
  Value, Vec3,
  Wedge
} from './basic_class';

export class SourceSub {
  type: string;
  content: Source | VoxelizedSource;

  constructor() {
    this.type = 'undefined';
    this.content = undefined;
  }

  input_type(key: string) {
    switch (key) {
      case 'type': return {type: this.type, subclass: ['Source', 'VoxelizedSource']}; break;
      case 'content': switch (this.type) {
        case 'Source': return 'Source'; break;
        case 'VoxelizedSource': return 'VoxelizedSource'; break;
        default: return 'undefined';
      } break;
    }
  }

  choose_subclass() {
    switch (this.type) {
      case 'Source': this.content = new Source(); break;
      case 'VoxelizedSource': this.content = new VoxelizedSource(); break;
      default: this.type = 'undefined'; this.content = undefined;
    }
  }
}
////////////////////////////////////////////////////////////////////////////////////////////
export class Source {
  name: string;
  activity: Value;
  type: string;
  centre: Vec3;
  particle: string;
  energytype: string;
  monoenergy: Value;
  gps_type: string;
  shape: string;
  radius: Value;
  halfz: Value;
  angtype: string;
  mintheta: Value;
  maxtheta: Value;
  minphi: Value;
  maxphi: Value;

  constructor() {
    this.name = '';
    this.activity = new Value();
    this.type = '';
    this.centre = new Vec3();
    this.particle = '';
    this.energytype = '';
    this.monoenergy = new Value();
    this.gps_type = '';
    this.shape = '';
    this.radius = new Value();
    this.halfz = new Value();
    this.angtype = '';
    this.mintheta = new Value();
    this.maxtheta = new Value();
    this.minphi = new Value();
    this.maxphi = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'name': return 'string'; break;
      case 'activity': return 'Value'; break;
      case 'type': return 'string'; break;
      case 'centre': return 'Vec3'; break;
      case 'particle': return 'string'; break;
      case 'energytype': return 'string'; break;
      case 'monoenergy': return 'Value'; break;
      case 'gps_type': return 'string'; break;
      case 'shape': return 'string'; break;
      case 'radius': return 'Value'; break;
      case 'halfz': return 'Value'; break;
      case 'angtype': return 'string'; break;
      case 'mintheta': return 'Value'; break;
      case 'maxtheta': return 'Value'; break;
      case 'minphi': return 'Value'; break;
      case 'maxphi': return 'Value'; break;
    }
  }
}
////////////////////////////////////////////////////////////////////////////////////////////
export class VoxelizedSource {
  name: string;
  insert_reader: string;
  insert_translator: TranslatorSub;
  read_file: string;
  verbose: boolean;
  position: Vec3;
  dump: boolean;
  type: string;
  particle: string;
  energy_type: string;
  monoenergy: Value;
  angtype: string;
  mintheta: Value;
  maxtheta: Value;
  minphi: Value;
  maxphi: Value;
  confine: string;
  forced_unstable_flag: boolean;
  forced_half_life: Value;

  constructor() {
    this.name = '';
    this.insert_reader = '';
    this.insert_translator = new TranslatorSub();
    this.read_file = '';
    this.verbose = false;
    this.position = new Vec3();
    this.dump = false;
    this.type = '';
    this.particle = '';
    this.energy_type = '';
    this.monoenergy = new Value();
    this.angtype = '';
    this.mintheta = new Value();
    this.maxtheta = new Value();
    this.minphi = new Value();
    this.maxphi = new Value();
    this.confine = '';
    this.forced_unstable_flag = false;
    this.forced_half_life = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'name': return 'string'; break;
      case 'insert_reader': return 'string'; break;
      case 'insert_translator': return 'TranslatorSub'; break;
      case 'read_file': return 'string'; break;
      case 'verbose': return 'boolean'; break;
      case 'position': return 'Vec3'; break;
      case 'dump': return 'boolean'; break;
      case 'type': return 'string'; break;
      case 'particle': return 'string'; break;
      case 'energy_type': return 'string'; break;
      case 'monoenergy': return 'Value'; break;
      case 'angtype': return 'string'; break;
      case 'mintheta': return 'Value'; break;
      case 'maxtheta': return 'Value'; break;
      case 'minphi': return 'Value'; break;
      case 'maxphi': return 'Value'; break;
      case 'confine': return 'string'; break;
      case 'forced_unstable_flag': return 'boolean'; break;
      case 'forced_half_life': return 'Value'; break;
    }
  }
}
////////////////////////////////////////////////////////////////////////////////////////////
export class Translator {
  insert: boolean;

  constructor() {
    this.insert = false;
  }
}

export class LinearTranslator extends Translator {
  scale: boolean;

  constructor() {
    super();
    this.scale = false;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'scale': return 'boolean'; break;
    }
  }
}

export class RangeTranslator extends Translator {
  read_table: string;
  describe: boolean;

  constructor() {
    super();
    this.read_table = '';
    this.describe = false;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'read_table': return 'string'; break;
      case 'describe': return 'boolean'; break;
    }
  }
}
////////////////////////////////////////////////////////////////////////////////////////////
export class TranslatorSub {
  type: string;
  content: Translator;

  constructor() {
    this.type = 'undefined';
    this.content = undefined;
  }

  input_type(key: string) {
    switch (key) {
      case 'type': return {type: this.type, subclass: ['LinearTranslator', 'RangeTranslator',
          'Cylinder', 'Cone', 'Ellipsoid', 'EllipticalTube', 'Tessellated',
          'TetMeshBox', 'TRPD', 'Hexagone', 'Wedge']}; break;
      case 'content': switch (this.type) {
        case 'LinearTranslator': return 'LinearTranslator'; break;
        case 'RangeTranslator': return 'RangeTranslator'; break;
        default: return 'undefined';
      } break;
    }
  }

  choose_subclass() {
    switch (this.type) {
      case 'LinearTranslator': this.content = new LinearTranslator(); break;
      case 'RangeTranslator': this.content = new RangeTranslator(); break;
      default: this.type = 'undefined'; this.content = undefined;
    }
  }
}
