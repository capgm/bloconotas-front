import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotaService } from '../../../service/nota.service';
import { Nota } from '../../../nota';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nota-edit',
  templateUrl: './nota-edit.component.html',
  styleUrls: ['./nota-edit.component.css'],
})
export class NotaEditComponent implements OnInit {
  nota: Nota = { id: 0, titulo: '', anotacao: '' };

  constructor(
    private route: ActivatedRoute,
    private notaService: NotaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getNote();
  }

  getNote(): void {
    const idParm = this.route.snapshot.paramMap.get('id');
    const id = idParm ? +idParm : 0;
    this.notaService.getOne(id).subscribe((nota) => {
    console.log(nota);
      this.nota = nota;
    console.log(this.nota)
    //  this.nota.id = nota.id;
    //  this.nota.titulo = nota.titulo;
    //  this.nota.anotacao = nota.anotacao;
    });
  }

  save(): void {
    console.log(this.nota.id);
    this.notaService.update(this.nota).subscribe(() => {});
  }

  voltar(): void {
    this.router.navigate(['/nota-lista']);
  }
}
