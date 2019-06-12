import {Acquisition, EngineSeedSub, MaterialDatabase, TimeSliceSub} from './acquisition&others';
import {DataOutput, Ecat7, Root, Sinogram} from './data_output';
import {Gps, ParticalSub, Source, SourceCylinder, SourceShape, SourceSub, VolumeOrSurface} from './source';
import {
  Adder,
  Blurring, CoincidenceChain,
  Coincidences, CoincidenceSorter,
  CutInRegion,
  DeadTime,
  Digitizer,
  Model,
  Physics,
  Process,
  Readout,
  Thresholder,
  Upholder
} from './physics';
import {
  CubicArrayRepeater,
  LinearRepeater,
  Placement,
  PlacementObject,
  PlacementTranslation,
  Repeater,
  RepeatObject,
  RingRepeater
} from './act';
import {ECAT, Geometry, PhantomSub, SystemSub} from './geometry';
import {Appearance, Box, Cylinder, ShapeSub, Value, VariableArr, Vec3, Volume} from './basic_class';

// export const material_database_brain16 = new MaterialDatabase({
//   path: '../../../../GateMaterials.db'
// });
export function material_database_brain16() {
  return new MaterialDatabase({
    path: '../../../../GateMaterials.db'
  });
}

// export const geometry_brain16 = new Geometry({
//   world: new Volume({
//     name: 'world',
//     shape: new ShapeSub({
//       type: 'Box',
//       content: new Box({
//         size: new Vec3({value: [400, 400, 400], unit: 'cm'})
//       })
//     })
//   }),
//   scanner: new SystemSub({
//     type: 'ECAT',
//     content: new ECAT({
//       base: new Volume({
//         name: 'ecat',
//         shape: new ShapeSub({
//           type: 'Cylinder',
//           content: new Cylinder({
//             rmax: new Value({num: 13, unit: 'cm'}),
//             rmin: new Value({num: 9.7, unit: 'cm'}),
//             height: new Value({num: 7, unit: 'cm'})
//           })
//         }),
//         material: 'Air',
//         appearance: new Appearance({
//           force_wireframe: true,
//           // force_solid: false
//         })
//       }),
//       block: new Volume({
//         name: 'block',
//         shape: new ShapeSub({
//           type: 'Box',
//           content: new Box({
//             size: new Vec3({value: [10, 38.4, 33.6], unit: 'mm'})
//           })
//         }),
//         material: 'BaSO4',
//         appearance: new Appearance({
//           force_wireframe: true,
//           // force_solid: false
//         }),
//         attach: 'block'
//       }),
//       crystal: new Volume({
//         name: 'crystal',
//         shape: new ShapeSub({
//           type: 'Box',
//           content: new Box({
//             size: new Vec3({value: [10, 3, 3], unit: 'mm'})
//           })
//         }),
//         material: 'LYSO',
//         appearance: new Appearance({
//           color: 'yellow'
//         }),
//         attach: 'crystal',
//         attach_crystal: 'attachCrystalSD'
//       })
//     })
//   }),
//   phantom: new VariableArr('PhantomSub', [
//     new PhantomSub({
//       type: 'Volume',
//       content: new Volume({
//         name: 'phantom',
//         shape: new ShapeSub({
//           type: 'Cylinder',
//           content: new Cylinder({
//             rmax: new Value({num: 9, unit: 'cm'}),
//             height: new Value({num: 20, unit: 'cm'})
//           })
//         }),
//         material: 'Water',
//         appearance: new Appearance({
//           color: 'red',
//           // force_solid: true,
//           force_wireframe: true
//         }),
//         attach_crystal: 'attachPhantomSD'
//       })
//     })
//   ])
// });
export function geometry_brain16() {
  return new Geometry({
    world: new Volume({
      name: 'world',
      shape: new ShapeSub({
        type: 'Box',
        content: new Box({
          size: new Vec3({value: [400, 400, 400], unit: 'cm'})
        })
      })
    }),
    scanner: new SystemSub({
      type: 'ECAT',
      content: new ECAT({
        base: new Volume({
          name: 'ecat',
          shape: new ShapeSub({
            type: 'Cylinder',
            content: new Cylinder({
              rmax: new Value({num: 13, unit: 'cm'}),
              rmin: new Value({num: 9.7, unit: 'cm'}),
              height: new Value({num: 7, unit: 'cm'})
            })
          }),
          material: 'Air',
          appearance: new Appearance({
            force_wireframe: true,
            // force_solid: false
          })
        }),
        block: new Volume({
          name: 'block',
          shape: new ShapeSub({
            type: 'Box',
            content: new Box({
              size: new Vec3({value: [10, 38.4, 33.6], unit: 'mm'})
            })
          }),
          material: 'BaSO4',
          appearance: new Appearance({
            force_wireframe: true,
            // force_solid: false
          }),
          attach: 'block'
        }),
        crystal: new Volume({
          name: 'crystal',
          shape: new ShapeSub({
            type: 'Box',
            content: new Box({
              size: new Vec3({value: [10, 3, 3], unit: 'mm'})
            })
          }),
          material: 'LYSO',
          appearance: new Appearance({
            color: 'yellow'
          }),
          attach: 'crystal',
          attach_crystal: 'attachCrystalSD'
        })
      })
    }),
    phantom: new VariableArr('PhantomSub', [
      new PhantomSub({
        type: 'Volume',
        content: new Volume({
          name: 'phantom',
          shape: new ShapeSub({
            type: 'Cylinder',
            content: new Cylinder({
              rmax: new Value({num: 9, unit: 'cm'}),
              height: new Value({num: 20, unit: 'cm'})
            })
          }),
          material: 'Water',
          appearance: new Appearance({
            color: 'red',
            // force_solid: true,
            force_wireframe: false
          }),
          attach_crystal: 'attachPhantomSD'
        })
      })
    ])
  });
}

