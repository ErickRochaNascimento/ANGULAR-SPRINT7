import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true; // Permite o acesso
  } else {
    router.navigate(['/login']); // Redireciona para login se não estiver logado
    return false; // Bloqueia o acesso
  }
};