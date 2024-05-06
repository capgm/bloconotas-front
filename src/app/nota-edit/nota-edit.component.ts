import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotaService } from '../service/nota.service';
import { Nota } from '../nota';

@Component({
  selector: 'app-nota-edit',
  templateUrl: './nota-edit.component.html',
  styleUrls: ['./nota-edit.component.css']
})
export class NotaEditComponent implements OnInit {
  nota: Nota = { id: 0, titulo: '', anotacao: '' };

  constructor(private route: ActivatedRoute, private notaService: NotaService) { }

  ngOnInit(): void {
    this.getNote();
  }

  getNote(): void {
    const idParm = this.route.snapshot.paramMap.get('id');
    const id = idParm ? +idParm : 0;
    this.notaService.getOne(id).subscribe(nota => this.nota = nota);
  }

  save(): void {
    this.notaService.update(this.nota).subscribe(() => {
      // Lógica para redirecionar de volta para a lista de notas após a edição
    });
  }
}