// export const placement_brain16 = new Placement({
//   placement_translation: new VariableArr('PlacementTranslation', [
//     new PlacementTranslation({
//       value: new Vec3({value: [102, 0, 0], unit: 'mm'}),
//       target: new VariableArr('PlacementObject', [
//         new PlacementObject({
//           type: 'string',
//           content: 'block'
//         })
//       ])
//     }),
//     new PlacementTranslation({
//       value: new Vec3({value: [0, 0, 0], unit: 'mm'}),
//       target: new VariableArr('PlacementObject', [
//         new PlacementObject({
//           type: 'string',
//           content: 'phantom'
//         })
//       ])
//     })
//   ])
// });
export function placement_brain16() {
  return new Placement({
    placement_translation: new VariableArr('PlacementTranslation', [
      new PlacementTranslation({
        value: new Vec3({value: [102, 0, 0], unit: 'mm'}),
        target: new VariableArr('PlacementObject', [
          new PlacementObject({
            type: 'string',
            content: 'block'
          })
        ])
      }),
      new PlacementTranslation({
        value: new Vec3({value: [0, 0, 0], unit: 'mm'}),
        target: new VariableArr('PlacementObject', [
          new PlacementObject({
            type: 'string',
            content: 'phantom'
          })
        ])
      })
    ])
  });
}

