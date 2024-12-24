import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userData:any= {
    userName: '',
    password:''
  }
  router = inject(Router)

  http  = inject(HttpClient)


  onLogin(){

    this.http.post("https://projectapi.gerasim.in/api/BudgetPlanner/login",this.userData).subscribe((res:any)=>{
      if(res.result){
          alert("Login Success");
          localStorage.setItem("loginUser",JSON.stringify(res.data));
          this.router.navigateByUrl("add-emp")
      }else{
        alert(res.message)
      }
    })
    // if(this.userData.userName == "admin" && this.userData.password == "1234"){
    //   alert("Login Success");
    //   localStorage.setItem("loginUser",this.userData.userName)
    //   this.router.navigateByUrl("add-emp")
    // }else{
    //   alert("Please Enter Valid Credentials")
    // }
  }

}
