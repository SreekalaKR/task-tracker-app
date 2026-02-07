import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent {
  title = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (!this.title) return;

    this.taskService.createTask(this.title).subscribe(() => {
      this.title = '';
      window.location.reload();
    });
  }
}
