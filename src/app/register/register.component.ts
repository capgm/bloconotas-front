import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


interface AuthResponse {
  token: string;
  username: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  nome: string = '';


  constructor(private http: HttpClient) { }

  register() {

    const url = 'http://localhost:8080/api/v1/usuarios'; // URL da sua API de autenticação
    const body = { username: this.username, password: this.password, nome : this.nome };

    this.http.post<AuthResponse>(url, body).subscribe(
      (response) => {

        localStorage.clear();

        console.log('Login successful:', response);
        localStorage.setItem('token', response.token);
        localStorage.setItem('username', response.username);
        console.log('Login successful!');
      },
      (error) => {
        console.error('Login failed:', error);
        // Aqui você pode exibir uma mensagem de erro para o usuário
      }
    );
  }
}
