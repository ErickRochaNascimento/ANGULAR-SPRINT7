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

  constructor(private http:HttpClient, private router: Router ) { }

  login(usuario:Pick<Usuario, 'nome'|'senha'>):Observable<Usuario>{
    return this.http.post<Usuario>(`${this.apiUrl}/login`,usuario)
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey); // Remove o token
    this.router.navigate(['/login']);      // Redireciona para a tela de login
  }
}
