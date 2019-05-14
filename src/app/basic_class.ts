import {
  CubicArrayRepeater, GenericRepeater,
  LinearRepeater,
  MoveEccentRot, MoveObject,
  MoveOrbiting,
  MoveOscTrans,
  MoveRotation,
  MoveTranslation,
  PlacementObject,
  PlacementRotation,
  PlacementTranslation, QuadrantRepeater, RepeatObject, RingRepeater, SphereRepeater
} from './act';

export class Volume {
  name: string;
  shape: ShapeSub;
  material: string;
  attach: string;
  appearance: Appearance;

  constructor() {
    this.name = '';
    this.shape = new ShapeSub();
    this.material = '';
    this.attach = '';
    this.appearance = new Appearance();
  }

  input_type(key: string) {
    switch (key) {
      case 'name': return 'string'; break;
      case 'shape': return 'ShapeSub'; break;
      case 'material': return 'string'; break;
      case 'attach': return 'string'; break;
      case 'appearance': return 'Appearance'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////
export class VoxelizedPhantom {
  name: string;
  insert: string;
  image: string;
  material_database: string;
  range_to_material_file: string;
  hu_to_material_file: string;
  attach: string;
  skip_equal_materials: boolean;
  material_table: string;
  density_table: string;
  density_tolerance: Value;
  output_material_database_filename: string;
  output_hu_material_filename: string;
  fictitious_energy: Value;
  gamma_discard_energy: Value;

  constructor() {
    this.name = '';
    this.insert = '';
    this.image = '';
    this.material_database = '';
    this.range_to_material_file = '';
    this.hu_to_material_file = '';
    this.attach = '';
    this.skip_equal_materials = false;
    this.material_table = '';
    this.density_table = '';
    this.density_tolerance = new Value();
    this.output_material_database_filename = '';
    this.output_hu_material_filename = '';
    this.fictitious_energy = new Value();
    this.gamma_discard_energy = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'name': return 'string'; break;
      case 'insert': return 'string'; break;
      case 'image': return 'string'; break;
      case 'material_database': return 'string'; break;
      case 'range_to_material_file': return 'string'; break;
      case 'hu_to_material_file': return 'string'; break;
      case 'attach': return 'string'; break;
      case 'skip_equal_materials': return 'boolean'; break;
      case 'material_table': return 'string'; break;
      case 'density_table': return 'string'; break;
      case 'density_tolerance': return 'Value'; break;
      case 'output_material_database_filename': return 'string'; break;
      case 'output_hu_material_filename': return 'string'; break;
      case 'fictitious_energy': return 'Value'; break;
      case 'gamma_discard_energy': return 'Value'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////////
export class ShapeSub {
  type: string;
  content: Shape;

  constructor() {
    this.type = 'undefined';
    this.content = undefined;
  }

  input_type(key: string) {
    switch (key) {
      case 'type': return {type: this.type, subclass: ['Box', 'Sphere',
          'Cylinder', 'Cone', 'Ellipsoid', 'EllipticalTube', 'Tessellated',
          'TetMeshBox', 'TRPD', 'Hexagone', 'Wedge']}; break;
      case 'content': switch (this.type) {
        case 'Box': return 'Box'; break;
        case 'Sphere': return 'Sphere'; break;
        case 'Cylinder': return 'Cylinder'; break;
        case 'Cone': return 'Cone'; break;
        case 'Ellipsoid': return 'Ellipsoid'; break;
        case 'EllipticalTube': return 'EllipticalTube'; break;
        case 'Tessellated': return 'Tessellated'; break;
        case 'TetMeshBox': return 'TetMeshBox'; break;
        case'TRPD': return 'TRPD'; break;
        case 'Hexagone': return 'Hexagone'; break;
        case 'Wedge': return 'Wedge'; break;
        default: return 'undefined';
      } break;
    }
  }

  choose_subclass() {
    switch (this.type) {
      case 'Box': this.content = new Box(); break;
      case 'Sphere': this.content = new Sphere(); break;
      case 'Cylinder': this.content = new Cylinder(); break;
      case 'Cone': this.content = new Cone(); break;
      case 'Ellipsoid': this.content = new Ellipsoid(); break;
      case 'EllipticalTube': this.content = new EllipticalTube(); break;
      case 'Tessellated': this.content = new Tessellated(); break;
      case 'TetMeshBox': this.content = new TetMeshBox(); break;
      case 'TRPD': this.content = new TRPD(); break;
      case 'Hexagone': this.content = new Hexagone(); break;
      case 'Wedge': this.content = new Wedge(); break;
      default: this.type = 'undefined'; this.content = undefined;
    }
  }
}
//////////////////////////////////////////////////////////////////////
export class Appearance {
  color: string;
  visible: boolean;
  daughters_invisible: boolean;
  line_style: string;
  line_width: number;
  force_solid: boolean;
  force_wireframe: boolean;

  constructor() {
    this.color = '';
    this.visible = false;
    this.daughters_invisible = false;
    this.line_style = '';
    this.line_width = null;
    this.force_solid = false;
    this.force_wireframe = false;
  }

  input_type(key: string) {
    switch (key) {
      case 'color': return 'string'; break;
      case 'visible': return 'boolean'; break;
      case 'daughters_invisible': return 'boolean'; break;
      case 'line_style': return 'string'; break;
      case 'line_width': return 'number'; break;
      case 'force_solid': return 'boolean'; break;
      case 'force_wireframe': return 'boolean'; break;
    }
  }
}
///////////////////////////////////////////////////////////
export class Shape {
  constructor() {}
}

export class Box extends Shape {
  size: Vec3;

  constructor() {
    super();
    this.size = new Vec3();
  }

  input_type(key: string) {
    switch (key) {
      case 'size': return 'Vec3'; break;
    }
  }
}

export class Sphere extends Shape {
  rmin: Value;
  rmax: Value;
  phi_start: Value;
  delta_phi: Value;
  theta_start: Value;
  delta_theta: Value;

  constructor() {
    super();
    this.rmin = new Value();
    this.rmax = new Value();
    this.phi_start = new Value();
    this.delta_phi = new Value();
    this.theta_start = new Value();
    this.delta_theta = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'rmin': return 'Value'; break;
      case 'rmax': return 'Value'; break;
      case 'phi_start': return 'Value'; break;
      case 'delta_phi': return 'Value'; break;
      case 'theta_start': return 'Value'; break;
      case 'delta_theta': return 'Value'; break;
    }
  }
}

export class Cylinder extends Shape {
  rmin: Value;
  rmax: Value;
  height: Value;
  phi_start: Value;
  delta_phi: Value;

  constructor() {
    super();
    this.rmin = new Value();
    this.rmax = new Value();
    this.height = new Value();
    this.phi_start = new Value();
    this.delta_phi = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'rmin': return 'Value'; break;
      case 'rmax': return 'Value'; break;
      case 'height': return 'Value'; break;
      case 'phi_start': return 'Value'; break;
      case 'delta_phi': return 'Value'; break;
    }
  }
}

export class Cone extends Shape {
  rmin1: Value;
  rmax1: Value;
  rmin2: Value;
  rmax2: Value;
  height: Value;
  phi_start: Value;
  delta_phi: Value;

  constructor() {
    super();
    this.rmin1 = new Value();
    this.rmax1 = new Value();
    this.rmin2 = new Value();
    this.rmax2 = new Value();
    this.height = new Value();
    this.phi_start = new Value();
    this.delta_phi = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'rmin1': return 'Value'; break;
      case 'rmax1': return 'Value'; break;
      case 'rmin2': return 'Value'; break;
      case 'rmax2': return 'Value'; break;
      case 'height': return 'Value'; break;
      case 'phi_start': return 'Value'; break;
      case 'delta_phi': return 'Value'; break;
    }
  }
}

export class Ellipsoid extends Shape {
  size: Vec3;
  z_bottom_cut: Value;
  z_top_cut: Value;

  constructor() {
    super();
    this.size = new Vec3();
    this.z_bottom_cut = new Value();
    this.z_top_cut = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'size': return 'Vec3'; break;
      case 'z_bottom_cut': return 'Value'; break;
      case 'z_top_cut': return 'Value'; break;
    }
  }
}

export class EllipticalTube extends Shape {
  long: Value;
  short: Value;
  height: Value;

