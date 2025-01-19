import { Component, Input } from '@angular/core';
import { UsuarioModel } from '../../models/usuario-model';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  @Input() listaUsuarios: UsuarioModel[] = [];

}
