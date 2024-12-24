import { Component,inject } from '@angular/core';
import { RouterLink, RouterOutlet,Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  router =inject(Router)

  loggedUserData: any;

  constructor(){
    const loggedData = localStorage.getItem("loginUser");
    if(loggedData != null){
      this.loggedUserData = JSON.parse(loggedData)
    }
  }

  logOut(){
    localStorage.removeItem("loginUser")
    this.router.navigateByUrl("login")
  }
}
