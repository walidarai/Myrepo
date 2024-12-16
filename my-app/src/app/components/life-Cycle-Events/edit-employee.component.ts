import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, NgZoneOptions, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnChanges,OnDestroy,OnInit,DoCheck,AfterViewInit,AfterViewChecked,AfterContentChecked,AfterContentInit{


  firstName:string;

constructor(){
  console.log("Constructor")
  this.firstName = "";
}

ngOnInit(): void {
  console.log("ngOnInit")
}

ngDoCheck(): void {
  console.log("ngDoCheck")
}

ngAfterContentChecked(): void {
  console.log("ngAfterContentChecked")
}

ngAfterContentInit(): void {
  console.log("ngAfterContentInit")
}

ngAfterViewChecked(): void {
  console.log("ngAfterViewChecked")
}

ngAfterViewInit(): void {
  console.log("ngAfterViewInit")
}

ngOnChanges(changes: SimpleChanges): void {
  console.log("ngOnChanges")
}

ngOnDestroy(): void {
  console.log("ngOnDestroy")
}
}
