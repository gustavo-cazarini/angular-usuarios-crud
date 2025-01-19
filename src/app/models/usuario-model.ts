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

        let temp: Date = new Date(this.dataNascimento);
        temp.setHours(0, 0, 0, 0);

        return temp < hoje;
    }

    getDataNascFormatada(): string {
        const dia = String(this.dataNascimento.getDate()).padStart(2, '0');
        const mes = String(this.dataNascimento.getMonth() + 1).padStart(2, '0');
        const ano = this.dataNascimento.getFullYear()
        
        return `${dia}/${mes}/${ano}`;
    }

    getEscolaridadeFormatada(): string {
        switch (Number.parseInt(this.escolaridade.toString())) {
            case Escolaridade.Infantil:
                return 'Infantil';
        
            case Escolaridade.Fundamental:
                return 'Fundamental';

            case Escolaridade.Medio:
                return 'Médio';
                        
            case Escolaridade.Superior:
                return 'Superior';

            default:
                return '...';
        }
    }

}
