// note-form.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { NotaService } from '../service/nota.service';

@Component({
  selector: 'app-nota-form',
  templateUrl: './nota-form.component.html',
  styleUrls: ['./nota-form.component.css']
})
export class NotaFormComponent implements OnInit {
  @Input() nota: any = { titulo: '', anotacao: '' };
  isNew = true;

  constructor(private notaService: NotaService) { }

  ngOnInit(): void {
    // Lógica para verificar se é uma nova nota ou edição
  }

  submitForm(): void {
    if (this.isNew) {
     // this.notaService.create(this.nota).subscribe(() => {
        // Lógica após adicionar uma nova nota (por exemplo, redirecionar para a lista de notas)
     // });
    } else {
      this.notaService.update(this.nota).subscribe(() => {
        // Lógica após atualizar uma nota (por exemplo, redirecionar para a lista de notas)
      });
    }
  }
}