  constructor() {
    super();
    this.long = new Value();
    this.short = new Value();
    this.height = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'long': return 'Value'; break;
      case 'short': return 'Value'; break;
      case 'height': return 'Value'; break;
    }
  }
}

export class Tessellated extends Shape {
  path_to_vertices_file: string;

  constructor() {
    super();
    this.path_to_vertices_file = '';
  }

  input_type(key: string) {
    switch (key) {
      case 'path_to_vertices_file': return 'string'; break;
    }
  }
}

export class TetMeshBox extends Shape {
  path_to_ele_file: string;
  unit_of_length: string;
  path_to_attribute_map: string;

  constructor() {
    super();
    this.path_to_ele_file = '';
    this.unit_of_length = '';
    this.path_to_attribute_map = '';
  }

  input_type(key: string) {
    switch (key) {
      case 'path_to_ele_file': return 'string'; break;
      case 'unit_of_length': return 'string'; break;
      case 'path_to_attribute_map': return 'string'; break;
    }
  }
}

export class TRPD extends Shape {
  x1: Value;
  y1: Value;
  x2: Value;
  y2: Value;
  z: Value;
  box_size: Vec3;
  box_pos: Vec3;

  constructor() {
    super();
    this.x1 = new Value();
    this.y1 = new Value();
    this.x2 = new Value();
    this.y2 = new Value();
    this.z = new Value();
    this.box_size = new Vec3();
    this.box_pos = new Vec3();
  }

