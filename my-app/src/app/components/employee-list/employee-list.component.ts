
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  isDiv1Visilble = true;
  isActive =true;

  cityArray = ['Mumbai','Pune','Delhi','Bangalre','Goa','Thane']

  arrayObject = [
    {name:"walid", age:"23", contact:"9156009959", address:"Mumbai",percentage:"12"},
    {name:"abc", age:"23", contact:"2817e18e9", address:"Mumbai",percentage:"54"},
    {name:"qwe", age:"23", contact:"873873", address:"Mumbai",percentage:"78"},
    {name:"nscb", age:"23", contact:"988888888", address:"Mumbai",percentage:"99"},
    {name:"cmnd", age:"23", contact:"993999393", address:"Mumbai",percentage:"20"},
    {name:"mkkk", age:"23", contact:"0200202", address:"Mumbai",percentage:"44"},
    {name:"km", age:"23", contact:"00000000", address:"Mumbai",percentage:"100"}
  ]

  toggleButton(){
    this.isDiv1Visilble = !this.isDiv1Visilble;
  }

  changeColor(){
    this.isActive=!this.isActive;
  }
}
