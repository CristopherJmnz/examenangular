import { Component,OnInit } from '@angular/core';
import { CubosService } from 'src/app/services/cubos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  marcas!:Array<string>

  constructor(private _cubosservice:CubosService) {
    
  }
  ngOnInit(): void {
    this.loadMarcas();
  }

  loadMarcas(){
    this._cubosservice.getAllMarcas().subscribe(result=>{
      this.marcas=result;
    })
  }

  cerrarSesion(){
    localStorage.removeItem("token");
    alert("Sesion cerrada")
  }
}
