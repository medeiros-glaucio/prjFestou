import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../shared/model/cliente';
import {Router} from '@angular/router';
import {ClienteService} from '../../shared/services/cliente.service';
import {ClienteFirestoreService} from "../../shared/services/cliente-firestore.service";

@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-cliente.component.html',
  styleUrls: ['./listagem-cliente.component.scss']
})
export class ListagemClienteComponent implements OnInit {

  clientes: Cliente[];
  clientesMaioresDeIdade: Cliente[];

  constructor(private roteador: Router, private clienteService: ClienteFirestoreService) {
    this.clientes = new Array<Cliente>();
    this.clientesMaioresDeIdade = new Array<Cliente>();
  }

  ngOnInit(): void {
    this.clienteService.listar().subscribe(
      clientesRetornados => this.clientes = clientesRetornados
    );
    this.clientesMaioresDeIdade.listarMaioresDeIdade().subscribe(
      clientesMaiores => this.clientesMaioresDeIdade = clientesMaiores
    )
  }

  removerCliente(clienteARemover: Cliente): void {
    this.clienteService.apagar(clienteARemover.id).subscribe(
      removido => {
        console.log(removido);
        const indxCliente = this.clientes.findIndex(u => u.id === clienteARemover.id);

        if (indxCliente > -1) {
          this.clientes.splice(indxCliente, 1);
        }

      }
    );
  }

}

