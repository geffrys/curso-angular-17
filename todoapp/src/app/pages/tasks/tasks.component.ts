import { Component, signal } from '@angular/core';
import { Todo } from '../../models/todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks = signal<Todo[]>([
    {
      id: 1,
      title: 'Task 1',
      completed: false
    },
    {
      id: 2,
      title: 'Task 2',
      completed: true
    },
    {
      id: 3,
      title: 'Task 3',
      completed: false
    }
  ]);

  addTask(event: Event) {
    event.preventDefault();
    const input = event.target as HTMLInputElement;
    const task = {
      id: this.tasks().length + 1,
      title: input.value,
      completed: false
    }
    this.tasks.update(tasks => [...tasks, task]);
    input.value = '';
  }

  deleteTask(index: number) {
    this.tasks.update(tasks => tasks.filter((_, i) => i !== index));

  }

  updateTask(index: number) {
    this.tasks.update(tasks => tasks.map((task, i) => {
      if (i === index) {
        task.completed = !task.completed;
      }
      return task;
    }));
  }

}
