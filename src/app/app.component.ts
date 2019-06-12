import { Component, AfterContentInit, Renderer2, ElementRef } from '@angular/core';
import {Geometry} from './geometry';
import {HttpClient} from '@angular/common/http';
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
  constructor(private render: Renderer2, private ef: ElementRef, private http: HttpClient) {

  }
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

  result = {mac: ''};

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
        this.geometry_result = new Geometry();
        this.placement_result = new Placement();
        this.move_result = new Move();
        this.repeater_result = new Repeater();
        this.physics_result = new Physics();
        this.dataset_result = new Dataset();
        this.digitizer_result = new Digitizer();
        this.source_result = new SourceSub();
        this.data_output_result = new DataOutput();
        this.acquisition_result = new Acquisition();
        this.material_database_result = new MaterialDatabase();
        break;
      case '1.4m':
        this.geometry = geometry_14m();
        this.placement = placement_14m();
        this.move = new Move();
        this.repeater = repeater_14m();
        this.physics = physics_14m();
        this.dataset = new Dataset();
        this.digitizer = digitizer_14m();
        this.source = source_14m();
        this.data_output = data_output_14m();
        this.acquisition = acquisition_14m();
        this.material_database = material_database_14m();
        this.geometry_result = geometry_14m();
        this.placement_result = placement_14m();
        this.move_result = new Move();
        this.repeater_result = repeater_14m();
        this.physics_result = physics_14m();
        this.dataset_result = new Dataset();
        this.digitizer_result = digitizer_14m();
        this.source_result = source_14m();
        this.data_output_result = data_output_14m();
        this.acquisition_result = acquisition_14m();
        this.material_database_result = material_database_14m();
        break;
      case 'brain16':
        this.geometry = geometry_brain16();
        this.placement = placement_brain16();
        this.move = new Move();
        this.repeater = repeater_brain16();
        this.physics = physics_brain16();
        this.dataset = new Dataset();
        this.digitizer = digitizer_brain16();
        this.source = source_brain16();
        this.data_output = data_output_brain16();
        this.acquisition = acquisition_brain16();
        this.material_database = material_database_brain16();
        this.geometry_result = geometry_brain16();
        this.placement_result = placement_brain16();
        this.move_result = new Move();
        this.repeater_result = repeater_brain16();
        this.physics_result = physics_brain16();
        this.dataset_result = new Dataset();
        this.digitizer_result = digitizer_brain16();
        this.source_result = source_brain16();
        this.data_output_result = data_output_brain16();
        this.acquisition_result = acquisition_brain16();
        this.material_database_result = material_database_brain16();
        break;
      case 'hrrt':
        this.geometry = geometry_hrrt();
        this.placement = placement_hrrt();
        this.move = new Move();
        this.repeater = repeater_hrrt();
        this.physics = physics_hrrt();
        this.dataset = new Dataset();
        this.digitizer = digitizer_hrrt();
        this.source = source_hrrt();
        this.data_output = data_output_hrrt();
        this.acquisition = acquisition_hrrt();
        this.material_database = material_database_hrrt();
        this.geometry_result = geometry_hrrt();
        this.placement_result = placement_hrrt();
        this.move_result = new Move();
        this.repeater_result = repeater_hrrt();
        this.physics_result = physics_hrrt();
        this.dataset_result = new Dataset();
        this.digitizer_result = digitizer_hrrt();
        this.source_result = source_hrrt();
        this.data_output_result = data_output_hrrt();
        this.acquisition_result = acquisition_hrrt();
        this.material_database_result = material_database_hrrt();
        break;
      case 'mct':
        this.geometry = geometry_mct();
        this.placement = placement_mct();
        this.move = new Move();
        this.repeater = repeater_mct();
        this.physics = physics_mct();
        this.dataset = new Dataset();
        this.digitizer = digitizer_mct();
        this.source = source_mct();
        this.data_output = data_output_mct();
        this.acquisition = acquisition_mct();
        this.material_database = material_database_mct();
        this.geometry_result = geometry_mct();
        this.placement_result = placement_mct();
        this.move_result = new Move();
        this.repeater_result = repeater_mct();
        this.physics_result = physics_mct();
        this.dataset_result = new Dataset();
        this.digitizer_result = digitizer_mct();
        this.source_result = source_mct();
        this.data_output_result = data_output_mct();
        this.acquisition_result = acquisition_mct();
        this.material_database_result = material_database_mct();
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
        this.geometry_result = new Geometry();
        this.placement_result = new Placement();
        this.move_result = new Move();
        this.repeater_result = new Repeater();
        this.physics_result = new Physics();
        this.dataset_result = new Dataset();
        this.digitizer_result = new Digitizer();
        this.source_result = new SourceSub();
        this.data_output_result = new DataOutput();
        this.acquisition_result = new Acquisition();
        this.material_database_result = new MaterialDatabase();
    }
  }

  l_post(url: string) {
    this.http.post(url, {rmax: this.geometry_result.phantom.value[0].content.shape.content.rmax.num,
      height: this.geometry_result.phantom.value[0].content.shape.content.height.num}).subscribe(a => this.getMac(a));
    console.log(this.geometry_result.phantom.value[0].content.shape.content.rmax.num,
      this.geometry_result.phantom.value[0].content.shape.content.height.num);
  }

  getMac(a: object) {
    // @ts-ignore
    this.result.mac = a.mac;
    console.log(this.result.mac);
  }

  getURL() {
    return 'http://simplemacgen.azurewebsites.net/macgen?rmax=' +
      `${this.geometry_result.phantom.value[0].content.shape.content.rmax.num}` +
    `&height=${this.geometry_result.phantom.value[0].content.shape.content.height.num}`;
  }

  ngAfterContentInit() {
  }
}

