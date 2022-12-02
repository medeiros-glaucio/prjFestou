export class Cliente {
  id?: string;
  idade?: number;
  nome?: string;
  telefone?: string;
  email?: string;

  constructor(id?: string, cliente: Cliente = {}) {
    this.id = id;
    this.idade = cliente.idade;
    this.nome = cliente.nome;
    this.telefone = cliente.telefone;
    this.email = cliente.email;
  }
}
