import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  nomeUsuario : string = '';

  constructor(private router: Router) {}

  isAuthenticated(): boolean {
    if (typeof localStorage !== 'undefined') {
      return !!localStorage.getItem('token');
    } else {
      return false;
    }
  }

  logout(): void {
    // Limpar LocalStorage
    localStorage.clear();
    // Redirecionar para a página inicial
    this.router.navigate(['/']); // ou para o caminho correto da página inicial
  }

  ngOnInit(): void {

    if (typeof localStorage !== 'undefined') {
      const nomeLocalStorage = localStorage.getItem('nome');
      this.nomeUsuario = nomeLocalStorage !== null ? nomeLocalStorage : '';
    } else {
      this.nomeUsuario = '';
    }

  }
}
