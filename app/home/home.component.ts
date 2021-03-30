import { Component, Input, Output, ViewChild } from '@angular/core';
import { EventEmitter } from 'protractor';
import { NgForm } from '@angular/forms';
import { mat } from '@angular/material';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  @ViewChild('testForm', { static: false }) testForm: NgForm;

  firstName: string;
  lastName: string;
  uid: number;
  salary: number;
  role: string;
  testobj: test;
  view: boolean;


  ngOnInit() {
    this.testobj = { firstName: '', lastName: '', uid: 0, salary: 0, role: '' };
  }

  submit() {
    this.testobj.firstName = this.firstName;
    this.testobj.lastName = this.lastName;
    this.testobj.uid = this.uid;
    this.testobj.salary = this.salary;
    this.testobj.role = this.role;

    console.log("From Parent", this.testobj);
  }
  toggle() {
   this.view = false;
  }
  Go() {
    //debugger;
    this.view = true;
  }
}


interface test{

  firstName: string;
  lastName: string;
  uid: number;
  salary: number;
  role: string;

}
