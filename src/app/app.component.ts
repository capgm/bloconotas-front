import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'bloconotas-front';

  constructor(private router: Router) { }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token'); // Retorna true se o token estiver presente
  }


  logout(): void {
    // Limpar LocalStorage
    localStorage.clear();
    // Redirecionar para a página inicial
    this.router.navigate(['/']); // ou para o caminho correto da página inicial
  }
}
