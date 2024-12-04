import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component {

  studentForm = new FormGroup({
    firstName : new FormControl("",[Validators.required,Validators.minLength(4)]),
    lastName : new FormControl("",[Validators.required,Validators.minLength(4)]),
    userName : new FormControl("",[Validators.required,Validators.email]),
    city : new FormControl("",[Validators.required]),
    state : new FormControl("",[Validators.required]),
    zip : new FormControl("",[Validators.required,Validators.minLength(4)]),

  })

  formValue:any ;

  onSubmit(){
    this.formValue = this.studentForm.value
  }
}
