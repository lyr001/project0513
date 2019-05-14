import {Value, VariableArr, Vec3} from './basic_class';

export class Physics {
  physics_list: string;
  cut_in_world: CutInRegion;
  cut_in_patient: CutInRegion;
  activate_step_limiter: string;
  process: VariableArr;
  mag_field: Vec3;

  constructor() {
    this.physics_list = '';
    this.cut_in_world = new CutInRegion();
    this.cut_in_patient = new CutInRegion();
    this.activate_step_limiter = '';
    this.process = new VariableArr('Process');
    this.mag_field = new Vec3();
  }

  input_type(key: string) {
    switch (key) {
      case 'physics_list': return 'string'; break;
      case 'cut_in_world': return 'CutInRegion'; break;
      case 'cut_in_patient': return 'CutInRegion'; break;
      case 'activate_step_limiter': return 'string'; break;
      case 'process': return 'VariableArr'; break;
      case 'mag_field': return 'Vec3'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////
export class CutInRegion {
  gamma: Value;
  electron: Value;
  positron: Value;
  proton: Value;
  max_step: Value;

  constructor() {
    this.gamma = new Value();
    this.electron = new Value();
    this.positron = new Value();
    this.proton = new Value();
    this.max_step = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'gamma': return 'Value'; break;
      case 'electron': return 'Value'; break;
      case 'positron': return 'Value'; break;
      case 'proton': return 'Value'; break;
      case 'max_step': return 'Value'; break;
    }
  }
}
///////////////////////////////////////////////////////////////////////////////////
export class Process {
  add: boolean;
  process_name: string;
  particle: string;
  model: Model;

  constructor() {
    this.add = false;
    this.process_name = '';
    this.particle = '';
    this.model = new Model();
  }

  input_type(key: string) {
    switch (key) {
      case 'add': return 'boolean'; break;
      case 'process_name': return 'string'; break;
      case 'particle': return 'string'; break;
      case 'model': return 'Model'; break;
    }
  }
}
////////////////////////////////////////////////////////////////////////////
export class Model {
  set: boolean;
  model_name: string;
  particle: string;
  energy_range: boolean;
  e_max: SetE;
  e_min: SetE;

  constructor() {
    this.set = false;
    this.model_name = '';
    this.particle = '';
    this.energy_range = false;
    this.e_max = new SetE();
    this.e_min = new SetE();
  }

  input_type(key: string) {
    switch (key) {
      case 'set': return 'boolean'; break;
      case 'model_name': return 'string'; break;
      case 'particle': return 'string'; break;
      case 'energy_range': return 'boolean'; break;
      case 'e_max': return 'SetE'; break;
      case 'e_min': return 'SetE'; break;
    }
  }
}
//////////////////////////////////////////////////////////////////////////////
export class SetE {
  value: Value;
  particle: string;
  option: string;

  constructor() {
    this.value = new Value();
    this.particle = '';
    this.option = '';
  }

  input_type(key: string) {
    switch (key) {
      case 'value': return 'Value'; break;
      case 'particle': return 'string'; break;
      case 'option': return 'string'; break;
    }
  }
}
////////////////////////////////////////////////////////////////////////////////
export class Dataset {
  set: boolean;
  model_name: string;
  particle: string;
  target: SetDatasetObjects[];
}
////////////////////////////////////////////////////////////////////////////
export type SetDatasetObjects = Process | Dataset;
