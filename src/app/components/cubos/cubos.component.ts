import { Component, OnInit } from '@angular/core';
import { CubosService } from 'src/app/services/cubos.service';
import { ActivatedRoute, Params } from '@angular/router';
import Cubo from 'src/app/models/cubo';

@Component({
  selector: 'app-cubos',
  templateUrl: './cubos.component.html',
  styleUrls: ['./cubos.component.css'],
})
export class CubosComponent implements OnInit {
  cubos!:Array<Cubo>
  marca!:string;
  constructor(
    private _activeRoute: ActivatedRoute,
    private _cubosService: CubosService,
  ) {}
  ngOnInit(): void {
    this.loadCubos();
  }

  loadCubos() {
    this._activeRoute.params.subscribe((params: Params) => {
      this.marca = params['marca'];
      this._cubosService.getCubosPorMarca(this.marca).subscribe(result=>{
        this.cubos=result;
      })
    });
  }
}
