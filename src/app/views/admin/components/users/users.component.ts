import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {
  public cols = [
    { field: 'name', header: 'Name' },
    { field: 'email', header: 'Email' },
    { field: 'role', header: 'Role' },
    { field: 'properties', header: 'Properties' },
    { field: 'lastLogin', header: 'Last Login' }
  ];
  public $users: Observable<any[]>;

  constructor() {}

  ngOnInit() {}

  onRowSelect(event) {
    console.log(event);
  }

  onRowDelete(event) {
    console.log(event);
  }

  onAddUser() {
    console.log();
  }
}
