import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/shared/models/users.model';
import { UsersService } from 'src/app/users/services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  users: Users[] = [];
  displayedColumns = ['id', 'name', 'email', 'profile', 'status', 'action'];

  constructor(private readonly userService: UsersService) {}

  ngOnInit(): void {
    this.userService.read().subscribe((users) => {
      this.users = users;
    });
  }
}
