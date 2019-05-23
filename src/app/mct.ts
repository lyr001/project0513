import {Acquisition, EngineSeedSub, MaterialDatabase, TimeSliceSub} from './acquisition&others';
import {ECAT, Geometry, PhantomSub, SystemSub} from './geometry';
import {Appearance, Box, Cylinder, ShapeSub, Value, VariableArr, Vec3, Volume} from './basic_class';
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
import {DataOutput, Ecat7, Root, Sinogram} from './data_output';
import {Gps, ParticalSub, Source, SourceCylinder, SourceShape, SourceSub, VolumeOrSurface} from './source';

export const material_database_mct = new MaterialDatabase({path: '../../../GateMaterials.db'});

export const geometry_mct = new Geometry({
  world: new Volume({
    name: 'world',
    shape: new ShapeSub({
      type: 'Box',
      content: new Box({
        size: new Vec3({value: [400, 400, 400], unit: 'cm'})
      })})
  }),
  scanner: new SystemSub({
    type: 'ECAT',
    content: new ECAT({
      base: new Volume({
        name: 'ecat',
        shape: new ShapeSub({
          type: 'Cylinder',
          content: new Cylinder({
            rmax: new Value({num: 44.45, unit: 'cm'}),
            rmin: new Value({num: 42.45, unit: 'cm'}),
            height: new Value({num: 22, unit: 'cm'})
          })
        }),
        material: 'Air',
        appearance: new Appearance({
          force_wireframe: true,
          force_solid: false
        })
      }),
      block: new Volume({
        name: 'block',
        shape: new ShapeSub({
          type: 'Box',
          content: new Box({
            size: new Vec3({value: [20, 53.3, 53.3], unit: 'mm'})
          })
        }),
        material: 'Air',
        appearance: new Appearance({
          force_wireframe: true,
          force_solid: false,
          color: 'green'
        }),
        attach: 'block'
      }),
      crystal: new Volume({
        name: 'crystal',
        shape: new ShapeSub({
          type: 'Box',
          content: new Box({
            size: new Vec3({value: [20, 4, 4], unit: 'mm'})
          })
        }),
        material: 'LSO',
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
            rmax: new Value({num: 35, unit: 'cm'}),
            height: new Value({num: 20, unit: 'cm'})
          })
        }),
        material: 'Air',
        appearance: new Appearance({
          force_wireframe: true,
          force_solid: false,
          color: 'green'
        }),
        attach_crystal: 'attachPhantomSD'
      })
    })
  ])
});

export const placement_mct = new Placement({
  placement_translation: new VariableArr('PlacementTranslation', [
    new PlacementTranslation({
      value: new Vec3({value: [434.5, 0, 0], unit: 'mm'}),
      target: new VariableArr('PlacementObject', [
        new PlacementObject({
          type: 'string',
          content: 'block'
        })
      ])
    })
  ])
});

