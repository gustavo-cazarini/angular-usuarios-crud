import { Escolaridade } from "../enums/escolaridade";
import { Usuario } from "../interfaces/usuario";

export class UsuarioModel implements Usuario {
    id: number;
    nome: string;
    sobrenome: string;
    email: string;
    dataNascimento: Date;
    escolaridade: Escolaridade;
    
    constructor(id: number, nome: string, sobrenome: string, email: string, dataNascimento: Date, escolaridade: Escolaridade) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.escolaridade = escolaridade;
    }

    isEmailValido(): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        return emailRegex.test(this.email);
    }

    isDataNascValida(): boolean {
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);

        return this.dataNascimento < hoje;
    }

}
