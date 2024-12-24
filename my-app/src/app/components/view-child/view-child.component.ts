import { AfterContentInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AlertComponent } from '../../reusable/alert/alert.component';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent implements AfterContentInit{

  @ViewChild('txt') textBox?:ElementRef

  ngAfterContentInit(): void {
    
  }

}
