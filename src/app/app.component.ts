import { Component } from '@angular/core';
import {VariableArr, Volume} from './basic_class';
import {CTscanner} from './geometry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project0513';
  a = new Volume();
  b = new CTscanner();
  result: any;
}
