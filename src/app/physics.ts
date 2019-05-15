import {
  Box,
  Cone,
  Cylinder,
  Ellipsoid,
  EllipticalTube, Hexagone,
  Shape,
  Sphere, Tessellated, TetMeshBox, TRPD,
  Value,
  VariableArr,
  Vec3,
  Volume,
  VoxelizedPhantom, Wedge
} from './basic_class';
import {CubicArrayRepeater, GenericRepeater, LinearRepeater, QuadrantRepeater, RingRepeater, SphereRepeater} from './act';

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
  target: VariableArr;

  constructor() {
    this.set = false;
    this.model_name = '';
    this.particle = '';
    this.target = new VariableArr('SetDatasetObject');
  }

  input_type(key: string) {
    switch (key) {
      case 'set': return 'boolean'; break;
      case 'model_name': return 'string'; break;
      case 'particle': return 'string'; break;
      case 'target': return 'VariableArr'; break;
    }
  }
}
////////////////////////////////////////////////////////////////////////////
export class SetDatasetObject {
  type: string;
  content: Process | Dataset;

  constructor() {
    this.type = 'undefined';
    this.content = undefined;
  }

  input_type(key: string) {
    switch (key) {
      case 'type': return {type: this.type, subclass: ['Process', 'Dataset']}; break;
      case 'content': switch (this.type) {
        case 'Process': return 'Process'; break;
        case 'Dataset': return 'Dataset'; break;
        default: return 'undefined';
      } break;
    }
  }

  choose_subclass() {
    switch (this.type) {
      case'Process': this.type = 'Process'; this.content = new Process(); break;
      case'Dataset': this.type = 'Dataset'; this.content = new Dataset(); break;
      default: this.type = 'undefined'; this.content = undefined;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////
export class Distribution {
  constructor() {}
}

export class Flat extends Distribution {
  min: Value;
  max: Value;
  amplitude: Value;

  constructor() {
    super();
    this.min = new Value();
    this.max = new Value();
    this.amplitude = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'min': return 'Value'; break;
      case 'max': return 'Value'; break;
      case 'amplitude': return 'Value'; break;
    }
  }
}

export class Gaussian extends Distribution {
  mean: Value;
  sigma: Value;
  amplitude: Value;

  constructor() {
    super();
    this.mean = new Value();
    this.sigma = new Value();
    this.amplitude = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'mean': return 'Value'; break;
      case 'sigma': return 'Value'; break;
      case 'amplitude': return 'Value'; break;
    }
  }
}

export class Exponential extends Distribution {
  lambda: number;
  amplitude: Value;

  constructor() {
    super();
    this.lambda = null;
    this.amplitude = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'lambda': return 'number'; break;
      case 'amplitude': return 'Value'; break;
    }
  }
}

export class Manual extends Distribution {
  unit_x: string;
  unit_y: string;
  insert_point: [number, number];
  add_point: number;
  auto_x_start: number;

  constructor() {
    super();
    this.unit_x = '';
    this.unit_y = '';
    this.insert_point = [null, null];
    this.add_point = null;
    this.auto_x_start = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'unit_x': return 'string'; break;
      case 'unit_y': return 'string'; break;
      case 'insert_point': return ['number', 'number']; break;
      case 'add_point': return 'number'; break;
      case 'auto_x_start': return 'number'; break;
    }
  }
}

export class File extends Distribution {
  unit_x: string;
  unit_y: string;
  auto_x: boolean;
  auto_x_start: Value;
  file_name: string;
  column_x: number;
  column_y: number;

