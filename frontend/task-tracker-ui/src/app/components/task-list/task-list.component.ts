import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  nextStatus(task: any) {
    const order = ['TODO', 'IN_PROGRESS', 'DONE'];
    const next = order[order.indexOf(task.status) + 1];
    if (!next) return;

    this.taskService.updateStatus(task._id, next).subscribe(() => {
      this.loadTasks();
    });
  }

  deleteTask(id: string) {
    console.log('Delete clicked for ID:', id);
  
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        console.log('Delete success');
        this.loadTasks();
      },
      error: (err) => {
        console.error('Delete failed', err);
      }
    });
  }
  
}
