import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  getAllDepartment(){
    return this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment")
  }

  saveNew(obj:any){
    return this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",obj)
  }
}
