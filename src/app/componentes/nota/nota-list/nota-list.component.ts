// note-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotaService } from '../../../service/nota.service';

@Component({
  selector: 'app-nota-list',
  templateUrl: './nota-list.component.html',
  styleUrls: ['./nota-list.component.css']
})
export class NotaListComponent implements OnInit {
  notas: any[] = [];

  constructor(private notaService: NotaService, private router: Router) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.notaService.getAll().subscribe(notas => {
      this.notas = notas
    } );
  }

  visualizar(id: number): void {
    this.router.navigate(['/nota-view', id]);
  }

  edit(id: number): void {
    this.router.navigate(['/nota-edit', id]);
  }

  delete(id: number): void {

    this.notaService.delete(id).subscribe(() => {

      this.notas = this.notas.filter(nota => nota.id !== id);
    });
  }

  voltar(): void {
    //this.router.navigate(['/home']);
  }
}
