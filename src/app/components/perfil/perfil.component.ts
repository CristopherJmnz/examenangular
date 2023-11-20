import { Component,OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  user!:Usuario;
  pedidos!:Array<Pedido>;

  constructor(private _usuarioService: UsuarioService) {
    
  }

  ngOnInit(): void {
    this.findUsuario();
  }

  findUsuario():void{
    this._usuarioService.getPerfilUser().subscribe(result=>{
      this.user=result;
    })
  }

  historialCompras():void{
    this._usuarioService.getCompras().subscribe(result=>{
      this.pedidos=result;
    })
  }

}
