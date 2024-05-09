// note.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Nota } from '../nota';
import { NotaCreate } from '../nota-create';

@Injectable({
  providedIn: 'root',
})
export class NotaService {
  private notasUrl = 'http://localhost:8080/api/v1/notas'; // URL da API para notas
  constructor(private http: HttpClient) {}
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  adicionarNota(novaNota: NotaCreate): Observable<any> {

    const token = localStorage.getItem('token'); // Recupera o token do localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Cria o cabeçalho de autorização

     return this.http.post(this.notasUrl, novaNota, { headers })
      .pipe(
        catchError(this.handleError<any>('adicionarNota'))
      );
  }

  // Buscar todas as anotações
  getAll(): Observable<any[]> {
    const token = localStorage.getItem('token');
    const username =  localStorage.getItem('username'); // Recupera o token do localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Cria o cabeçalho de autorização
    let notasUrl = `${this.notasUrl}/usuario/${username}`;
    return this.http.get<any[]>(notasUrl, { headers });
  }

  // Buscar todas as anotações
  getById(id:number): Observable<Nota> {
    const token = localStorage.getItem('token'); // Recupera o token do localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Cria o cabeçalho de autorização

    let notasUrl = `${this.notasUrl}/${id}`;
    return this.http.get<Nota>(notasUrl, { headers });
  }

  // Método para obter uma única nota pelo ID
  getOne(id: number): Observable<Nota> {
    let notasUrl = `${this.notasUrl}/${id}`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Cria o cabeçalho de autorização

    return this.http
      .get<Nota>(notasUrl, { headers });
  }
  // Método para atualizar uma nota
  update(nota: Nota): Observable<any> {

    let notasUrl = `${this.notasUrl}/${nota.id}`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Cria o cabeçalho de autorização
    return this.http
      .put(notasUrl, nota, { headers })
  }

  /*this.notaService.update(this.nota.id, this.nota).subscribe(() => {
    // Lógica após atualizar uma nota (por exemplo, redirecionar para a lista de notas)
  });*/

  // Método para deletar uma nota
  delete(id: number): Observable<Nota> {
    let notasUrl = `${this.notasUrl}/${id}`;
    return this.http
      .delete<Nota>(notasUrl, this.httpOptions)
      .pipe(catchError(this.handleError<Nota>('delete')));
  }

  // Método genérico para tratamento de erros
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // Aqui você pode tratar o erro de acordo com as necessidades da sua aplicação
      return of(result as T);
    };
  }
}
