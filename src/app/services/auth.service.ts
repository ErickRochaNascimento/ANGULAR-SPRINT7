import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "http://localhost:3001";
  private tokenKey = 'authToken';

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario: Pick<Usuario, 'nome' | 'senha'>): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/login`, usuario)
  }

  isAuthenticated(): boolean {
    // Verifica se existe um token ou dados do usuário no localStorage
    // Retorna true se existir, false se não.
    if (typeof localStorage !== 'undefined' && typeof sessionStorage !== 'undefined') {
      return !!localStorage.getItem('usuario_logado') || !!sessionStorage.getItem('usuario_logado');
    }
    return false;
  }


  logout(): void {
    localStorage.removeItem(this.tokenKey); // Remove o token
    this.router.navigate(['/login']);      // Redireciona para a tela de login
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('usuario_logado');
      sessionStorage.removeItem('usuario_logado'); // Limpa também a sessão
    }
  }
}
