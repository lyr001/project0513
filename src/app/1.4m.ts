import {CylindricalPET, Geometry, PhantomSub, SystemSub} from './geometry';
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

export const geometry_14m = new Geometry({
  world: new Volume({
    shape: new ShapeSub({
      type: 'Box',
      content: new Box({
        size: new Vec3({
          value: [400, 400, 400],
          unit: 'cm'
        })
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
            rmax: new Value({
              num: 45,
              unit: 'cm'
            }),
            rmin: new Value({
              num: 40,
              unit: 'cm'
            }),
            height: new Value({
              num: 144,
              unit: 'cm'
            })
          })
        }),
        material: 'Air',
        appearance: new Appearance({
          color: 'white',
          force_wireframe: true
        })
      }),
      rsector: new Volume({
        name: 'head',
        shape: new ShapeSub({
          type: 'Box',
          content: new Box({
            size: new Vec3({
              value: [2, 12, 24],
              unit: 'cm'
            })
          })
        }),
        material: 'Air',
        appearance: new Appearance({
          visible: false
        })
      }),
      module: new Volume({
        name: 'block',
        shape: new ShapeSub({
          type: 'Box',
          content: new Box({
            size: new Vec3({
              value: [20, 19.4, 19.4],
              unit: 'mm'
            })
          })
        }),
        material: 'BaSO4',
        appearance: new Appearance({
          visible: false
        })
      }),
      crystal: new Volume({
        name: 'crystal',
        shape: new ShapeSub({
          type: 'Box',
          content: new Box({
            size: new Vec3({
              value: [20, 3, 3],
              unit: 'mm'
            })
          })
        }),
        material: 'LYSO',
        attach: 'attachCrystalSD',
        appearance: new Appearance({
          visible: false
        })
      })
    })
  }),
  phantom: new PhantomSub({
    type: 'Volume',
    content: new Volume({
      name: 'phantom',
      shape: new ShapeSub({
        type: 'Cylinder',
        content: new Cylinder({
          rmax: new Value({num: 9.55, unit: 'mm'}),
          rmin: new Value({num: 8.3, unit: 'mm'}),
          height: new Value({num: 70, unit: 'cm'})
        })
      }),
      material: 'Water',
      attach: 'attachPhantomSD',
      appearance: new Appearance({
        color: 'red',
        force_solid: true,
      })
    })
  })
});

export const placement_14m = new Placement({
  placement_translation: new VariableArr('PlacementTranslation',
    [
      new PlacementTranslation({
        value: new Vec3({value: [0.0, 0.0, 0.0], unit: 'cm'}),
        target: new VariableArr('PlacementObject', [
          new PlacementObject({type: 'string', content: 'cylindricalPET'}),
          new PlacementObject({type: 'string', content: 'block'}),
          new PlacementObject({type: 'string', content: 'crystal'}),
          new PlacementObject({type: 'string', content: 'phantom'})
        ])
      }),
      new PlacementTranslation({
        value: new Vec3({value: [41, 0.0, 0.0], unit: 'cm'}),
        target: new VariableArr('PlacementObject', [
          new PlacementObject({type: 'string', content: 'head'})
        ])
      })
    ])
});

export const repeater_14m = new Repeater({
  linear_repeater: new VariableArr('LinearRepeater', [
    new LinearRepeater({
      repeat_number: 6,
      repeat_vector: new Vec3({value: [0, 0, 24], unit: 'cm'}),
      target: new VariableArr('RepeatObject', [
        new RepeatObject({type: 'string', content: 'head'})
      ])
    })
  ]),
  ring_repeater: new VariableArr('RingRepeater', [
    new RingRepeater({
      repeat_number: 20,
      target: new VariableArr('RepeatObject', [
        new RepeatObject({type: 'string', content: 'head'})
      ])
    })
  ]),
  cubic_array_repeater: new VariableArr('CubicArrayRepeater', [
    new CubicArrayRepeater({
      repeat_number: [1, 6, 6],
      repeat_vector: new Vec3({value: [0.0, 3.2, 3.2], unit: 'mm'}),
      target: new VariableArr('RepeatObject', [
        new RepeatObject({type: 'string', content: 'crystal'})
      ])
    }),
    new CubicArrayRepeater({
      repeat_number: [1, 6, 12],
      repeat_vector: new Vec3({value: [0, 2, 2], unit: 'cm'}),
      target: new VariableArr('RepeatObject', [
        new RepeatObject({type: 'string', content: 'block'})
      ])
    })
  ])
});
