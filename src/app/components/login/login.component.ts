import { Component,OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  @ViewChild('email') cajaemail!: ElementRef;
  @ViewChild('password') cajapassword!: ElementRef;

  constructor(private _usuarioService: UsuarioService,private _router:Router) {}

  ngOnInit(): void {
    if (localStorage.getItem("token")) {
      this._router.navigate(["/perfil"]);
    }
  }
  login() {
    this._usuarioService.login(this.cajaemail.nativeElement.value,this.cajapassword.nativeElement.value).subscribe((result) => {
      localStorage.setItem("token",JSON.stringify(result.response));
      this._router.navigate(["/perfil"]);
    });
  }
}
