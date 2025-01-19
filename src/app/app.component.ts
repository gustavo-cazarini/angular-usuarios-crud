import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { FormularioComponent } from "./usuario/formulario/formulario.component";
import { ListaComponent } from "./usuario/lista/lista.component";
import { UsuarioModel } from './models/usuario-model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FormularioComponent, ListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-usuarios-crud';
  listaUsuarios: UsuarioModel[] = [];
  //listaUsuarios: UsuarioModel[] = [new UsuarioModel(0, 'John', 'Doe', 'johndoe@email.com', new Date(), 4)];

  addUsuario(usuario: UsuarioModel) {
    this.listaUsuarios.push(usuario);
  }
}
