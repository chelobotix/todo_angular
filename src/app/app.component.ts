import { Component } from '@angular/core'
import { HeaderComponent } from './header/header.component'
import { UserComponent } from './user/user.component'
import { TasksComponent } from './tasks/tasks.component'
import { DUMMY_USERS } from './dummy-user'
import { type IUser } from './user/user.model'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS
  targetUser: IUser | undefined

  get selectedUser() {
    return this.users.find((user: IUser) => user === this.targetUser)
  }

  onSelectUser(user: IUser) {
    this.targetUser = user
  }
}
