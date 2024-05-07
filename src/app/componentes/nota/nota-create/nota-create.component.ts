import { Component } from '@angular/core';
import { NotaCreate } from '../../../nota-create';
import { NotaService } from '../../../service/nota.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nota-create',
  templateUrl: './nota-create.component.html',
  styleUrls: ['./nota-create.component.css']
})
export class NotaCreateComponent {
  novaNota: NotaCreate = { titulo: '', anotacao: '', username: '' };
  username: string = '';

  constructor(private notaService: NotaService, private router: Router) { }

  ngOnInit(): void {
    // Carregar valor do LocalStorage ao inicializar o componente

    const usernameLocalStorage = localStorage.getItem('username');
    if (usernameLocalStorage !== null) {
      this.username = usernameLocalStorage;
    } else {
      // Tratar o caso em que a chave não existe no LocalStorage
      console.error('Chave não encontrada no LocalStorage.');
    }
  }

  adicionarNota(): void {
    if (!this.novaNota.titulo || !this.novaNota.anotacao) {
      // Verificar se os campos estão preenchidos
      alert('Por favor, preencha todos os campos.');
      return;
    }

    this.novaNota.username = this.username;

    this.notaService.adicionarNota(this.novaNota)
      .subscribe(() => {
        alert('Nota adicionada com sucesso!');
        this.novaNota = { titulo: '', anotacao: '', username: ''}; // Limpar os campos do formulário
      });
  }

  voltar(): void {
    this.router.navigate(['/nota-lista']);
  }
}