// export const repeater_brain16 = new Repeater({
//   linear_repeater: new VariableArr('LinearRepeater', [
//     new LinearRepeater({
//       repeat_number: 2,
//       repeat_vector: new Vec3({value: [0, 0, 33.6], unit: 'mm'}),
//       target: new VariableArr('RepeatObject', [
//         new RepeatObject({
//           type: 'RingRepeater',
//           content: new RingRepeater({
//             repeat_number: 16,
//             target: new VariableArr('RepeatObject', [
//               new RepeatObject({
//                 type: 'string',
//                 content: 'block'
//               })
//             ])
//           })
//         })
//       ])
//     })
//   ]),
//   cubic_array_repeater: new VariableArr('CubicArrayRepeater', [
//     new CubicArrayRepeater({
//       repeat_number: [1, 10, 10],
//       repeat_vector: new Vec3({value: [0, 3.36, 3.36], unit: 'mm'}),
//       target: new VariableArr('RepeatObject', [
//         new RepeatObject({
//           type: 'string',
//           content: 'crystal'
//         })
//       ])
//     })
//   ])
// });
export function repeater_brain16() {
  return new Repeater({
    linear_repeater: new VariableArr('LinearRepeater', [
      new LinearRepeater({
        repeat_number: 2,
        repeat_vector: new Vec3({value: [0, 0, 33.6], unit: 'mm'}),
        target: new VariableArr('RepeatObject', [
          new RepeatObject({
            type: 'RingRepeater',
            content: new RingRepeater({
              repeat_number: 16,
              target: new VariableArr('RepeatObject', [
                new RepeatObject({
                  type: 'string',
                  content: 'block'
                })
              ])
            })
          })
        ])
      })
    ]),
    cubic_array_repeater: new VariableArr('CubicArrayRepeater', [
      new CubicArrayRepeater({
        repeat_number: [1, 10, 10],
        repeat_vector: new Vec3({value: [0, 3.36, 3.36], unit: 'mm'}),
        target: new VariableArr('RepeatObject', [
          new RepeatObject({
            type: 'string',
            content: 'crystal'
          })
        ])
      })
    ])
  });
}

// export const physics_brain16 = new Physics({
//   cut_in_region: new VariableArr('CutInRegion', [
//     new CutInRegion({
//       region: 'crystal',
//       gamma: new Value({num: 1, unit: 'cm'}),
//       electron: new Value({num: 1, unit: 'cm'}),
//       positron: new Value({num: 1, unit: 'cm'})
//     }),
//     new CutInRegion({
//       region: 'phantom',
//       gamma: new Value({num: 0.1, unit: 'mm'}),
//       electron: new Value({num: 0.1, unit: 'mm'}),
//       positron: new Value({num: 0.1, unit: 'mm'}),
//       max_step: new Value({num: 0.01, unit: 'mm'})
//     })
//   ]),
//   process: new VariableArr('Process', [
//     new Process({
//       add: true,
//       process_name: 'PhotoElectric',
//       model: new VariableArr('Model', [
//         new Model({
//           set: true,
//           model_name: 'StandardModel'
//         })
//       ])
//     }),
//     new Process({
//       add: true,
//       process_name: 'Compton',
//       model: new VariableArr('Model', [
//         new Model({
//           set: true,
//           model_name: 'StandardModel'
//         })
//       ])
//     }),
//     new Process({
//       add: true,
//       process_name: 'RayleighScattering',
//       model: new VariableArr('Model', [
//         new Model({
//           set: true,
//           model_name: 'PenelopeModel'
//         })
//       ])
//     }),
//     new Process({
//       add: true,
//       process_name: 'ElectronIonisation',
//       model: new VariableArr('Model', [
//         new Model({
//           set: true,
//           model_name: 'StandardModel',
//           particle: 'e-'
//         }),
//         new Model({
//           set: true,
//           model_name: 'StandardModel',
//           particle: 'e+'
//         })
//       ])
//     }),
//     new Process({
//       add: true,
//       process_name: 'Bremsstrahlung',
//       model: new VariableArr('Model', [
//         new Model({
//           set: true,
//           model_name: 'StandardModel',
//           particle: 'e-'
//         }),
//         new Model({
//           set: true,
//           model_name: 'StandardModel',
//           particle: 'e+'
//         })
//       ])
//     }),
//     new Process({
//       add: true,
//       process_name: 'PositronAnnihilation'
//     }),
//     new Process({
//       add: true,
//       process_name: 'MultipleScattering',
//       particle: 'e+'
//     }),
//     new Process({
//       add: true,
//       process_name: 'MultipleScattering',
//       particle: 'e-'
//     })
//   ])
// });
export function physics_brain16() {
  return new Physics({
    process: new VariableArr('Process', [
      new Process({
        add: true,
        process_name: 'PhotoElectric',
        model: new VariableArr('Model', [
          new Model({
            set: true,
            model_name: 'StandardModel'
          })
        ])
      }),
      new Process({
        add: true,
        process_name: 'Compton',
        model: new VariableArr('Model', [
          new Model({
            set: true,
            model_name: 'StandardModel'
          })
        ])
      }),
      new Process({
        add: true,
        process_name: 'RayleighScattering',
        model: new VariableArr('Model', [
          new Model({
            set: true,
            model_name: 'PenelopeModel'
          })
        ])
      }),
      new Process({
        add: true,
        process_name: 'ElectronIonisation',
        model: new VariableArr('Model', [
          new Model({
            set: true,
            model_name: 'StandardModel',
            particle: 'e-'
          }),
          new Model({
            set: true,
            model_name: 'StandardModel',
            particle: 'e+'
          })
        ])
      }),
      new Process({
        add: true,
        process_name: 'Bremsstrahlung',
        model: new VariableArr('Model', [
          new Model({
            set: true,
            model_name: 'StandardModel',
            particle: 'e-'
          }),
          new Model({
            set: true,
            model_name: 'StandardModel',
            particle: 'e+'
          })
        ])
      }),
      new Process({
        add: true,
        process_name: 'PositronAnnihilation'
      }),
      new Process({
        add: true,
        process_name: 'MultipleScattering',
        particle: 'e+'
      }),
      new Process({
        add: true,
        process_name: 'MultipleScattering',
        particle: 'e-'
      })
    ])
  });
}

