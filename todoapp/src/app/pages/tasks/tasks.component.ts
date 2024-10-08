import { Component, signal } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks = signal([
    new Todo('Task 1', false),
    new Todo('Task 2', true),
    new Todo('Task 3', false)
  ]);

}
