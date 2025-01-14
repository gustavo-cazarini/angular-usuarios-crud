import { Escolaridade } from "../enums/escolaridade";

export interface Usuario {
    id: number;
    nome: string;
    sobrenome: string;
    email: string;
    dataNascimento: Date;
    escolaridade: Escolaridade;
}