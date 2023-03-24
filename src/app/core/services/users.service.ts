import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../models/user.models';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  api_url = environment.API_BASE;
  constructor(private http: HttpClient) {}

  getList(): Observable<Users[]> {
    return this.http.get<Users[]>(this.api_url);
  }
}
