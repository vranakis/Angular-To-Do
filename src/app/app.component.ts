import { Component } from '@angular/core';

import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public task: Task[] = [
    { name: 'Clean up the room', isCompleted: false },
    { name: 'Wash the dishes', isCompleted: false },
    { name: 'Do the laundry', isCompleted: false },
    { name: 'Do the laundry 2', isCompleted: false }
  ];

  public clickedTask: number = -1;

  enableButton(clickedTask: number) {
    this.clickedTask = clickedTask;
  }

  public areAllTasksCompleted(): boolean {
    const isComplete = (tsk: Task) => tsk.isCompleted;

    return this.task.every(isComplete);
  }

  completedTask(i: number) {
    this.task[i].isCompleted = true;
  }

  setSelectedTask(i: number) {
    this.clickedTask = i;
  }
}
