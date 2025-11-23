import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AuthService } from '../../services/auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  // Injetar o serviço no construtor
  constructor(private authService: AuthService) {}

  // Função chamada pelo botão no HTML
  sair(): void {
    this.authService.logout();
  }

}
