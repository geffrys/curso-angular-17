import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LabsComponent } from "./pages/labs/labs.component";
import { signal } from '@angular/core';
import { TasksComponent } from './pages/tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LabsComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoapp';
}
