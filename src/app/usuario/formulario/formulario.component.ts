import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario-model';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  @Output() novoUsuarioEvent = new EventEmitter();

  formUsuario = new FormGroup({
    id: new FormControl<number | null>(null),
    nome: new FormControl<string | null>(null),
    sobrenome: new FormControl<string | null>(null),
    email: new FormControl<string | null>(null),
    dataNascimento: new FormControl<string | null>(''),
    escolaridade: new FormControl<number | null>(null)
  });

  salvaDados() {
    let usuario = new UsuarioModel(
      this.formUsuario.value.id ?? 0,
      this.formUsuario.value.nome ?? '',
      this.formUsuario.value.sobrenome ?? '',
      this.formUsuario.value.email ?? '',
      this.getDataNasc(),
      this.formUsuario.value.escolaridade ?? 0
    );

    if(this.usuarioValido(usuario))
      this.novoUsuarioEvent.emit(usuario);
  }

  usuarioValido(usuario: UsuarioModel): boolean {
    let msgErr: string = ""

    if(!usuario.isDataNascValida())
      msgErr += "- A data de nascimento informada é inválida!\n"

    if(!usuario.isEmailValido())
      msgErr += "- O email informado não é válido"

    if(msgErr.length > 0)
      alert(msgErr);

    return msgErr.length === 0;
  }

  getDataNasc(): Date {
    if(this.formUsuario.value.dataNascimento === null) {
      return new Date();

    }
    else {
      let auxDataStr: string = this.formUsuario.value.dataNascimento ?? '';
      auxDataStr += ' 00:00:00';

      return new Date(auxDataStr);

    }

  }
}
