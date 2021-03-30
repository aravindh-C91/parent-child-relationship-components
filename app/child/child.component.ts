import { Component, Input, Output ,EventEmitter} from '@angular/core';
//import { EventEmitter } from '@angular/forms';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  @Input() testobj: test;
  @Output() togglevieweeee: EventEmitter<void> = new EventEmitter<void>();
  ngOnInit() {
    console.log("From Child",this.testobj);
  }
  emit() {
    this.togglevieweeee.emit();
  }
}
interface test {

  firstName: string;
  lastName: string;
  uid: number;
  salary: number;
  role: string;

}
