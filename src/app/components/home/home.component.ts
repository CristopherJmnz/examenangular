import { Component, OnInit } from '@angular/core';
import { CubosService } from 'src/app/services/cubos.service';
import Cubo from 'src/app/models/cubo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cubos!: Array<Cubo>;
  constructor(
    private _cubosService: CubosService,
  ) {}
  ngOnInit(): void {
    this.loadCubos();
  }

  loadCubos() {
    this._cubosService.getAllCubos().subscribe((result) => {
      this.cubos = result;
    });
  }
}
