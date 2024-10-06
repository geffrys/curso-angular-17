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
    alert('Button clicked');
  }
  onButtonDoubleClick(){
    alert('Button double clicked');
  }

  person = {
    name: 'John Doe',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Boston',
      state: 'MA'
    }
  };
  // algunos pueden recibir eventos
  onAgeChange(event: Event) {
   console.log(event); 
  }
  // para controlar los eventos de teclado se maneja con este tipo de eventos
  onKeyDown(event: KeyboardEvent) {
    alert(`onkeydown event ${event.key}`);
  }
  onKeyUp(event: KeyboardEvent) {
    alert(`onkeyup event ${event.key}`);
  }

}
