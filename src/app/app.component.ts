import { Component, OnInit } from '@angular/core';
import { Users } from './core/models/user.models';
import { UsersService } from './core/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'Listado de Usuarios';
  users!: Users[];
  loading: boolean;
  constructor(
    private usersService: UsersService,
  ) {
    this.loading = true;
  }

ngOnInit(): void {
   this.viewList()
   this.loading = false;

}

viewList(): void {
    this.usersService.getList().subscribe({
      next: (response: Users[]) => this.users = response,
      error: err => console.log(err),
      complete: () => console.log('Servicio satisfactorio'),
    })
}
}
