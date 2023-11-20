import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CubosService } from 'src/app/services/cubos.service';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Cubo from 'src/app/models/cubo';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css'],
})
export class CompraComponent implements OnInit {
  cubos!: Array<Cubo>;
  @ViewChild('idcubo') cajaid!: ElementRef;
  constructor(
    private _cubosService: CubosService,
    private _usuarioService: UsuarioService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this.loadCubos();
  }

  loadCubos(): void {
    this._cubosService.getAllCubos().subscribe((result) => {
      this.cubos = result;
    });
  }

  realizarPedido(): void {
    this._usuarioService
      .realizarPedido(this.cajaid.nativeElement.value)
      .subscribe(() => {
        this._router.navigate(["/perfil"]);
        alert("Pedido realizado correctamente")
      });
  }
}
