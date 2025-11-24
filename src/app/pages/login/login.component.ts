import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  usuario = {
    nome: '',
    senha: ''
  }

  lembrar: boolean = false;

  mensagemErro: string = '';
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Verifica se existe o parâmetro 'erro' na URL
    this.route.queryParams.subscribe(params => {
      if (params['erro'] === 'login_required') {
        this.mensagemErro = 'Você precisa estar logado para acessar essa página!';
      }
    });
  }

  login() {
    this.authService.login(this.usuario).subscribe({
      next: (response) => {
        if (this.lembrar) {
          localStorage.setItem('usuario_logado', JSON.stringify(response));
        } else {
          sessionStorage.setItem('usuario_logado', JSON.stringify(response));
        }

        this.router.navigate(["/home"]);
      },
      error: (err) => {
        alert("Login ou senha incorretos");
      }
    })
  }

}