// export const digitizer_brain16 = new Digitizer({
//   adder: new Adder(),
//   readout: new Readout({depth: 1}),
//   blurring: new Blurring({
//     insert: true,
//     resolution: 0.08,
//     energy_of_reference: new Value({num: 511, unit: 'keV'})
//   }),
//   thresholder: new Thresholder({
//     insert: true,
//     value: new Value({num: 250, unit: 'keV'})
//   }),
//   upholder: new Upholder({
//     insert: true,
//     value: new Value({num: 650, unit: 'keV'})
//   }),
//   deadtime: new DeadTime({
//     insert: true,
//     value: new Value({num: 1000, unit: 'ns'}),
//     mode: 'paralysable',
//     dt_volume: 'block'
//   }),
//   coincidences: new Coincidences({
//     window: new Value({num: 10, unit: 'ns'}),
//     offset: new Value({num: 0, unit: 'ns'})
//   }),
//   coincidence_sorter: new VariableArr('CoincidenceSorter', [
//     new CoincidenceSorter({
//       insert: true,
//       name: 'delay',
//       window: new Value({num: 10, unit: 'ns'}),
//       offset: new Value({num: 500, unit: 'ns'})
//     })
//   ]),
//   coincidence_chain: new VariableArr('CoincidenceChain', [
//     new CoincidenceChain({
//       insert: true,
//       name: 'finalCoinc',
//       input_name: new VariableArr('string', ['delay', 'Coincidences']),
//       use_priority: true
//     })
//   ])
// });
export function digitizer_brain16() {
  return new Digitizer({
    adder: new Adder(),
    readout: new Readout({depth: 1}),
    blurring: new Blurring({
      insert: true,
      resolution: 0.08,
      energy_of_reference: new Value({num: 511, unit: 'keV'})
    }),
    thresholder: new Thresholder({
      insert: true,
      value: new Value({num: 250, unit: 'keV'})
    }),
    upholder: new Upholder({
      insert: true,
      value: new Value({num: 650, unit: 'keV'})
    }),
    deadtime: new DeadTime({
      insert: true,
      value: new Value({num: 1000, unit: 'ns'}),
      mode: 'paralysable',
      dt_volume: 'block'
    }),
    coincidences: new Coincidences({
      window: new Value({num: 10, unit: 'ns'}),
      offset: new Value({num: 0, unit: 'ns'})
    }),
    coincidence_sorter: new VariableArr('CoincidenceSorter', [
      new CoincidenceSorter({
        insert: true,
        name: 'delay',
        window: new Value({num: 10, unit: 'ns'}),
        offset: new Value({num: 500, unit: 'ns'})
      })
    ]),
    coincidence_chain: new VariableArr('CoincidenceChain', [
      new CoincidenceChain({
        insert: true,
        name: 'finalCoinc',
        input_name: new VariableArr('string', ['delay', 'Coincidences']),
        use_priority: true
      })
    ])
  });
}

