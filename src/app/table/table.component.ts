import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '../models/task.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() public task!: Task[];
  @Output() taskClicked = new EventEmitter<number>();
  public clickedTaskNumber: number = -1;

  onClick(i: number) {
    if (this.task[i].isCompleted) {
      return;
    }

    this.taskClicked.emit(i);
    this.clickedTaskNumber = i;
  }
}
