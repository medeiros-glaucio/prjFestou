import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Cliente} from '../model/cliente';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteFirestoreService {

  colecaoClientes: AngularFirestoreCollection<Cliente>;
  NOME_COLECAO = 'clientes';

  constructor(private afs: AngularFirestore) {
    this.colecaoClientes = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Cliente[]> {
// usando options para idField para mapear o id gerado pelo firestore para o campo id de cliente
    return this.colecaoClientes.valueChanges({idField: 'id'});
  }

  inserir(cliente: Cliente): Observable<object> {
// removendo id pois ele está undefined, já que um novo cliente
    delete cliente.id;
// Object.assign({}, cliente) é usado para passar um objeto json puro. Não se aceita passar um objeto customizado
// o from transforma uma promise num Observable, para mantermos a assinatura similar ao do outro service
    return from(this.colecaoClientes.add(Object.assign({}, cliente)));
  }

  remover(id: string): Observable<void> {
    return from(this.colecaoClientes.doc(id).delete());
  }

  pesquisarPorId(id: string): Observable<Cliente> {
// como o objeto retornado pelo get é um DocumentData, e não um cliente, transformamos a partir de um pipe e mapeamos de um document
//  para o tipo cliente
    return this.colecaoClientes.doc(id).get().pipe(map(document => new Cliente(document.id, document.data())));
  }

  atualizar(cliente: Cliente): Observable<void> {
// removendo id pois não vamos guardar nos dados do documento, mas sim usar apenas como id para recuperar o documento
    delete cliente.id;
    return from(this.colecaoClientes.doc(cliente.id).update(Object.assign({}, cliente)));
  }

  listarMaioresDeIdade(): Observable<Cliente[]> {
    let clientesMaioresIdade: AngularFirestoreCollection<Cliente>;
// fazendo pesquisas usando o where. Um where pode ser encadeado com outro
    clientesMaioresIdade = this.afs.collection(this.NOME_COLECAO, ref => ref.where('idade', '>', '17'));
    return clientesMaioresIdade.valueChanges();
  }

}