// export const data_output_brain16 = new DataOutput({
//   root: new Root({
//     enable: true,
//     file_name: '3e8',
//     root_singles_adder_flag: false,
//     root_singles_readout_flag: false,
//     root_hit_flag: false,
//     root_singles_flag: false,
//     root_coincidences_flag: true
//   }),
//   execute: 'Verbose.mac'
// });
export function data_output_brain16() {
  return new DataOutput({
    root: new Root({
      enable: true,
      file_name: '3e8',
      root_singles_adder_flag: false,
      root_singles_readout_flag: false,
      root_hit_flag: false,
      root_singles_flag: false,
      root_coincidences_flag: true
    }),
    execute: 'Verbose.mac'
  });
}

// export const source_brain16 = new SourceSub({
//   type: 'Source',
//   content: new Source({
//     name: 'voxel_brain',
//     type: 'Gps',
//     content: new Gps({
//       activity: new Value({num: 300000000, unit: 'becquerel'}),
//       type: 'backtoback',
//       partical: new ParticalSub({
//         type: 'other partical',
//         content: 'gamma'
//       }),
//       energytype: 'Mono',
//       monoenergy: new Value({num: 0.511, unit: 'keV'}),
//       source_shape: new SourceShape({
//         type: 'Volume',
//         content: new VolumeOrSurface({
//           type: 'Cylinder',
//           content: new SourceCylinder({
//             radius: new Value({num: 9, unit: 'cm'}),
//             halfz: new Value({num: 10, unit: 'cm'})
//           })
//         })
//       }),
//       placement: new Vec3({value: [0, 0, 0], unit: 'cm'}),
//       confine: 'NULL',
//       angtype: 'iso',
//       dump: 1
//     })
//   })
// });
export function source_brain16() {
  return new SourceSub({
    type: 'Source',
    content: new Source({
      name: 'voxel_brain',
      type: 'Gps',
      content: new Gps({
        activity: new Value({num: 300000000, unit: 'becquerel'}),
        type: 'backtoback',
        partical: new ParticalSub({
          type: 'other partical',
          content: 'gamma'
        }),
        energytype: 'Mono',
        monoenergy: new Value({num: 0.511, unit: 'keV'}),
        source_shape: new SourceShape({
          type: 'Volume',
          content: new VolumeOrSurface({
            type: 'Cylinder',
            content: new SourceCylinder({
              radius: new Value({num: 9, unit: 'cm'}),
              halfz: new Value({num: 10, unit: 'cm'})
            })
          })
        }),
        placement: new Vec3({value: [0, 0, 0], unit: 'cm'}),
        confine: 'NULL',
        angtype: 'iso',
        dump: 1
      })
    })
  });
}

// export const acquisition_brain16 = new Acquisition({
//   engine_name: 'JamesRandom',
//   engine_seed: new EngineSeedSub({
//     type: 'string',
//     content: 'auto'
//   }),
//   verbose: 1,
//   time_slice: new TimeSliceSub({
//     type: 'Value[]',
//     content: new VariableArr('Value', [
//       new Value({num: 1, unit: 's'})
//     ])
//   }),
//   time_start: new Value({num: 0, unit: 's'}),
//   time_stop: new Value({num: 1, unit: 's'})
// });
export function acquisition_brain16() {
  return new Acquisition({
    engine_name: 'JamesRandom',
    engine_seed: new EngineSeedSub({
      type: 'string',
      content: 'auto'
    }),
    verbose: 1,
    time_slice: new TimeSliceSub({
      type: 'Value[]',
      content: new VariableArr('Value', [
        new Value({num: 1, unit: 's'})
      ])
    }),
    time_start: new Value({num: 0, unit: 's'}),
    time_stop: new Value({num: 1, unit: 's'})
  });
}
