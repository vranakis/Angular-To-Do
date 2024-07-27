import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '../models/task.model';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  @Input() public task!: Task[];
  @Input() public selectedTask: number = -1;
  @Output() public taskCompleted = new EventEmitter<number>();

  doneButtonClicked(i: number) {
    this.taskCompleted.emit(i);
  }
}
