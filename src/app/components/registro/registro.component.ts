import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  @ViewChild('email') cajaemail!: ElementRef;
  @ViewChild('password') cajapassword!: ElementRef;
  @ViewChild('nombre') cajanombre!: ElementRef;

  constructor(private _usuarioService: UsuarioService,private _router:Router) {}

  registro() {
    let usuario=new Usuario(
      0,
      this.cajanombre.nativeElement.value,
      this.cajaemail.nativeElement.value,
      this.cajapassword.nativeElement.value,
    )
    this._usuarioService.registroUser(usuario).subscribe(() => {
      this._router.navigate(["/login"]);
      alert("Registro realizado")
    });
  }
}
