import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild("email") cajaemail!:ElementRef;
  @ViewChild("password") cajapassword!:ElementRef;

  constructor(private _usuarioService:UsuarioService) {
    
  }

  login(){
    this._usuarioService.login()
  }

}
