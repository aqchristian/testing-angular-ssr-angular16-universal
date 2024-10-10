import { Component } from '@angular/core';
import { UserService } from '../../../core/services-api/user.service';
import { Observable } from 'rxjs';
import { UserInterface } from '../../../core/models/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users$: Observable<Array<UserInterface>>;
  loadingSkeletons = Array(3).fill(0);

  constructor(private userService: UserService) {
    this.users$ = this.userService.getUsers();
  }
}
