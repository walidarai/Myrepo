import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-employee',
  standalone: true,
  imports: [],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css'
})
export class NewEmployeeComponent {

  userList:any  = [];

  constructor(private http: HttpClient){

  }

  getData(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res)=>{
      this.userList = res;
    })
  }

}