export const repeater_mct = new Repeater({
  ring_repeater: new VariableArr('RingRepeater', [
    new RingRepeater({
      repeat_number: 48,
      target: new VariableArr('RepeatObject', [
        new RepeatObject({
          type: 'LinearRepeater',
          content: new LinearRepeater({
            repeat_number: 4,
            repeat_vector: new Vec3({value: [0, 0, 53.3], unit: 'mm'}),
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
      repeat_number: [1, 13, 13],
      repeat_vector: new Vec3({value: [0, 4.1, 4.1], unit: 'mm'}),
      target: new VariableArr('RepeatObject', [
        new RepeatObject({
          type: 'string',
          content: 'crystal'
        })
      ])
    })
  ])
});

export const physics_mct = new Physics({
  cut_in_region: new VariableArr('CutInRegion', [
    new CutInRegion({
      region: 'crystal',
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
      process_name: 'PhotoElectric',
      model: new VariableArr('Model', [
        new Model({model_name: 'StandardModel'})
      ])
    }),
    new Process({
      process_name: 'Compton',
      model: new VariableArr('Model', [
        new Model({model_name: 'StandardModel'})
      ])
    }),
    new Process({
      process_name: 'RayleighScattering',
      model: new VariableArr('Model', [
        new Model({model_name: 'PenelopeModel'})
      ])
    }),
    new Process({
      process_name: 'ElectronIonisation',
      model: new VariableArr('Model', [
        new Model({model_name: 'StandardModel', particle: 'e-'}),
        new Model({model_name: 'StandardModel', particle: 'e+'})
      ])
    }),
    new Process({
      process_name: 'Bremsstrahlung',
      model: new VariableArr('Model', [
        new Model({model_name: 'StandardModel', particle: 'e-'}),
        new Model({model_name: 'StandardModel', particle: 'e+'})
      ])
    }),
    new Process({
      process_name: 'PositronAnnihilation'
    }),
    new Process({
      process_name: 'MultipleScattering',
      particle: 'e+'
    }),
    new Process({
      process_name: 'MultipleScattering',
      particle: 'e-'
    })
  ])
});

export const digitizer_mct = new Digitizer({
  adder: new Adder(),
  readout: new Readout({depth: 1}),
  blurring: new Blurring({
    insert: true,
    resolution: 0.26,
    energy_of_reference: new Value({num: 511, unit: 'keV'})
  }),
  thresholder: new Thresholder({
    insert: true,
    value: new Value({num: 250, unit: 'keV'})
  }),
  upholder: new Upholder({
    insert: true,
    value: new Value({num: 750, unit: 'keV'})
  }),
  deadtime: new DeadTime({
    insert: true,
    value: new Value({num: 3000000, unit: 'ps'}),
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

export const data_output_mct = new DataOutput({
  root: new Root({
    enable: true,
    file_name: 'derenzo1',
    root_singles_adder_flag: false,
    root_singles_readout_flag: false,
    root_hit_flag: false,
    root_singles_flag: false,
    root_coincidences_flag: true
  }),
  sinogram: new Sinogram({
    enable: true,
    tang_crystal_blurring: new Value({num: 1.8, unit: 'mm'}),
    axial_crystal_blurring: new Value({num: 1.8, unit: 'mm'}),
    verbose: 2,
    raw_output_enable: true,
    file_name: 'your',
    trues_only: true,
    input_data_name: 'finalCoinc'
  }),
  ecat7: new Ecat7({
    enable: true,
    verbose: 2,
    file_name: 'yourSinogram',
    mashing: 2,
    span: 9,
    maxringdiff: 22,
    system: 962,
    isotope_code: 'F-18',
    isotope_halflife: new Value({num: 6586.2, unit: 'second'}),
    isotope_branching_fraction: 1
  }),
  execute: 'Verbose.mac'
});

export const source_mct = new SourceSub({
  type: 'Source',
  content: new Source({
    name: 'voxel_brain',
    type: 'Gps',
    content: new Gps({
      activity: new Value({num: 10000000, unit: 'becquerel'}),
      type: 'backtoback',
      partical: new ParticalSub({
        type: 'other partical',
        content: 'gamma'
      }),
      energytype: 'Mono',
      monoenergy: new Value({num: 0.511, unit: 'MeV'}),
      source_shape: new SourceShape({
        type: 'Volume',
        content: new VolumeOrSurface({
          type: 'Cylinder',
          content: new SourceCylinder({
            radius: new Value({num: 0.5, unit: 'mm'}),
            halfz: new Value({num: 0.5, unit: 'mm'})
          })
        })
      }),
      placement: new Vec3({value: [0, 1, 0], unit: 'cm'}),
      confine: 'NULL',
      angtype: 'iso',
      dump: 1
    })
  })
});

export const acquisition_mct = new Acquisition({
  engine_name: 'JamesRandom',
  engine_seed: new EngineSeedSub({
    type: 'string',
    content: 'auto'
  }),
  verbose: 1,
  time_slice: new TimeSliceSub({
    type: 'Value[]',
    content: new VariableArr('Value', [
      new Value({num: 60, unit: 's'})
    ])
  }),
  time_start: new Value({num: 0, unit: 's'}),
  time_stop: new Value({num: 60, unit: 's'})
});
