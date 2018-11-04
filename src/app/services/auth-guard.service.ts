import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate() {
    const token = sessionStorage.getItem('token');
    if (token && token.length > 0) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
