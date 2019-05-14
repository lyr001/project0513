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
  Value, VariableArr,
  Wedge
} from './basic_class';

export class Acquisition {
  total_number_of_primaries: number;
  number_of_primaries_perrun: number;
  time_slice: TimeSliceSub;     // Value[] | string
  time_start: Value;
  time_stop: Value;
  engine_seed: EngineSeedSub;
  engine_name: string;
  verbose: number;

  constructor() {
    this.total_number_of_primaries = null;
    this.number_of_primaries_perrun = null;
    this.time_slice = new TimeSliceSub();
    this.time_start = new Value();
    this.time_stop = new Value();
    this.engine_seed = new EngineSeedSub();
    this.engine_name = '';
    this.verbose = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'total_number_of_primaries': return 'number'; break;
      case 'number_of_primaries_perrun': return 'number'; break;
      case 'time_slice': return 'TimeSliceSub'; break;
      case 'time_start': return 'Value'; break;
      case 'time_stop': return 'Value'; break;
      case 'engine_seed': return 'EngineSeedSub'; break;
      case 'engine_name': return 'string'; break;
      case 'verbose': return 'number'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////
export class TimeSliceSub {
  type: string;
  content: VariableArr | string;

  constructor() {
    this.type = 'undefined';
    this.content = undefined;
  }

  input_type(key: string) {
    switch (key) {
      case 'type': return {type: this.type, subclass: ['Value[]', 'string']}; break;
      case 'content': switch (this.type) {
        case 'Value[]': return 'VariableArr'; break;
        case 'string': return 'string'; break;
        default: return 'undefined';
      } break;
    }
  }

  choose_subclass() {
    switch (this.type) {
      case 'Value[]': this.content = new VariableArr('Value'); break;
      case 'string': this.content = ''; break;
      default: this.type = 'undefined'; this.content = undefined;
    }
  }
}
/////////////////////////////////////////////////////////////////
export class EngineSeedSub {
  type: string;
  content: number | string;

  constructor() {
    this.type = 'undefined';
    this.content = undefined;
  }

  input_type(key: string) {
    switch (key) {
      case 'type': return {type: this.type, subclass: ['number', 'string']}; break;
      case 'content': switch (this.type) {
        case 'number': return 'number'; break;
        case 'string': return 'string'; break;
        default: return 'undefined';
      } break;
    }
  }

  choose_subclass() {
    switch (this.type) {
      case 'number': this.content = null; break;
      case 'string': this.content = ''; break;
      default: this.type = 'undefined'; this.content = undefined;
    }
  }
}
/////////////////////////////////////////////////////////////////
export class MaterialDatabase {
  path: string;

  constructor() {
    this.path = '';
  }

  input_type(key: string) {
    switch (key) {
      case 'path': return 'string'; break;
    }
  }
}
