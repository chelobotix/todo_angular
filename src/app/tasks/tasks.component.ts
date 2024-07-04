import { Component, Input } from '@angular/core'
import { TaskComponent } from './task/task.component'
import { dummyTasks } from '../dummy-task'
import { type ITask } from './task/task.model'
import { type IUser } from '../user/user.model'
import { NgForOf } from '@angular/common'
import { NewTaskComponent } from './new-task/new-task.component'
import { INewTask } from './new-task/newTask.model'
import { TaskService } from './tasks.service'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NgForOf, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() user!: IUser

  newTaskVisible = false

  constructor(private taskService: TaskService) {}

  get user_tasks() {
    return this.taskService.getUserTask(this.user.id)
  }

  onStartAddTask() {
    this.newTaskVisible = true
  }

  onCloseAddTask() {
    this.newTaskVisible = false
  }
}
