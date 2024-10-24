import { Component, signal } from '@angular/core';
import { Todo } from '../../models/todo';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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

  taskField: FormControl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required
    ]
  });

  addTask() {
    if(this.taskField.invalid){
      return;
    }
    const taskDescription = this.taskField.value.trim();
    console.log(taskDescription);
    
    if (taskDescription == '') {
      return;
    }
    this.tasks.update(tasks => [
      ...tasks,
      {
        id: tasks.length + 1,
        title: taskDescription,
        completed: false
      }
    ]);
    this.taskField.reset();
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
