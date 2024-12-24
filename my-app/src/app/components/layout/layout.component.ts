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

  logOut(){
    localStorage.removeItem("loginUser")
    this.router.navigateByUrl("login")
  }
}
