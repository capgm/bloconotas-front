import { Component, Input, OnInit } from '@angular/core';
import { Nota } from '../nota';
import { ActivatedRoute, Router } from '@angular/router';
import { NotaService } from '../service/nota.service';

@Component({
  selector: 'app-nota-view',
  templateUrl: './nota-view.component.html',
  styleUrls: ['./nota-view.component.css'],
})
export class NotaViewComponent implements OnInit {
  notaId: number = 0;
  @Input() nota: Nota = { id: 0, titulo: '', anotacao: '' };
  constructor(
    private route: ActivatedRoute,
    private notaService: NotaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.notaId = +params['id'];

      this.notaService.getById(this.notaId).subscribe((nota) => {
        this.nota.titulo = nota.titulo;
        this.nota.anotacao = nota.anotacao;
        console.log(nota.anotacao);
      });
    });
  }


  voltar(): void {
    this.router.navigate(['/']);
  }
}
