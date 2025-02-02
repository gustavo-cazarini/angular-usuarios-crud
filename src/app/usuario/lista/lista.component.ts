import { Component, inject, Input } from '@angular/core';
import { UsuarioModel } from '../../models/usuario-model';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  usuarioService = inject(UsuarioService);
}
