import { Component, EventEmitter, inject, Input, Output } from '@angular/core'
import { ITask } from '../task/task.model'
import { FormsModule } from '@angular/forms'
import { INewTask } from './newTask.model'
import { TaskService } from '../tasks.service'
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) user!: IUser
  @Output() close = new EventEmitter<void>()

  private taskService = inject(TaskService)
  title = ''
  summary = ''
  date = ''

  onCancel() {
    this.close.emit()
  }

  onSubmit() {
    this.taskService.addTask(
      { title: this.title, summary: this.summary, date: this.date },
      this.user.id,
    )
    this.onCancel()
  }
}

import { IUser } from '../../user/user.model'
