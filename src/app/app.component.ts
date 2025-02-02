import { Component, inject } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { FormularioComponent } from "./usuario/formulario/formulario.component";
import { ListaComponent } from "./usuario/lista/lista.component";
import { UsuarioModel } from './models/usuario-model';
import { UsuarioService } from './service/usuario.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FormularioComponent, ListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  usuarioService = inject(UsuarioService);
  title = 'angular-usuarios-crud';
  
  addUsuario(usuario: UsuarioModel) {
    this.usuarioService.addUsuario(usuario);
  }
}
