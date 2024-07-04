import { Component, EventEmitter, Input, Output } from '@angular/core'
import { type IUser } from './user.model'
import { CardComponent } from '../shared/card/card.component'

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user: IUser | undefined
  @Input({ required: true }) selected: boolean = false
  @Output()
  select_user = new EventEmitter<IUser>()

  get imagePath() {
    return `assets/users/${this.user?.avatar}`
  }

  onClickUser() {
    this.select_user.emit(this.user)
  }
}
