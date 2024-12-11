import { HttpClient } from '@angular/common/http';
import { Component,inject,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../services/department.service';
import { AlertComponent } from "../../reusable/alert/alert.component";
import { MyButtonComponent } from "../../reusable/my-button/my-button.component";

@Component({
  selector: 'app-new-employee',
  standalone: true,
  imports: [FormsModule, AlertComponent, MyButtonComponent],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css'
})
export class NewEmployeeComponent implements OnInit {

  userList:any  = [];
  depList:any  = [];

  // http = inject(HttpClient)

  constructor(private depSrv:DepartmentService,private http :HttpClient){

  }

  ngOnInit(): void {
    this.getDep();
  }

  getData(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res)=>{
      this.userList = res;
    })
  }

  depData:any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  }

  // onSave(){
  //   this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.depData).subscribe((res:any)=>{
  //     if(res.result){
  //       alert("Data Sent Sucessfully")
  //       this.getDep()
  //     }else{
  //       alert(res.message)
  //     }
  //   })
  // }

  // getDep(){
  //   this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
  //     this.depList=res.data;
  //   })
  // }

  getEdit(data : any){
    this.depData = data;
  }
  
  onDelete(id:number){
    this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId="+id).subscribe((res:any)=>{
      if(res.result){
        alert("Data Deleted Sucessfully")
        this.getDep()
      }else{
        alert(res.message)
      }
    })
  }
  
  onUpdate(){
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", this.depData).subscribe((res:any)=>{
      if(res.result){
        alert("Data Updated Sucessfully")
        this.getDep()
      }else{
        alert(res.message)
      }
    })
  }

  getDep(){
    this.depSrv.getAllDepartment().subscribe((res:any)=>{
      this.depList=res.data;
    })
  }
  onSave(){
    this.depSrv.saveNew(this.depData).subscribe((res:any)=>{
      if(res.result){
        alert("Data Sent Sucessfully")
        this.getDep()
      }else{
        alert(res.message)
      }
    })
  }
}