  constructor() {
    super();
    this.unit_x = '';
    this.unit_y = '';
    this.auto_x = false;
    this.auto_x_start = new Value();
    this.file_name = '';
    this.column_x = null;
    this.column_y = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'unit_x': return 'string'; break;
      case 'unit_y': return 'string'; break;
      case 'auto_x': return 'boolean'; break;
      case 'auto_x_start': return 'Value'; break;
      case 'file_name': return 'string'; break;
      case 'column_x': return 'number'; break;
      case 'column_y': return 'number'; break;
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////
export class DistributionSub {
  type: string;
  content: Distribution;

  constructor() {
    this.type = 'undefined';
    this.content = undefined;
  }

  input_type(key: string) {
    switch (key) {
      case 'type': return {type: this.type, subclass: ['Flat', 'Gaussian',
          'Exponential', 'Manual', 'File', 'undefined']}; break;
      case 'content': switch (this.type) {
        case 'Flat': return 'Flat'; break;
        case 'Gaussian': return 'Gaussian'; break;
        case 'Exponential': return 'Exponential'; break;
        case 'Manual': return 'Manual'; break;
        case 'File': return 'File'; break;
        default: return 'undefined';
      } break;
    }
  }

  choose_subclass() {
    switch (this.type) {
      case 'Flat': this.content = new Flat(); break;
      case 'Gaussian': this.content = new Gaussian(); break;
      case 'Exponential': this.content = new Exponential(); break;
      case 'Manual': this.content = new Manual(); break;
      case 'File': this.content = new File(); break;
      default: this.type = 'undefined'; this.content = undefined;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////
export class Digitizer {
  adder: Adder;
  readout: Readout;
  blurring: Blurring;
  calibration: Calibration;
  crosstalk: Crosstalk;
  thresholder: Thresholder;
  upholder: Upholder;
  window: VariableArr;
  sigmoidal_thresholder: SigmoidalThresholder;
  time_resolution: TimeResolution;
  noise: Noise;
  local_efficiency: LocalEfficiency;
  buffer: Buffer;
  pileup: Pileup;
  deadtime: DeadTime;
  coincidences: Coincidences;
  coincidence_sorter: CoincidenceSorter;

  constructor() {
    this.adder = new Adder();
    this.readout = new Readout();
    this.blurring = new Blurring();
    this.calibration = new Calibration();
    this.crosstalk = new Crosstalk();
    this.thresholder = new Thresholder();
    this.upholder = new Upholder();
    this.window = new VariableArr('Window');
    this.sigmoidal_thresholder = new SigmoidalThresholder();
    this.time_resolution = new TimeResolution();
    this.noise = new Noise();
    this.local_efficiency = new LocalEfficiency();
    this.buffer = new Buffer();
    this.pileup = new Pileup();
    this.deadtime = new DeadTime();
    this.coincidences = new Coincidences();
    this.coincidence_sorter = new CoincidenceSorter();
  }

  input_type(key: string) {
    switch (key) {
      case 'adder': return 'Adder'; break;
      case 'readout': return 'Readout'; break;
      case 'blurring': return 'Blurring'; break;
      case 'calibration': return 'Calibration'; break;
      case 'crosstalk': return 'Crosstalk'; break;
      case 'thresholder': return 'Thresholder'; break;
      case 'upholder': return 'Upholder'; break;
      case 'window': return 'VariableArr'; break;
      case 'sigmoidal_thresholder': return 'SigmoidalThresholder'; break;
      case 'time_resolution': return 'TimeResolution'; break;
      case 'noise': return 'Noise'; break;
      case 'local_efficiency': return 'LocalEfficiency'; break;
      case 'buffer': return 'Buffer'; break;
      case 'pileup': return 'Pileup'; break;
      case 'deadtime': return 'DeadTime'; break;
      case 'coincidences': return 'Coincidences'; break;
      case 'coincidence_sorter': return 'CoincidenceSorter'; break;
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////////////
export class Adder {
  readonly insert: boolean;
  adder_compton: boolean;

  constructor() {
    this.insert = true;
    this.adder_compton = false;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'adder_compton': return 'boolean'; break;
    }
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
export class Readout {
  readonly  insert: boolean;
  policy: string;
  depth: number;

  constructor() {
    this.insert = true;
    this.policy = '';
    this.depth = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'policy': return 'string'; break;
      case 'depth': return 'number'; break;
    }
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
export class Blurring {
  insert: boolean;
  law: BlurringLawSub;
  crystal_blurring: CrystalBlurring;
  local_blurring: VariableArr;
  transfer_efficiency: VariableArr;
  light_yield: VariableArr;
  intrinsic_resolution_blurring: VariableArr;
  quantum_efficiency: VariableArr;
  spblurring: Spblurring;

  constructor() {
    this.insert = false;
    this.law = new BlurringLawSub();
    this.crystal_blurring = new CrystalBlurring();
    this.local_blurring = new VariableArr('LocalBlurring');
    this.transfer_efficiency = new VariableArr('TransferEfficiency');
    this.light_yield = new VariableArr('LightYield');
    this.intrinsic_resolution_blurring = new VariableArr('IntrinsicResolutionBlurring');
    this.quantum_efficiency = new VariableArr('QuantumEfficiency');
    this.spblurring = new Spblurring();
  }

  input_type(key: string) {
    switch (key) {
      case 'insert':
        return 'boolean';
        break;
      case 'law':
        return 'BlurringLawSub';
        break;
      case 'crystal_blurring':
        return 'CrystalBlurring';
        break;
      case 'local_blurring':
        return 'VariableArr';
        break;
      case 'transfer_efficiency':
        return 'VariableArr';
        break;
      case 'light_yield':
        return 'VariableArr';
        break;
      case 'intrinsic_resolution_blurring':
        return 'VariableArr';
        break;
      case 'quantum_efficiency':
        return 'VariableArr';
        break;
      case 'spblurring':
        return 'Spblurring';
        break;
    }
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
export class BlurringLaw {
  constructor() {}
}

export class InverseSquareLaw extends BlurringLaw {
  resolution: number;
  energy_of_reference: Value;

  constructor() {
    super();
    this.resolution = null;
    this.energy_of_reference = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'resolution': return 'number'; break;
      case 'energy_of_reference': return 'Value'; break;
    }
  }
}

export class LinearLaw extends BlurringLaw {
  resolution: number;
  energy_of_reference: Value;
  slope: Value;

  constructor() {
    super();
    this.resolution = null;
    this.energy_of_reference = new Value();
    this.slope = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'resolution': return 'number'; break;
      case 'energy_of_reference': return 'Value'; break;
      case 'slope': return 'Value'; break;
    }
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
export class BlurringLawSub {
  type: string;
  content: BlurringLaw;

  constructor() {
    this.type = 'undefined';
    this.content = undefined;
  }

  input_type(key: string) {
    switch (key) {
      case 'type': return {type: this.type, subclass: ['InverseSquareLaw', 'LinearLaw']}; break;
      case 'content': switch (this.type) {
        case 'InverseSquareLaw': return 'InverseSquareLaw'; break;
        case 'LinearLaw': return 'LinearLaw'; break;
        default: return 'undefined';
      } break;
    }
  }

  choose_subclass() {
    switch (this.type) {
      case 'InverseSquareLaw': this.content = new InverseSquareLaw(); break;
      case 'LinearLaw': this.content = new LinearLaw(); break;
      default: this.type = 'undefined'; this.content = undefined;
    }
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////
export class CrystalBlurring {
  insert: boolean;
  crystal_resolution_min: number;
  crystal_resolution_max: number;
  crystal_qe: number;
  crystal_energy_of_reference: Value;

  constructor() {
    this.insert = false;
    this.crystal_resolution_min = null;
    this.crystal_resolution_max = null;
    this.crystal_qe = null;
    this.crystal_energy_of_reference = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'crystal_resolution_min': return 'number'; break;
      case 'crystal_resolution_max': return 'number'; break;
      case 'crystal_qe': return 'number'; break;
      case 'crystal_energy_of_reference': return 'Value'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////
export class LocalBlurring {
  insert: boolean;
  volume: string;
  resolution: number;
  energy_of_reference: Value;

  constructor() {
    this.insert = false;
    this.volume = '';
    this.resolution = null;
    this.energy_of_reference = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'volume': return 'string'; break;
      case 'resolution': return 'number'; break;
      case 'energy_of_reference': return 'Value'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
export class TransferEfficiency {
  insert: boolean;
  volume: string;
  tecoef: number;

  constructor() {
    this.insert = false;
    this.volume = '';
    this.tecoef = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'volume': return 'string'; break;
      case 'tecoef': return 'number'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
export class LightYield {
  insert: boolean;
  volume: string;
  light_output: number;

  constructor() {
    this.insert = false;
    this.volume = '';
    this.light_output = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'volume': return 'string'; break;
      case 'light_output': return 'number'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
export class IntrinsicResolutionBlurring {
  insert: boolean;
  volume: string;
  intrinsic_resolution: number;
  energy_of_reference: Value;

  constructor() {
    this.insert = false;
    this.volume = '';
    this.intrinsic_resolution = null;
    this.energy_of_reference = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'volume': return 'string'; break;
      case 'intrinsic_resolution': return 'number'; break;
      case 'energy_of_reference': return 'Value'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
export class QuantumEfficiency {
  insert: boolean;
  volume: string;
  unique_qe: UniqueQeSub;       // number | string[]

  constructor() {
    this.insert = false;
    this.volume = '';
    this.unique_qe = undefined;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'volume': return 'string'; break;
      case 'unique_qe': return {type: 'undefined', subclass: ['number', 'string']}; break;
    }
  }
}

export class UniqueQeSub {
  type: string;
  content: number | VariableArr;

  constructor() {
    this.type = 'undefined';
    this.content = undefined;
  }

  input_type(key: string) {
    switch (key) {
      case 'type': return {type: this.type, subclass: ['number', 'string[]']}; break;
      case 'content': switch (this.type) {
        case 'number': return 'number'; break;
        case 'string[]': return 'VariableArr'; break;
        default: return 'undefined';
      } break;
    }
  }

  choose_subclass() {
    switch (this.type) {
      case 'number': this.content = null; break;
      case 'string[]': this.content = new VariableArr('string'); break;
      default: this.type = 'undefined'; this.content = undefined;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
export class Spblurring {
  insert: boolean;
  spresolution: Value;
  verbose: number;

  constructor() {
    this.insert = false;
    this.spresolution = new Value();
    this.verbose = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'spresolution': return 'Value'; break;
      case 'verbose': return 'number'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
export class Calibration {
  insert: boolean;
  value: number;

  constructor() {
    this.insert = false;
    this.value = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'value': return 'number'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
export class Crosstalk {
  insert: boolean;
  crosstalk_volume: string;
  edges_fraction: number;
  corners_fraction: number;

  constructor() {
    this.insert = false;
    this.crosstalk_volume = '';
    this.edges_fraction = null;
    this.corners_fraction = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'crosstalk_volume': return 'string'; break;
      case 'edges_fraction': return 'number'; break;
      case 'corners_fraction': return 'number'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
export class Thresholder {
  insert: boolean;
  value: Value;

  constructor() {
    this.insert = false;
    this.value = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'value': return 'Value'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
export class Upholder {
  insert: boolean;
  value: Value;

  constructor() {
    this.insert = false;
    this.value = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'value': return 'Value'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
export class Window {
  insert: boolean;
  input_name: string;
  thresholder: Thresholder;
  uphold: Upholder;

  constructor() {
    this.insert = false;
    this.input_name = '';
    this.thresholder = new Thresholder();
    this.uphold = new Upholder();
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'input_name': return 'string'; break;
      case 'thresholder': return 'Thresholder'; break;
      case 'uphold': return 'Upholder'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
export class SigmoidalThresholder {
  insert: boolean;
  threshold: Value;
  threshold_alpha: number;
  threshold_percent: number;

  constructor() {
    this.insert = false;
    this.threshold = new Value();
    this.threshold_alpha = null;
    this.threshold_percent = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'threshold': return 'Value'; break;
      case 'threshold_alpha': return 'number'; break;
      case 'threshold_percent': return 'number'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
export class TimeResolution {
  insert: boolean;
  value: Value;

  constructor() {
    this.insert = false;
    this.value = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'value': return 'Value'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
export class Noise {
  insert: boolean;
  deltaT_distribution: DistributionSub;
  energy_distribution: DistributionSub;

  constructor() {
    this.insert = false;
    this.deltaT_distribution = new DistributionSub();
    this.energy_distribution = new DistributionSub();
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'deltaT_distribution': return 'DistributionSub'; break;
      case 'energy_distribution': return 'DistributionSub'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
export class LocalEfficiency {
  insert: boolean;
  Level1: DistributionSub;
  Level2: DistributionSub;

  constructor() {
    this.insert = false;
    this.Level1 = new DistributionSub();
    this.Level2 = new DistributionSub();
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'Level1': return 'DistributionSub'; break;
      case 'Level2': return 'DistributionSub'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
export class Buffer {
  insert: boolean;
  buffer_size: Value;
  read_frequency: Value;
  mode: number;

  constructor() {
    this.insert = false;
    this.buffer_size = new Value();
    this.read_frequency = new Value();
    this.mode = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'buffer_size': return 'Value'; break;
      case 'read_frequency': return 'Value'; break;
      case 'mode': return 'number'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
export class Pileup {
  insert: boolean;
  depth: number;
  value: Value;

  constructor() {
    this.insert = false;
    this.depth = null;
    this.value = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'depth': return 'number'; break;
      case 'value': return 'Value'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
export class DeadTime {
  insert: boolean;
  value: Value;
  mode: string;
  dt_volume: string;
  buffer_size: Value;
  buffer_mode: number;

  constructor() {
    this.insert = false;
    this.value = new Value();
    this.mode = '';
    this.dt_volume = '';
    this.buffer_size = new Value();
    this.buffer_mode = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'value': return 'Value'; break;
      case 'mode': return 'string'; break;
      case 'dt_volume': return 'string'; break;
      case 'buffer_size': return 'Value'; break;
      case 'buffer_mode': return 'number'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
export class Coincidences {
  window: Value;
  min_sector_difference: number;
  offset: Value;
  depth: number;
  all_pulse_open_coinc_gate: boolean;
  multiple_policy: string;

  constructor() {
    this.window = new Value();
    this.min_sector_difference = null;
    this.offset = new Value();
    this.depth = null;
    this.all_pulse_open_coinc_gate = false;
    this.multiple_policy = '';
  }

  input_type(key: string) {
    switch (key) {
      case 'window': return 'Value'; break;
      case 'min_sector_difference': return 'number'; break;
      case 'offset': return 'Value'; break;
      case 'depth': return 'number'; break;
      case 'all_pulse_open_coinc_gate': return 'boolean'; break;
      case 'multiple_policy': return 'string'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
export class CoincidenceSorter {
  insert: boolean;
  name: string;
  input_name: string;
  window: Value;

  constructor() {
    this.insert = false;
    this.name = '';
    this.input_name = '';
    this.window = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'insert': return 'boolean'; break;
      case 'name': return 'string'; break;
      case 'input_name': return 'string'; break;
      case 'window': return 'Value'; break;
    }
  }
}
