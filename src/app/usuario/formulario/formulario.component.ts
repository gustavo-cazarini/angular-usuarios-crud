import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario-model';
import { JsonPipe } from '@angular/common';

export const dataNascValidator = (control: AbstractControl) : ValidationErrors | null => {
  let dataNasc = new Date(`${control.value} 00:00:00`);

  return dataNasc >= new Date() ? { dataInvalida: 'A data de nascimento deve ser menor que a atual' } : null;
};

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
    id: new FormControl<number | null>(null, [Validators.required, Validators.pattern(/^[0-9]+$/)]),
    nome: new FormControl<string | null>(null, Validators.required),
    sobrenome: new FormControl<string | null>(null, Validators.required),
    email: new FormControl<string | null>(null, [
      Validators.required,
      Validators.email
    ]),
    dataNascimento: new FormControl<string | null>(null, { validators: [dataNascValidator]}),
    escolaridade: new FormControl<number | null>(null, Validators.required)
  });

  salvaDados() {
    if (this.formUsuario.invalid) {
      alert('erro');
      return;

    }

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


  // VALIDAÇÕES

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
