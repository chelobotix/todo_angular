import { ITask } from './task/task.model'
import { INewTask } from './new-task/newTask.model'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  constructor() {
    const tasks: string | null = localStorage.getItem('tasks')
    this.checkLocalStorage(tasks)
  }

  checkLocalStorage(tasks: string | null) {
    if (tasks !== null) {
      this.tasks = JSON.parse(tasks)
    } else {
      this.addToLocalStorage()
    }
  }

  getUserTask(user_id: string) {
    return this.tasks.filter((task: ITask) => task.userId == user_id)
  }

  addTask(task: INewTask, user_id: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: user_id,
      title: task.title,
      summary: task.summary,
      dueDate: task.date,
    })
    this.addToLocalStorage()
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task: ITask) => task.id !== id)
    this.addToLocalStorage()
  }

  private addToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}
