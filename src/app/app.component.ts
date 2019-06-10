import { Component, AfterContentInit, Renderer2, ElementRef } from '@angular/core';
import {VariableArr, Volume} from './basic_class';
import {CTscanner, Geometry} from './geometry';
import { fromEvent } from 'rxjs';
import {
  acquisition_14m,
  data_output_14m,
  digitizer_14m,
  geometry_14m,
  material_database_14m,
  physics_14m,
  placement_14m,
  repeater_14m,
  source_14m
} from './1.4m';
import {
  acquisition_brain16,
  data_output_brain16,
  digitizer_brain16,
  geometry_brain16, material_database_brain16,
  physics_brain16,
  placement_brain16,
  repeater_brain16,
  source_brain16
} from './brain16';
import {
  acquisition_hrrt,
  data_output_hrrt,
  digitizer_hrrt,
  geometry_hrrt, material_database_hrrt,
  physics_hrrt,
  placement_hrrt,
  repeater_hrrt,
  source_hrrt
} from './hrrt';
import {
  acquisition_mct,
  data_output_mct,
  digitizer_mct,
  geometry_mct,
  material_database_mct,
  physics_mct,
  placement_mct,
  repeater_mct,
  source_mct
} from './mct';
import {Move, Placement, Repeater} from './act';
import {Dataset, Digitizer, Physics} from './physics';
import {SourceSub} from './source';
import {DataOutput} from './data_output';
import {Acquisition, MaterialDatabase} from './acquisition&others';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  // .subscribe(e => console.log(e), console.error);
  constructor(private render: Renderer2, private ef: ElementRef) {

  }
  title = 'project0513';
  a = new Volume();
  b = new CTscanner();
  c = geometry_14m;
  d = repeater_14m;
  geometry = new Geometry();
  geometry_result = new Geometry();
  placement = new Placement();
  placement_result = new Placement();
  move = new Move();
  move_result = new Move();
  repeater = new Repeater();
  repeater_result = new Repeater();
  physics = new Physics();
  physics_result = new Physics();
  dataset = new Dataset();
  dataset_result = new Dataset();
  digitizer = new Digitizer();
  digitizer_result = new Digitizer();
  source = new SourceSub();
  source_result = new SourceSub();
  data_output = new DataOutput();
  data_output_result = new DataOutput();
  acquisition = new Acquisition();
  acquisition_result = new Acquisition();
  material_database = new MaterialDatabase();
  material_database_result = new MaterialDatabase();

  readonly downWithButton$ = fromEvent<MouseEvent>(
    this.ef.nativeElement,
    'mousedown',
  );

  CompletedSAM = ['undefined', '1.4m', 'brain16', 'hrrt', 'mct'];
  chooseSAM = 'undefined';
  chooseComSAM() {
    switch (this.chooseSAM) {
      case 'undefined':
        this.geometry = new Geometry();
        this.placement = new Placement();
        this.move = new Move();
        this.repeater = new Repeater();
        this.physics = new Physics();
        this.dataset = new Dataset();
        this.digitizer = new Digitizer();
        this.source = new SourceSub();
        this.data_output = new DataOutput();
        this.acquisition = new Acquisition();
        this.material_database = new MaterialDatabase();
        break;
      case '1.4m':
        this.geometry = geometry_14m;
        this.placement = placement_14m;
        this.move = new Move();
        this.repeater = repeater_14m;
        this.physics = physics_14m;
        this.dataset = new Dataset();
        this.digitizer = digitizer_14m;
        this.source = source_14m;
        this.data_output = data_output_14m;
        this.acquisition = acquisition_14m;
        this.material_database = material_database_14m;
        break;
      case 'brain16':
        this.geometry = geometry_brain16;
        this.placement = placement_brain16;
        this.move = new Move();
        this.repeater = repeater_brain16;
        this.physics = physics_brain16;
        this.dataset = new Dataset();
        this.digitizer = digitizer_brain16;
        this.source = source_brain16;
        this.data_output = data_output_brain16;
        this.acquisition = acquisition_brain16;
        this.material_database = material_database_brain16;
        break;
      case 'hrrt':
        this.geometry = geometry_hrrt;
        this.placement = placement_hrrt;
        this.move = new Move();
        this.repeater = repeater_hrrt;
        this.physics = physics_hrrt;
        this.dataset = new Dataset();
        this.digitizer = digitizer_hrrt;
        this.source = source_hrrt;
        this.data_output = data_output_hrrt;
        this.acquisition = acquisition_hrrt;
        this.material_database = material_database_hrrt;
        break;
      case 'mct':
        this.geometry = geometry_mct;
        this.placement = placement_mct;
        this.move = new Move();
        this.repeater = repeater_mct;
        this.physics = physics_mct;
        this.dataset = new Dataset();
        this.digitizer = digitizer_mct;
        this.source = source_mct;
        this.data_output = data_output_mct;
        this.acquisition = acquisition_mct;
        this.material_database = material_database_mct;
        break;
      default:
        this.geometry = new Geometry();
        this.placement = new Placement();
        this.move = new Move();
        this.repeater = new Repeater();
        this.physics = new Physics();
        this.dataset = new Dataset();
        this.digitizer = new Digitizer();
        this.source = new SourceSub();
        this.data_output = new DataOutput();
        this.acquisition = new Acquisition();
        this.material_database = new MaterialDatabase();
    }
    this.geometry_result = this.geometry;
    this.placement_result = this.placement;
    this.move_result = this.move;
    this.repeater_result = this.repeater;
    this.physics_result = this.physics;
    this.dataset_result = this.dataset;
    this.digitizer_result = this.digitizer;
    this.source_result = this.source;
    this.data_output_result = this.data_output;
    this.acquisition_result = this.acquisition;
    this.material_database_result = this.material_database;
  }

  ngAfterContentInit() {
  }
}

