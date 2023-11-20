import { Component, OnInit } from '@angular/core';
import { CubosService } from 'src/app/services/cubos.service';
import { ActivatedRoute, Params } from '@angular/router';
import Cubo from 'src/app/models/cubo';
import { Comentario } from 'src/app/models/comentario';

@Component({
  selector: 'app-detallescubo',
  templateUrl: './detallescubo.component.html',
  styleUrls: ['./detallescubo.component.css'],
})
export class DetallescuboComponent implements OnInit {
  cubo!: Cubo;
  comentarios!:Array<Comentario>
  constructor(
    private _activeRoute: ActivatedRoute,
    private _cubosService: CubosService
  ) {}

  ngOnInit(): void {
    this.findCubo();
  }

  findCubo() {
    this._activeRoute.params.subscribe((params: Params) => {
      let id = params['id'];
      this._cubosService.findCuboById(id).subscribe((result) => {
        this.cubo = result;
      });
      this._cubosService.getComentariosCubo(id).subscribe((result) => {
        this.comentarios = result;
      });
    });
  }

}
