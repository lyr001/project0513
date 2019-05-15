import {Value} from './basic_class';

export class DataOutput {
  ascii: Ascii;
  root: Root;
  interfile: Interfile;
  sinogram: Sinogram;
  sinoaccel: Sinogram;
  ecat7: Ecat7;
  lmf: Lmf;
  imageCT: ImageCT;

  constructor() {
    this.ascii = new Ascii();
    this.root = new Root();
    this.interfile = new Interfile();
    this.sinogram = new Sinogram();
    this.sinoaccel = new Sinogram();
    this.ecat7 = new Ecat7();
    this.lmf = new Lmf();
    this.imageCT = new ImageCT();
  }

  input_type(key: string) {
    switch (key) {
      case 'ascii': return 'Ascii'; break;
      case 'root': return 'Root'; break;
      case 'interfile': return 'Interfile'; break;
      case 'sinogram': return 'Sinogram'; break;
      case 'sinoaccel': return 'Sinogram'; break;
      case 'ecat7': return 'Ecat7'; break;
      case 'lmf': return 'Lmf'; break;
      case 'imageCT': return 'ImageCT'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////
export class Ascii {
  enable: boolean;
  file_name: string;
  out_file_hits_flag: boolean;
  out_file_singles_flag: boolean;
  out_file_coincidences_flag: boolean;
  coincidence_mask: [boolean, boolean, boolean, boolean, boolean, boolean];
  single_mask: [boolean, boolean, boolean, boolean];
  out_file_size_limit: number;

  constructor() {
    this.enable = false;
    this.file_name = '';
    this.out_file_hits_flag = false;
    this.out_file_singles_flag = false;
    this.out_file_coincidences_flag = false;
    this.coincidence_mask = [false, false, false, false, false, false];
    this.single_mask = [false, false, false, false];
    this.out_file_size_limit = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'enable': return 'boolean'; break;
      case 'file_name': return 'string'; break;
      case 'out_file_hits_flag': return 'boolean'; break;
      case 'out_file_singles_flag': return 'boolean'; break;
      case 'out_file_coincidences_flag': return 'boolean'; break;
      case 'coincidence_mask': return ['boolean', 'boolean', 'boolean', 'boolean', 'boolean', 'boolean']; break;
      case 'single_mask': return ['boolean', 'boolean', 'boolean', 'boolean']; break;
      case 'out_file_size_limit': return 'number'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////
export class Root {
  enable: boolean;
  file_name: string;
  root_hit_flag: boolean;
  root_singles_flag: boolean;
  root_coincidences_flag: boolean;
  root_ntuple_flag: boolean;
  out_file_singles_adder_flag: boolean;
  out_file_singles_readout_flag: boolean;
  out_file_singles_spblurring_flag: boolean;
  out_file_singles_blurring_flag: boolean;
  out_file_singles_thresholder_flag: boolean;
  out_file_singles_upholder_flag: boolean;

  constructor() {
    this.enable = false;
    this.file_name = '';
    this.root_hit_flag = false;
    this.root_singles_flag = false;
    this.root_coincidences_flag = false;
    this.root_ntuple_flag = false;
    this.out_file_singles_adder_flag = false;
    this.out_file_singles_readout_flag = false;
    this.out_file_singles_spblurring_flag = false;
    this.out_file_singles_blurring_flag = false;
    this.out_file_singles_thresholder_flag = false;
    this.out_file_singles_upholder_flag = false;
  }

  input_type(key: string) {
    switch (key) {
      case 'enable': return 'boolean'; break;
      case 'file_name': return 'string'; break;
      case 'root_hit_flag': return 'boolean'; break;
      case 'root_singles_flag': return 'boolean'; break;
      case 'root_coincidences_flag': return 'boolean'; break;
      case 'root_ntuple_flag': return 'boolean'; break;
      case 'out_file_singles_adder_flag': return 'boolean'; break;
      case 'out_file_singles_readout_flag': return 'boolean'; break;
      case 'out_file_singles_spblurring_flag': return 'boolean'; break;
      case 'out_file_singles_blurring_flag': return 'boolean'; break;
      case 'out_file_singles_thresholder_flag': return 'boolean'; break;
      case 'out_file_singles_upholder_flag': return 'boolean'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////
export class Interfile {
  enable: boolean;
  file_name: string;
  projection_plane: string;
  pixel_size: [Value, Value];
  pixel_number: [number, number];

  constructor() {
    this.enable = false;
    this.file_name = '';
    this.projection_plane = '';
    this.pixel_size = [new Value(), new Value()];
    this.pixel_number = [null, null];
  }

  input_type(key: string) {
    switch (key) {
      case 'enable': return 'boolean'; break;
      case 'file_name': return 'string'; break;
      case 'projection_plane': return 'string'; break;
      case 'pixel_size': return ['Value', 'Value']; break;
      case 'pixel_number': return ['number', 'number']; break;
    }
  }
}
/////////////////////////////////////////////////////////////////
export class Sinogram {
  enable: boolean;
  file_name: string;
  radial_bins: number;
  trues_only: boolean;
  raw_output_enable: boolean;

  constructor() {
    this.enable = false;
    this.file_name = '';
    this.radial_bins = null;
    this.trues_only = false;
    this.raw_output_enable = false;
  }

  input_type(key: string) {
    switch (key) {
      case 'enable': return 'boolean'; break;
      case 'file_name': return 'string'; break;
      case 'radial_bins': return 'number'; break;
      case 'trues_only': return 'boolean'; break;
      case 'raw_output_enable': return 'boolean'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////
export class Ecat7 {
  enable: boolean;
  file_name: string;
  maxringdiff: number;
  span: number;
  mashing: number;
  system: number;

  constructor() {
    this.enable = false;
    this.file_name = '';
    this.maxringdiff = null;
    this.span = null;
    this.mashing = null;
    this.system = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'enable': return 'boolean'; break;
      case 'file_name': return 'string'; break;
      case 'maxringdiff': return 'number'; break;
      case 'span': return 'number'; break;
      case 'mashing': return 'number'; break;
      case 'system': return 'number'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////
export class Lmf {
  enable: boolean;
  file_name: string;
  detector_id_bool: boolean;
  energy_bool: boolean;
  gantry_axial_pos_bool: boolean;
  gantry_angular_pos_bool: boolean;
  source_pos_bool: boolean;
  neighbour_bool: boolean;
  neighbourhood_order: boolean;
  coincidence_bool: boolean;
  gate_digi_bool: boolean;
  compton_bool: boolean;
  compton_detector_bool: boolean;
  source_id_bool: boolean;
  source_xyzpos_bool: boolean;
  global_xyzpos_bool: boolean;
  event_id_bool: boolean;
  run_id_bool: boolean;

  constructor() {
    this.enable = false;
    this.file_name = '';
    this.detector_id_bool = false;
    this.energy_bool = false;
    this.gantry_axial_pos_bool = false;
    this.gantry_angular_pos_bool = false;
    this.source_pos_bool = false;
    this.neighbour_bool = false;
    this.neighbourhood_order = false;
    this.coincidence_bool = false;
    this.gate_digi_bool = false;
    this.compton_bool = false;
    this.compton_detector_bool = false;
    this.source_id_bool = false;
    this.source_xyzpos_bool = false;
    this.global_xyzpos_bool = false;
    this.event_id_bool = false;
    this.run_id_bool = false;
  }

  input_type(key: string) {
    switch (key) {
      case 'enable': return 'boolean'; break;
      case 'file_name': return 'string'; break;
      case 'detector_id_bool': return 'boolean'; break;
      case 'energy_bool': return 'boolean'; break;
      case 'gantry_axial_pos_bool': return 'boolean'; break;
      case 'gantry_angular_pos_bool': return 'boolean'; break;
      case 'source_pos_bool': return 'boolean'; break;
      case 'neighbour_bool': return 'boolean'; break;
      case 'neighbourhood_order': return 'boolean'; break;
      case 'coincidence_bool': return 'boolean'; break;
      case 'gate_digi_bool': return 'boolean'; break;
      case 'compton_bool': return 'boolean'; break;
      case 'compton_detector_bool': return 'boolean'; break;
      case 'source_id_bool': return 'boolean'; break;
      case 'source_xyzpos_bool': return 'boolean'; break;
      case 'global_xyzpos_bool': return 'boolean'; break;
      case 'event_id_bool': return 'boolean'; break;
      case 'run_id_bool': return 'boolean'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////
export class ImageCT {
  enable: boolean;
  file_name: string;
  num_pixel: [number, number];
  vrt_factor: number;
  start_seed: number;

  constructor() {
    this.enable = false;
    this.file_name = '';
    this.num_pixel = [null, null];
    this.vrt_factor = null;
    this.start_seed = null;
  }

  input_type(key: string) {
    switch (key) {
      case 'enable': return 'boolean'; break;
      case 'file_name': return 'string'; break;
      case 'num_pixel': return ['number', 'number']; break;
      case 'vrt_factor': return 'number'; break;
      case 'start_seed': return 'number'; break;
    }
  }
}
