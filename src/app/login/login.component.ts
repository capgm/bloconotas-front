import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


interface AuthResponse {
  token: string;
  username: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient) { }

  login() {
    const url = 'http://localhost:8080/api/v1/auth'; // URL da sua API de autenticação
    const body = { username: this.username, password: this.password };

    this.http.post<AuthResponse>(url, body).subscribe(
      (response) => {
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
