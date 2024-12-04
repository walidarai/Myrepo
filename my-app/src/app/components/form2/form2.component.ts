import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component {

  studentForm = new FormGroup({
    firstName : new FormControl(),
    lastName : new FormControl(),
    userName : new FormControl(),
    city : new FormControl(),
    state : new FormControl(),
    zip : new FormControl(),

  })

  formValue:any ;

  onSubmit(){
    this.formValue = this.studentForm.value
  }
}
