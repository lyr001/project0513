import {
  Box,
  Cone,
  Cylinder,
  Ellipsoid,
  EllipticalTube, Hexagone,
  Shape,
  Sphere,
  Tessellated,
  TetMeshBox, TRPD,
  Value,
  VariableArr,
  Vec3, Volume, VoxelizedPhantom, Wedge
} from './basic_class';

export class Placement {
  placement_translation: VariableArr;
  placement_rotation: VariableArr;

  constructor() {
    this.placement_translation = new VariableArr('PlacementTranslation');
    this.placement_rotation = new VariableArr('PlacementRotation');
  }

  input_type(key) {
    switch (key) {
      case 'placement_translation': return 'VariableArr'; break;
      case 'placement_rotation': return 'VariableArr'; break;
    }
  }
}
////////////////////////////////////////////////////////////////////////////////
export class PlacementTranslation {
  value: Vec3;
  target: VariableArr;

  constructor() {
    this.value = new Vec3();
    this.target = new VariableArr('PlacementObject');
  }

  input_type(key) {
    switch (key) {
      case 'value': return 'Vec3'; break;
      case  'target': return 'VariableArr'; break;
    }
  }
}
///////////////////////////////////////////////////////////////////////////////
export class PlacementRotation {
  axis: [number, number, number];
  angle: Value;
  target: VariableArr;

  constructor() {
    this.axis = [null, null, null];
    this.angle = new Value();
    this.target = new VariableArr('PlacementObject');
  }

