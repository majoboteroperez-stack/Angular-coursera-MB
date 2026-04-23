import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn() { return true; } // Punto 1: Servicio que verifica login
}

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Punto 1: El Guard usa el servicio
    if (this.auth.isLoggedIn()) return true;
    this.router.navigate(['/login']);
    return false;
  }
}
// En el routing se pondría: { path: 'admin', component: AdminComp, canActivate: [AuthGuard] }
