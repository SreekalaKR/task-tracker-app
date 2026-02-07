import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  api = 'http://localhost:3000/api/tasks';

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<any[]>(this.api);
  }

  createTask(title: string) {
    return this.http.post(this.api, { title });
  }

  updateStatus(id: string, status: string) {
    return this.http.put(`${this.api}/${id}/status`, { status });
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.api}/${id}`);
  }
  
}
