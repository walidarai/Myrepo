
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  
  coursename = "React JS"

  isChange = false;


  constructor(){

  }
  changeStyle(){
    this.isChange =!this.isChange;
  }
  changeMyCourseName(){
    this.coursename ="Angular Js";
  }
}