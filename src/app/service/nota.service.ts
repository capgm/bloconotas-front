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

     return this.http.post(this.notasUrl, novaNota, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('adicionarNota'))
      );
  }

  // Buscar todas as anotações
  getAll(): Observable<any[]> {
    const token = localStorage.getItem('token'); // Recupera o token do localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Cria o cabeçalho de autorização

    return this.http.get<any[]>(this.notasUrl, { headers });
    //return this.http.get<any[]>(this.apiUrl);
  }

  // Método para obter todas as notas
  /*getAll(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.notasUrl)
      .pipe(
        catchError(this.handleError<Nota[]>('getAll', []))
      );
  }*/

  // Método para obter uma única nota pelo ID
  getOne(id: number): Observable<Nota> {
    const url = `${this.notasUrl}/${id}`;
    return this.http
      .get<Nota>(url)
      .pipe(catchError(this.handleError<Nota>('getOne')));
  }
  // Método para atualizar uma nota
  update(nota: Nota): Observable<any> {
    const url = `${this.notasUrl}/${nota.id}`; // Construindo a URL com o ID da nota
    return this.http
      .put(url, nota, this.httpOptions)
      .pipe(catchError(this.handleError<any>('update')));
  }

  /*this.notaService.update(this.nota.id, this.nota).subscribe(() => {
    // Lógica após atualizar uma nota (por exemplo, redirecionar para a lista de notas)
  });*/

  // Método para deletar uma nota
  delete(id: number): Observable<Nota> {
    const url = `${this.notasUrl}/${id}`;
    return this.http
      .delete<Nota>(url, this.httpOptions)
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
