import { NgModule } from '@angular/core';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ListagemClienteComponent } from './listagem-cliente/listagem-cliente.component';
import {NgMaterialModule} from "../ng-material/ng-material.module";
import { PipesModule } from '../shared/pipes/pipes.module';
import { CadastroListagemComponent } from './cadastro-listagem/cadastro-listagem.component';

@NgModule({
  declarations: [
    CadastroClienteComponent,
    ListagemClienteComponent,
    CadastroListagemComponent
  ],
  imports: [
    NgMaterialModule,
    PipesModule
  ],
  exports: [
    CadastroClienteComponent,
    ListagemClienteComponent,
    CadastroListagemComponent
  ]
})
export class ClienteModule { }
