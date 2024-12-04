import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  studentObj ={
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zip: '',
  }

  formsubmit:any;

  onSubmit(){
    this.formsubmit = this.studentObj
  }
  onReset(){
    
  }
}
