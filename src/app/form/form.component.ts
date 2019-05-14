import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() // default: object | undefined;
  get default(): object | undefined { return this.result; }
  set default(r: object | undefined) {
    this.result = r;
  }
  @Output() getInput = new EventEmitter();
  result: object | undefined;

  constructor() { }

  ngOnInit() {
    // this.result = this.default;
  }

  get_input(value: object) {
    this.getInput.emit(value);
  }

  getKeys(item) {
    return Object.keys(item);
  }

  getType(item) {
    return Object.prototype.toString.call(item);
  }

  getSubclass(item) {
    return item.subclass;
  }

}
