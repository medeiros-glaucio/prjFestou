export class Cliente {
  id: string;
  idade: number;
  nome: string;
  telefone: string;
  email: string;

  constructor(id: string, idade: number, nome: string, telefone: string, email: string) {
    this.id = id;
    this.idade = idade;
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
  }
}
