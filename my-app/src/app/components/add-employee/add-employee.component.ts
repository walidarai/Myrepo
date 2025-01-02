
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../services/department.service';

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

  currentRole:string = "";


  constructor(private deptService: DepartmentService){
    this.deptService.onRoleChange$.subscribe((role:string)=>{
      this.currentRole = role
    })
    debugger;
    this.deptService.onRoleChange$.subscribe((role:string)=>{
      this.currentRole = role
    })
  }
  changeStyle(){
    this.isChange =!this.isChange;
  }
  changeMyCourseName(){
    this.coursename ="Angular Js";
  }

}