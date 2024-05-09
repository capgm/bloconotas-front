import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


interface AuthResponse {
  token: string;
  username: string;
  nome: string;
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
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  constructor(private http: HttpClient,
    private _snackBar: MatSnackBar) { }

  register() {

    const url = 'http://localhost:8080/api/v1/usuarios'; // URL da sua API de autenticação
    const body = { username: this.username, password: this.password, nome : this.nome };

    this.http.post<AuthResponse>(url, body).subscribe(
      (response) => {

        localStorage.clear();

        console.log('Login successful:', response);
        localStorage.setItem('token', response.token);
        localStorage.setItem('username', response.username);
        localStorage.setItem('nome', response.nome);
        console.log('Login successful!');

        this._snackBar.open('Usuário cadastrado com sucesso!', '', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });

      },
      (error) => {
        console.error('Login failed:', error);
        // Aqui você pode exibir uma mensagem de erro para o usuário
      }
    );
  }
}
