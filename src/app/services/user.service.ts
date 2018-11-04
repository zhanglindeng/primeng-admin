import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  async getProfile() {
    return await {username: 'Tom', age: 32};
  }
}
