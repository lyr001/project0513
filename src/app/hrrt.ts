import {Acquisition, EngineSeedSub, MaterialDatabase, TimeSliceSub} from './acquisition&others';
import {CylindricalPET, Geometry, PhantomSub, SystemSub} from './geometry';
import {Appearance, Box, Cylinder, ShapeSub, Value, VariableArr, Vec3, Volume} from './basic_class';
import {CubicArrayRepeater, Placement, PlacementObject, PlacementTranslation, Repeater, RepeatObject, RingRepeater} from './act';
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
import {Gps, HalfLife, ParticalSub, Source, SourceCylinder, SourceShape, SourceSub, VolumeOrSurface} from './source';
import {DataOutput, Root} from './data_output';

// export const material_database_hrrt = new MaterialDatabase({
//   path: '../../../GateMaterials.db'
// });
export function material_database_hrrt() {
  return new MaterialDatabase({
    path: '../../../GateMaterials.db'
  });
}

// export const geometry_hrrt = new Geometry({
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
//     type: 'CylindricalPET',
//     content: new CylindricalPET({
//       base: new Volume({
//         name: 'cylindricalPET',
//         shape: new ShapeSub({
//           type: 'Cylinder',
//           content: new Cylinder({
//             rmax: new Value({num: 26, unit: 'cm'}),
//             rmin: new Value({num: 23.45, unit: 'cm'}),
//             height: new Value({num: 25.35, unit: 'cm'})
//           })
//         }),
//         material: 'Air',
//         appearance: new Appearance({
//           force_wireframe: true,
//           // force_solid: false,
//           color: 'white'
//         }),
//       }),
//       rsector: new Volume({
//         name: 'head',
//         shape: new ShapeSub({
//           type: 'Box',
//           content: new Box({
//             size: new Vec3({value: [2, 17.568, 25.35], unit: 'cm'})
//           })
//         }),
//         material: 'Air',
//         appearance: new Appearance({
//           visible: false
//         }),
//         attach: 'rsector'
//       }),
//       module: new Volume({
//         name: 'block',
//         shape: new ShapeSub({
//           type: 'Box',
//           content: new Box({
//             size: new Vec3({value: [20, 19, 19], unit: 'mm'})
//           })
//         }),
//         material: 'Air',
//         appearance: new Appearance({
//           visible: false
//         }),
//         attach: 'module'
//       }),
//       crystal: new Volume({
//         name: 'crystal',
//         shape: new ShapeSub({
//           type: 'Box',
//           content: new Box({
//             size: new Vec3({value: [20, 2.2, 2.2], unit: 'mm'})
//           })
//         }),
//         material: 'Air',
//         appearance: new Appearance({
//           visible: false
//         }),
//         attach: 'crystal'
//       }),
//       layer: new VariableArr('Volume', [
//         new Volume({
//           name: 'LSO',
//           shape: new ShapeSub({
//             type: 'Box',
//             content: new Box({
//               size: new Vec3({value: [10, 2.2, 2.2], unit: 'mm'})
//             })
//           }),
//           material: 'LSO',
//           appearance: new Appearance({color: 'red'}),
//           attach: 'layer0',
//           attach_crystal: 'attachCrystalSD'
//         }),
//         new Volume({
//           name: 'LYSO',
//           shape: new ShapeSub({
//             type: 'Box',
//             content: new Box({
//               size: new Vec3({value: [10, 2.2, 2.2], unit: 'mm'})
//             })
//           }),
//           material: 'LYSO',
//           appearance: new Appearance({
//             color: 'yellow'
//           }),
//           attach: 'layer1',
//           attach_crystal: 'attachCrystalSD'
//         })
//       ])
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
//             rmax: new Value({num: 12.25, unit: 'cm'}),
//             height: new Value({num: 19, unit: 'cm'})
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
//   ]),
//   execute: 'MoveVisu.mac'
// });
export function geometry_hrrt() {
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
      type: 'CylindricalPET',
      content: new CylindricalPET({
        base: new Volume({
          name: 'cylindricalPET',
          shape: new ShapeSub({
            type: 'Cylinder',
            content: new Cylinder({
              rmax: new Value({num: 26, unit: 'cm'}),
              rmin: new Value({num: 23.45, unit: 'cm'}),
              height: new Value({num: 25.35, unit: 'cm'})
            })
          }),
          material: 'Air',
          appearance: new Appearance({
            force_wireframe: true,
            // force_solid: false,
            color: 'white'
          }),
        }),
        rsector: new Volume({
          name: 'head',
          shape: new ShapeSub({
            type: 'Box',
            content: new Box({
              size: new Vec3({value: [2, 17.568, 25.35], unit: 'cm'})
            })
          }),
          material: 'Air',
          appearance: new Appearance({
            visible: false
          }),
          attach: 'rsector'
        }),
        module: new Volume({
          name: 'block',
          shape: new ShapeSub({
            type: 'Box',
            content: new Box({
              size: new Vec3({value: [20, 19, 19], unit: 'mm'})
            })
          }),
          material: 'Air',
          appearance: new Appearance({
            visible: false
          }),
          attach: 'module'
        }),
        crystal: new Volume({
          name: 'crystal',
          shape: new ShapeSub({
            type: 'Box',
            content: new Box({
              size: new Vec3({value: [20, 2.2, 2.2], unit: 'mm'})
            })
          }),
          material: 'Air',
          appearance: new Appearance({
            visible: false
          }),
          attach: 'crystal'
        }),
        layer: new VariableArr('Volume', [
          new Volume({
            name: 'LSO',
            shape: new ShapeSub({
              type: 'Box',
              content: new Box({
                size: new Vec3({value: [10, 2.2, 2.2], unit: 'mm'})
              })
            }),
            material: 'LSO',
            appearance: new Appearance({color: 'red'}),
            attach: 'layer0',
            attach_crystal: 'attachCrystalSD'
          }),
          new Volume({
            name: 'LYSO',
            shape: new ShapeSub({
              type: 'Box',
              content: new Box({
                size: new Vec3({value: [10, 2.2, 2.2], unit: 'mm'})
              })
            }),
            material: 'LYSO',
            appearance: new Appearance({
              color: 'yellow'
            }),
            attach: 'layer1',
            attach_crystal: 'attachCrystalSD'
          })
        ])
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
              rmax: new Value({num: 12.25, unit: 'cm'}),
              height: new Value({num: 19, unit: 'cm'})
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
    ]),
    execute: 'MoveVisu.mac'
  });
}