  input_type(key: string) {
    switch (key) {
      case 'x1': return 'Value'; break;
      case 'y1': return 'Value'; break;
      case 'x2': return 'Value'; break;
      case 'y2': return 'Value'; break;
      case 'z': return 'Value'; break;
      case 'box_size': return 'Vec3'; break;
      case 'box_pos': return 'Vec3'; break;
    }
  }
}

export class Hexagone extends Shape {
  radius: Value;
  height: Value;

  constructor() {
    super();
    this.radius = new Value();
    this.height = new Value();
  }

  input_type(key: string) {
    switch (key) {
      case 'radius': return 'Value'; break;
      case 'height': return 'Value'; break;
    }
  }
}

export class Wedge extends Shape {
  narrower_xlength: Value;
  size: Vec3;

  constructor() {
    super();
    this.narrower_xlength = new Value();
    this.size = new Vec3();
  }

  input_type(key: string) {
    switch (key) {
      case 'narrower_xlength': return 'Value'; break;
      case 'size': return 'Vec3'; break;
    }
  }
}
/////////////////////////////////////////////////////////////////
export class Value {
  num: number;
  unit: string;

  constructor() {
    this.num = null;
    this.unit = '';
  }

  input_type(key: string) {
    switch (key) {
      case 'num': return 'number'; break;
      case 'unit': return 'string'; break;
    }
  }
}
//////////////////////////////////////////////////////////////////
export class Vec3 {
  value: [number, number, number];
  unit: string;

  constructor() {
    this.value = [null, null, null];
    this.unit = '';
  }

  input_type(key: string) {
    switch (key) {
      case 'value': return ['number', 'number', 'number']; break;
      case 'unit': return 'string'; break;
    }
  }
}
////////////////////////////////////////////////////////////////
export class VariableArr {
  type: string;
  value: Array<any>;

  constructor(type: string) {
    this.type = type;
    this.value = [];
  }

  add() {
    switch (this.type) {
      case 'string': this.value.push(''); break;
      case 'number': this.value.push(null); break;
      case 'Volume': this.value.push(new Volume()); break;
      case 'PlacementTranslation': this.value.push(new PlacementTranslation()); break;
      case 'PlacementRotation': this.value.push(new PlacementRotation()); break;
      case'PlacementObject': this.value.push(new PlacementObject()); break;
      case 'MoveTranslation': this.value.push(new MoveTranslation()); break;
      case 'MoveRotation': this.value.push(new MoveRotation()); break;
      case'MoveOrbiting': this.value.push(new MoveOrbiting()); break;
      case 'MoveOscTrans': this.value.push(new MoveOscTrans()); break;
      case 'MoveEccentRot': this.value.push(new MoveEccentRot()); break;
      case'MoveObject': this.value.push(new MoveObject()); break;
      case 'LinearRepeater': this.value.push(new LinearRepeater()); break;
      case 'RingRepeater': this.value.push(new RingRepeater()); break;
      case'CubicArrayRepeater': this.value.push(new CubicArrayRepeater()); break;
      case 'QuadrantRepeater': this.value.push(new QuadrantRepeater()); break;
      case 'SphereRepeater': this.value.push(new SphereRepeater()); break;
      case'GenericRepeater': this.value.push(new GenericRepeater()); break;
      case 'RepeatObject': this.value.push(new RepeatObject()); break;
    }
    console.log('add', this.value.length);
  }

  delete(index: number) {
    setTimeout(() => {
      this.value.splice(index, 1);
      console.log('delete', this.value.length, index);
    }, 50);
  }
}
///////////////////////////////////////////////////////////////////////


