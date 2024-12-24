import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  getAllDepartment(){
    return this.http.get(Constant.API_URL + Constant.DEPARTMENT_METHODS.ADD_NEW_DEPT)
  }

  saveNew(obj:any){
    return this.http.post(Constant.API_URL + Constant.DEPARTMENT_METHODS.GET_PARENT_DEPT,obj)
  }
}
