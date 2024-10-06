import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  imgUrl = 'https://picsum.photos/200';
  buttonValue: boolean = false;

  onButtonClick() {
    this.buttonValue = !this.buttonValue;
  }
}
