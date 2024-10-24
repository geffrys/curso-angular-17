import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LabsComponent } from "./pages/labs/labs.component";
import { signal } from '@angular/core';
import { TasksComponent } from './pages/tasks/tasks.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LabsComponent, TasksComponent, CommonModule, ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoapp';
}