// export const placement_hrrt = new Placement({
//   placement_translation: new VariableArr('PlacementTranslation', [
//     new PlacementTranslation({
//       value: new Vec3({value: [0, 0, 0], unit: 'cm'}),
//       target: new VariableArr('PlacementObject', [
//         new PlacementObject({
//           type: 'string',
//           content: 'cylindricalPET'
//         })
//       ])
//     }),
//     new PlacementTranslation({
//       value: new Vec3({value: [24.45, 0, 0], unit: 'cm'}),
//       target: new VariableArr('PlacementObject', [
//         new PlacementObject({
//           type: 'string',
//           content: 'head'
//         })
//       ])
//     }),
//     new PlacementTranslation({
//       value: new Vec3({value: [0, 0, 0], unit: 'cm'}),
//       target: new VariableArr('PlacementObject', [
//         new PlacementObject({
//           type: 'string',
//           content: 'block'
//         })
//       ])
//     }),
//     new PlacementTranslation({
//       value: new Vec3({value: [0, 0, 0], unit: 'cm'}),
//       target: new VariableArr('PlacementObject', [
//         new PlacementObject({
//           type: 'string',
//           content: 'crystal'
//         })
//       ])
//     }),
//     new PlacementTranslation({
//       value: new Vec3({value: [-0.5, 0, 0], unit: 'cm'}),
//       target: new VariableArr('PlacementObject', [
//         new PlacementObject({
//           type: 'string',
//           content: 'LSO'
//         })
//       ])
//     }),
//     new PlacementTranslation({
//       value: new Vec3({value: [0.5, 0, 0], unit: 'cm'}),
//       target: new VariableArr('PlacementObject', [
//         new PlacementObject({
//           type: 'string',
//           content: 'LYSO'
//         })
//       ])
//     }),
//     new PlacementTranslation({
//       value: new Vec3({value: [0, 0, 0], unit: 'cm'}),
//       target: new VariableArr('PlacementObject', [
//         new PlacementObject({
//           type: 'string',
//           content: 'phantom'
//         })
//       ])
//     })
//   ])
// });
export function placement_hrrt() {
  return new Placement({
    placement_translation: new VariableArr('PlacementTranslation', [
      new PlacementTranslation({
        value: new Vec3({value: [0, 0, 0], unit: 'cm'}),
        target: new VariableArr('PlacementObject', [
          new PlacementObject({
            type: 'string',
            content: 'cylindricalPET'
          })
        ])
      }),
      new PlacementTranslation({
        value: new Vec3({value: [24.45, 0, 0], unit: 'cm'}),
        target: new VariableArr('PlacementObject', [
          new PlacementObject({
            type: 'string',
            content: 'head'
          })
        ])
      }),
      new PlacementTranslation({
        value: new Vec3({value: [0, 0, 0], unit: 'cm'}),
        target: new VariableArr('PlacementObject', [
          new PlacementObject({
            type: 'string',
            content: 'block'
          })
        ])
      }),
      new PlacementTranslation({
        value: new Vec3({value: [0, 0, 0], unit: 'cm'}),
        target: new VariableArr('PlacementObject', [
          new PlacementObject({
            type: 'string',
            content: 'crystal'
          })
        ])
      }),
      new PlacementTranslation({
        value: new Vec3({value: [-0.5, 0, 0], unit: 'cm'}),
        target: new VariableArr('PlacementObject', [
          new PlacementObject({
            type: 'string',
            content: 'LSO'
          })
        ])
      }),
      new PlacementTranslation({
        value: new Vec3({value: [0.5, 0, 0], unit: 'cm'}),
        target: new VariableArr('PlacementObject', [
          new PlacementObject({
            type: 'string',
            content: 'LYSO'
          })
        ])
      }),
      new PlacementTranslation({
        value: new Vec3({value: [0, 0, 0], unit: 'cm'}),
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

// export const repeater_hrrt = new Repeater({
//   cubic_array_repeater: new VariableArr('CubicArrayRepeater', [
//     new CubicArrayRepeater({
//       repeat_number: [1, 8, 8],
//       repeat_vector: new Vec3({
//         value: [0, 2.375, 2.375],
//         unit: 'mm'
//       }),
//       target: new VariableArr('RepeatObject', [
//         new RepeatObject({
//           type: 'string',
//           content: 'crystal'
//         })
//       ])
//     }),
//     new CubicArrayRepeater({
//       repeat_number: [1, 9, 13],
//       repeat_vector: new Vec3({
//         value: [0, 1.952, 1.952],
//         unit: 'cm'
//       }),
//       target: new VariableArr('RepeatObject', [
//         new RepeatObject({
//           type: 'string',
//           content: 'block'
//         })
//       ])
//     })
//   ]),
//   ring_repeater: new VariableArr('RingRepeater', [
//     new RingRepeater({
//       repeat_number: 8,
//       target: new VariableArr('RepeatObject', [
//         new RepeatObject({
//           type: 'string',
//           content: 'head'
//         })
//       ])
//     })
//   ])
// });
export function repeater_hrrt() {
  return new Repeater({
    cubic_array_repeater: new VariableArr('CubicArrayRepeater', [
      new CubicArrayRepeater({
        repeat_number: [1, 8, 8],
        repeat_vector: new Vec3({
          value: [0, 2.375, 2.375],
          unit: 'mm'
        }),
        target: new VariableArr('RepeatObject', [
          new RepeatObject({
            type: 'string',
            content: 'crystal'
          })
        ])
      }),
      new CubicArrayRepeater({
        repeat_number: [1, 9, 13],
        repeat_vector: new Vec3({
          value: [0, 1.952, 1.952],
          unit: 'cm'
        }),
        target: new VariableArr('RepeatObject', [
          new RepeatObject({
            type: 'string',
            content: 'block'
          })
        ])
      })
    ]),
    ring_repeater: new VariableArr('RingRepeater', [
      new RingRepeater({
        repeat_number: 8,
        target: new VariableArr('RepeatObject', [
          new RepeatObject({
            type: 'string',
            content: 'head'
          })
        ])
      })
    ])
  });
}

// export const physics_hrrt = new Physics({
//   cut_in_region: new VariableArr('CutInRegion', [
//     new CutInRegion({
//       region: 'LSO',
//       gamma: new Value({num: 1, unit: 'cm'}),
//       electron: new Value({num: 1, unit: 'cm'}),
//       positron: new Value({num: 1, unit: 'cm'})
//     }),
//     new CutInRegion({
//       region: 'LYSO',
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
//           model_name: 'StandardModel'
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
export function physics_hrrt() {
  return new Physics({
    cut_in_region: new VariableArr('CutInRegion', [
      new CutInRegion({
        region: 'LSO',
        gamma: new Value({num: 1, unit: 'cm'}),
        electron: new Value({num: 1, unit: 'cm'}),
        positron: new Value({num: 1, unit: 'cm'})
      }),
      new CutInRegion({
        region: 'LYSO',
        gamma: new Value({num: 1, unit: 'cm'}),
        electron: new Value({num: 1, unit: 'cm'}),
        positron: new Value({num: 1, unit: 'cm'})
      }),
      new CutInRegion({
        region: 'phantom',
        gamma: new Value({num: 0.1, unit: 'mm'}),
        electron: new Value({num: 0.1, unit: 'mm'}),
        positron: new Value({num: 0.1, unit: 'mm'}),
        max_step: new Value({num: 0.01, unit: 'mm'})
      })
    ]),
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
            model_name: 'StandardModel'
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

// export const digitizer_hrrt = new Digitizer({
//   adder: new Adder(),
//   readout: new Readout({
//     depth: 1
//   }),
//   blurring: new Blurring({
//     insert: true,
//     resolution: 0.23,
//     energy_of_reference: new Value({num: 511, unit: 'keV'})
//   }),
//   thresholder: new Thresholder({
//     insert: true,
//     value: new Value({num: 350, unit: 'keV'})
//   }),
//   upholder: new Upholder({
//     insert: true,
//     value: new Value({num: 650, unit: 'keV'})
//   }),
//   deadtime: new DeadTime({
//     insert: true,
//     value: new Value({num: 1000, unit: 'ns'}),
//     mode: 'paralysable',
//     dt_volume: 'head'
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
//       input_name: new VariableArr('string', [
//         'delay', 'Coincidences'
//       ]),
//       use_priority: true
//     })
//   ])
// });
export function digitizer_hrrt() {
  return new Digitizer({
    adder: new Adder(),
    readout: new Readout({
      depth: 1
    }),
    blurring: new Blurring({
      insert: true,
      resolution: 0.23,
      energy_of_reference: new Value({num: 511, unit: 'keV'})
    }),
    thresholder: new Thresholder({
      insert: true,
      value: new Value({num: 350, unit: 'keV'})
    }),
    upholder: new Upholder({
      insert: true,
      value: new Value({num: 650, unit: 'keV'})
    }),
    deadtime: new DeadTime({
      insert: true,
      value: new Value({num: 1000, unit: 'ns'}),
      mode: 'paralysable',
      dt_volume: 'head'
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
        input_name: new VariableArr('string', [
          'delay', 'Coincidences'
        ]),
        use_priority: true
      })
    ])
  });
}

// export const source_hrrt = new SourceSub({
//   type: 'Source',
//   content: new Source({
//     name: 'F18CylinderSource1',
//     type: 'Gps',
//     content: new Gps({
//       activity: new Value({num: 10000000, unit: 'becquerel'}),
//       partical: new ParticalSub({
//         type: 'other partical',
//         content: 'e+'
//       }),
//       forced_unstable_flag: true,
//       half_life: new HalfLife({
//         use_default_half_life: false,
//         forced_half_life: new Value({num: 6386, unit: 's'})
//       }),
//       energytype: 'Fluor18',
//       source_shape: new SourceShape({
//         type: 'Volume',
//         content: new VolumeOrSurface({
//           type: 'Cylinder',
//           content: new SourceCylinder({
//             radius: new Value({num: 1, unit: 'mm'}),
//             halfz: new Value({num: 1, unit: 'mm'})
//           })
//         })
//       }),
//       angtype: 'iso',
//       placement: new Vec3({value: [0, 0, 0], unit: 'cm'})
//     })
//   })
// });
export function source_hrrt() {
  return new SourceSub({
    type: 'Source',
    content: new Source({
      name: 'F18CylinderSource1',
      type: 'Gps',
      content: new Gps({
        activity: new Value({num: 10000000, unit: 'becquerel'}),
        partical: new ParticalSub({
          type: 'other partical',
          content: 'e+'
        }),
        forced_unstable_flag: true,
        half_life: new HalfLife({
          use_default_half_life: false,
          forced_half_life: new Value({num: 6386, unit: 's'})
        }),
        energytype: 'Fluor18',
        source_shape: new SourceShape({
          type: 'Volume',
          content: new VolumeOrSurface({
            type: 'Cylinder',
            content: new SourceCylinder({
              radius: new Value({num: 1, unit: 'mm'}),
              halfz: new Value({num: 1, unit: 'mm'})
            })
          })
        }),
        angtype: 'iso',
        placement: new Vec3({value: [0, 0, 0], unit: 'cm'})
      })
    })
  });
}

// export const data_output_hrrt = new DataOutput({
//   root: new Root({
//     enable: true,
//     file_name: 'ring',
//     root_hit_flag: false,
//     root_singles_flag: true,
//     root_coincidences_flag: true
//   }),
//   execute: 'Verbose.mac'
// });
export function data_output_hrrt() {
  return new DataOutput({
    root: new Root({
      enable: true,
      file_name: 'ring',
      root_hit_flag: false,
      root_singles_flag: true,
      root_coincidences_flag: true
    }),
    execute: 'Verbose.mac'
  });
}

// export const acquisition_hrrt = new Acquisition({
//   engine_name: 'JamesRandom',
//   engine_seed: new EngineSeedSub({
//     type: 'string',
//     content: 'default'
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
export function acquisition_hrrt() {
  return new Acquisition({
    engine_name: 'JamesRandom',
    engine_seed: new EngineSeedSub({
      type: 'string',
      content: 'default'
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

