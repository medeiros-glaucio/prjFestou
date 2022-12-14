import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../shared/model/cliente';
import {ActivatedRoute} from '@angular/router';
import {ClienteService} from '../../shared/services/cliente.service';
import {ClienteFirestoreService} from "../../shared/services/cliente-firestore.service";

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {

  clienteAtual: Cliente;

  inserindo: boolean = true;
  nomeBotao: string = 'Inserir';

  constructor(private rotaAtual: ActivatedRoute, private clienteService: ClienteFirestoreService) {
    this.clienteAtual = new Cliente('');
    if (rotaAtual.snapshot.paramMap.has('id')) {
      const idParaEdicao = rotaAtual.snapshot.paramMap.get('id');
      if (idParaEdicao) {
        this.inserindo = false;
        this.nomeBotao = 'Atualizar';
        const clienteEncontrado = this.clienteService.pesquisarPorId(idParaEdicao).subscribe(
          clienteEncontrado => this.clienteAtual = clienteEncontrado
        );
      }
    }
  }

  ngOnInit() {
  }

  inserirOuAtualizarCliente() {
    if (this.inserindo) {
      this.clienteService.inserir(this.clienteAtual).subscribe(
        clienteInserido => console.log(clienteInserido)
      );
      this.clienteAtual = new Cliente('');
    } else {
      this.clienteService.atualizar(this.clienteAtual).subscribe(
        clienteAtualizado => console.log(clienteAtualizado)
      )
    }
  }

  atualizaNome(novoNome: string) {
    this.clienteAtual.nome = novoNome;
  }
}
