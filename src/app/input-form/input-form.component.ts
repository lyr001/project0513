import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  @Input() type: string;
  @Input()
  get default(): any { return this.result; }
  set default(r: any) {
    this.result = r;
  }
  @Output() getInput = new EventEmitter();
  result: any;

  constructor() { }

  ngOnInit() {
    // this.result =  this.default;
  }

  get_input(value: any) {
    this.getInput.emit(value);
  }

  getType(item) {
    return Object.prototype.toString.call(item);
  }

  getSubclass(item) {
    return item.subclass;
  }

}