  input_type(key) {
    switch (key) {
      case 'axis': return ['number', 'number', 'number']; break;
      case 'target': return 'VariableArr'; break;
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////
export class PlacementObject {
  type: string;
  content: Volume | VoxelizedPhantom | PlacementTranslation | PlacementRotation;

  constructor() {
    this.type = 'undefined';
    this.content = undefined;
  }

  input_type(key: string) {
    switch (key) {
      case 'type': return {type: this.type, subclass: ['Volume',
          'VoxelizedPhantom', 'PlacementTranslation', 'PlacementRotation']}; break;
      case 'content': switch (this.type) {
        case 'Volume': return 'Volume'; break;
        case 'VoxelizedPhantom': return 'VoxelizedPhantom'; break;
        case 'PlacementTranslation': return 'PlacementTranslation'; break;
        case 'PlacementRotation': return 'PlacementRotation'; break;
        default: return 'undefined';
      } break;
    }
  }

  choose_subclass() {
    switch (this.type) {
      case'Volume': this.type = 'Volume'; this.content = new Volume(); break;
      case'VoxelizedPhantom': this.type = 'VoxelizedPhantom'; this.content = new VoxelizedPhantom(); break;
      case'PlacementTranslation': this.type = 'PlacementTranslation'; this.content = new PlacementTranslation(); break;
      case'PlacementRotation': this.type = 'PlacementRotation'; this.content = new PlacementRotation(); break;
      default: this.type = 'undefined'; this.content = undefined;
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////
export class Move {
  move_translation: VariableArr;
  move_rotation: VariableArr;
  move_orbiting: VariableArr;
  move_osc_trans: VariableArr;
  move_eccent_rot: VariableArr;

  constructor() {
    this.move_translation = new VariableArr('MoveTranslation');
    this.move_rotation = new VariableArr('MoveRotation');
    this.move_orbiting = new VariableArr('MoveOrbiting');
    this.move_osc_trans = new VariableArr('MoveOscTrans');
    this.move_eccent_rot = new VariableArr('MoveEccentRot');
  }

  input_type(key) {
    switch (key) {
      case 'move_translation': return 'VariableArr'; break;
      case 'move_rotation': return 'VariableArr'; break;
      case 'move_orbiting': return 'VariableArr'; break;
      case 'move_osc_trans': return 'VariableArr'; break;
      case 'move_eccent_rot': return 'VariableArr'; break;
    }
  }
}
////////////////////////////////////////////////////////////////////////////////////
export class MoveTranslation {
  speed: Vec3;
  target: VariableArr;

  constructor() {
    this.speed = new Vec3();
    this.target = new VariableArr('MoveObject');
  }

  input_type(key) {
    switch (key) {
      case 'speed': return 'Vec3'; break;
      case  'target': return 'VariableArr'; break;
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////////
export class MoveRotation {
  speed: Value;
  axis: [boolean, boolean, boolean];
  target: VariableArr;

  constructor() {
    this.speed = new Value();
    this.axis = [false, false, false];
    this.target = new VariableArr('MoveObject');
  }

  input_type(key) {
    switch (key) {
      case 'speed': return 'Value'; break;
      case 'axis': return ['boolean', 'boolean', 'boolean']; break;
      case  'target': return 'VariableArr'; break;
    }
  }
}
////////////////////////////////////////////////////////////////////////////////////
export class MoveOrbiting {
  speed: Value;
  point1: Vec3;
  point2: Vec3;
  auto_rotation: boolean;
  target: VariableArr;

  constructor() {
    this.speed = new Value();
    this.point1 = new Vec3();
    this.point2 = new Vec3();
    this.auto_rotation = false;
    this.target = new VariableArr('MoveObject');
  }

  input_type(key) {
    switch (key) {
      case 'speed': return 'Value'; break;
      case 'point1': return 'Vec3'; break;
      case 'point2': return 'Vec3'; break;
      case 'auto_rotation': return 'boolean'; break;
      case  'target': return 'VariableArr'; break;
    }
  }
}
////////////////////////////////////////////////////////////////////////////////////
export class MoveOscTrans {
  amplitude: Vec3;
  frequency: Value;
  period: Value;
  phase: Value;
  target: VariableArr;

  constructor() {
    this.amplitude = new Vec3();
    this.frequency = new Value();
    this.period = new Value();
    this.phase = new Value();
    this.target = new VariableArr('MoveObject');
  }

  input_type(key) {
    switch (key) {
      case 'amplitude': return 'Vec3'; break;
      case 'frequency': return 'Value'; break;
      case 'period': return 'Value'; break;
      case 'phase': return 'Value'; break;
      case  'target': return 'VariableArr'; break;
    }
  }
}
////////////////////////////////////////////////////////////////////////////////////
export class MoveEccentRot {
  shifts: Vec3;
  speed: Value;
  target: VariableArr;

  constructor() {
    this.shifts = new Vec3();
    this.speed = new Value();
    this.target = new VariableArr('MoveObject');
  }

  input_type(key) {
    switch (key) {
      case 'shifts': return 'Vec3'; break;
      case 'speed': return 'Value'; break;
      case  'target': return 'VariableArr'; break;
    }
  }
}
////////////////////////////////////////////////////////////////////////////////////
export class MoveObject {
  type: string;
  content: Volume | VoxelizedPhantom | MoveTranslation
    | MoveRotation | MoveOrbiting | MoveOscTrans | MoveEccentRot;

  constructor() {
    this.type = 'undefined';
    this.content = undefined;
  }

  input_type(key: string) {
    switch (key) {
      case 'type': return {type: this.type, subclass: ['Volume', 'VoxelizedPhantom',
          'MoveTranslation', 'MoveRotation', 'MoveOrbiting', 'MoveOscTrans', 'MoveEccentRot']}; break;
      case 'content': switch (this.type) {
        case 'Volume': return 'Volume'; break;
        case 'VoxelizedPhantom': return 'VoxelizedPhantom'; break;
        case 'MoveTranslation': return 'MoveTranslation'; break;
        case 'MoveRotation': return 'MoveRotation'; break;
        case 'MoveOrbiting': return 'MoveOrbiting'; break;
        case 'MoveOscTrans': return 'MoveOscTrans'; break;
        case 'MoveEccentRot': return 'MoveEccentRot'; break;
        default: return 'undefined';
      } break;
    }
  }

  choose_subclass() {
    switch (this.type) {
      case'Volume': this.type = 'Volume'; this.content = new Volume(); break;
      case'VoxelizedPhantom': this.type = 'VoxelizedPhantom'; this.content = new VoxelizedPhantom(); break;
      case'MoveTranslation': this.type = 'MoveTranslation'; this.content = new MoveTranslation(); break;
      case'MoveRotation': this.type = 'MoveRotation'; this.content = new MoveRotation(); break;
      case'MoveOrbiting': this.type = 'MoveOrbiting'; this.content = new MoveOrbiting(); break;
      case'MoveOscTrans': this.type = 'MoveOscTrans'; this.content = new MoveOscTrans(); break;
      case'MoveEccentRot': this.type = 'MoveEccentRot'; this.content = new MoveEccentRot(); break;
      default: this.type = 'undefined'; this.content = undefined;
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////////
export class Repeater {
  linear_repeater: VariableArr;
  ring_repeater: VariableArr;
  cubic_array_repeater: VariableArr;
  quadrant_repeater: VariableArr;
  sphere_repeater: VariableArr;
  generic_repeater: VariableArr;

  constructor() {
    this.linear_repeater = new VariableArr('LinearRepeater');
    this.ring_repeater = new VariableArr('RingRepeater');
    this.cubic_array_repeater = new VariableArr('CubicArrayRepeater');
    this.quadrant_repeater = new VariableArr('QuadrantRepeater');
    this.sphere_repeater = new VariableArr('SphereRepeater');
    this.generic_repeater = new VariableArr('GenericRepeater');
  }

  input_type(key) {
    switch (key) {
      case 'linear_repeater': return 'VariableArr'; break;
      case 'ring_repeater': return 'VariableArr'; break;
      case 'cubic_array_repeater': return 'VariableArr'; break;
      case 'quadrant_repeater': return 'VariableArr'; break;
      case 'sphere_repeater': return 'VariableArr'; break;
      case 'generic_repeater': return 'VariableArr'; break;
    }
  }
}
////////////////////////////////////////////////////////////////////////////////////
export class LinearRepeater {
  repeat_number: number;
  repeat_vector: Vec3;
  auto_center: boolean;
  target: VariableArr;

  constructor() {
    this.repeat_number = null;
    this.repeat_vector = new Vec3();
    this.auto_center = false;
    this.target = new VariableArr('RepeatObject');
  }

  input_type(key) {
    switch (key) {
      case 'repeat_number': return 'number'; break;
      case 'repeat_vector': return 'Vec3'; break;
      case 'auto_center': return 'boolean'; break;
      case  'target': return 'VariableArr'; break;
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////////
export class RingRepeater {
  repeat_number: number;
  point1: Vec3;
  point2: Vec3;
  first_angle: Value;
  angular_span: Value;
  modulo_number: number;
  z_shift: [Value, Value, Value, Value, Value, Value, Value, Value];
  auto_rotation: boolean;
  target: VariableArr;

  constructor() {
    this.repeat_number = null;
    this.point1 = new Vec3();
    this.point2 = new Vec3();
    this.first_angle = new Value();
    this.angular_span = new Value();
    this.modulo_number = null;
    this.z_shift = [new Value(), new Value(), new Value(), new Value(), new Value(), new Value(), new Value(), new Value()];
    this.auto_rotation = false;
    this.target = new VariableArr('RepeatObject');
  }

  input_type(key) {
    switch (key) {
      case 'repeat_number': return 'number'; break;
      case 'point1': return 'Vec3'; break;
      case 'point2': return 'Vec3'; break;
      case 'first_angle': return 'Value'; break;
      case 'angular_span': return 'Value'; break;
      case 'modulo_number': return 'number'; break;
      case 'z_shift': return ['Value', 'Value', 'Value', 'Value', 'Value', 'Value', 'Value', 'Value']; break;
      case 'auto_rotation': return 'boolean'; break;
      case  'target': return 'VariableArr'; break;
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////////
export class CubicArrayRepeater {
  repeat_number: [number, number, number];
  repeat_vector: Vec3;
  target: VariableArr;

  constructor() {
    this.repeat_number = [null, null, null];
    this.repeat_vector = new Vec3();
    this.target = new VariableArr('RepeatObject');
  }

  input_type(key) {
    switch (key) {
      case 'repeat_number': return ['number', 'number', 'number']; break;
      case 'repeat_vector': return 'Vec3'; break;
      case  'target': return 'VariableArr'; break;
    }
  }
}
////////////////////////////////////////////////////////////////////////////////////
export class QuadrantRepeater {
  line_number: number;
  orientation: Value;
  copy_spacing: Value;
  max_range: Value;
  target: VariableArr;

  constructor() {
    this.line_number = null;
    this.orientation = new Value();
    this.copy_spacing = new Value();
    this.max_range = new Value();
    this.target = new VariableArr('RepeatObject');
  }

  input_type(key) {
    switch (key) {
      case 'line_number': return 'number'; break;
      case 'orientation': return 'Value'; break;
      case 'copy_spacing': return 'Value'; break;
      case 'max_range': return 'Value'; break;
      case  'target': return 'VariableArr'; break;
    }
  }
}
////////////////////////////////////////////////////////////////////////////////////
export class SphereRepeater {
  radius: Value;
  repeat_number_with_theta: number;
  repeat_number_with_phi: number;
  theta_angle: Value;
  phi_angle: Value;
  target: VariableArr;

  constructor() {
    this.radius = new Value();
    this.repeat_number_with_theta = null;
    this.repeat_number_with_phi = null;
    this.theta_angle = new Value();
    this.phi_angle = new Value();
    this.target = new VariableArr('RepeatObject');
  }

  input_type(key) {
    switch (key) {
      case 'radius': return 'Value'; break;
      case 'repeat_number_with_theta': return 'number'; break;
      case 'repeat_number_with_phi': return 'number'; break;
      case 'theta_angle': return 'Value'; break;
      case 'phi_angle': return 'Value'; break;
      case  'target': return 'VariableArr'; break;
    }
  }
}
////////////////////////////////////////////////////////////////////////////////////
export class GenericRepeater {
  placements_filename: string;
  relative_translation: boolean;
  target: VariableArr;

  constructor() {
    this.placements_filename = '';
    this.relative_translation = false;
    this.target = new VariableArr('RepeatObject');
  }

  input_type(key) {
    switch (key) {
      case 'placements_filename': return 'string'; break;
      case 'relative_translation': return 'boolean'; break;
      case  'target': return 'VariableArr'; break;
    }
  }
}
////////////////////////////////////////////////////////////////////////////////////
export class RepeatObject {
  type: string;
  content: Volume | VoxelizedPhantom | LinearRepeater
    | RingRepeater | CubicArrayRepeater | QuadrantRepeater | SphereRepeater | GenericRepeater;

  constructor() {
    this.type = 'undefined';
    this.content = undefined;
  }

  input_type(key: string) {
    switch (key) {
      case 'type': return {type: this.type, subclass: ['Volume', 'VoxelizedPhantom',
          'LinearRepeater', 'RingRepeater', 'CubicArrayRepeater', 'QuadrantRepeater', 'SphereRepeater', 'GenericRepeater']}; break;
      case 'content': switch (this.type) {
        case 'Volume': return 'Volume'; break;
        case 'VoxelizedPhantom': return 'VoxelizedPhantom'; break;
        case 'LinearRepeater': return 'LinearRepeater'; break;
        case 'RingRepeater': return 'RingRepeater'; break;
        case 'CubicArrayRepeater': return 'CubicArrayRepeater'; break;
        case 'QuadrantRepeater': return 'QuadrantRepeater'; break;
        case 'SphereRepeater': return 'SphereRepeater'; break;
        case 'GenericRepeater': return 'GenericRepeater'; break;
        default: return 'undefined';
      } break;
    }
  }

  choose_subclass() {
    switch (this.type) {
      case'Volume': this.type = 'Volume'; this.content = new Volume(); break;
      case'VoxelizedPhantom': this.type = 'VoxelizedPhantom'; this.content = new VoxelizedPhantom(); break;
      case'LinearRepeater': this.type = 'LinearRepeater'; this.content = new LinearRepeater(); break;
      case'RingRepeater': this.type = 'RingRepeater'; this.content = new RingRepeater(); break;
      case'CubicArrayRepeater': this.type = 'CubicArrayRepeater'; this.content = new CubicArrayRepeater(); break;
      case'QuadrantRepeater': this.type = 'QuadrantRepeater'; this.content = new QuadrantRepeater(); break;
      case'SphereRepeater': this.type = 'SphereRepeater'; this.content = new SphereRepeater(); break;
      case'GenericRepeater': this.type = 'GenericRepeater'; this.content = new GenericRepeater(); break;
      default: this.type = 'undefined'; this.content = undefined;
    }
  }
}
