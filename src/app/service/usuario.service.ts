import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario-model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {  
  public usuarioLista: UsuarioModel[] = [];
  //public usuarioLista: UsuarioModel[] = [new UsuarioModel(0, 'John', 'Doe', 'johndoe@email.com', new Date(), 4)];

  addUsuario(usuario: UsuarioModel) {
    if (usuario) {
      this.usuarioLista.push(usuario);
    }
  }
}
