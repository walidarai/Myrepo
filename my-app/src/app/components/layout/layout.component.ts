import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet,Router} from '@angular/router';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  selectedRole:string = "";
  router =inject(Router)

  loggedUserData: any;

  constructor(private depService: DepartmentService){
    const loggedData = localStorage.getItem("loginUser");
    if(loggedData != null){
      this.loggedUserData = JSON.parse(loggedData)
    }
  }

  logOut(){
    localStorage.removeItem("loginUser")
    this.router.navigateByUrl("login")
  }

  onRoleChange(role:string){
    this.depService.onRoleChange$.next(role)
    this.depService.onRoleChange$.next(role)
  }
}
