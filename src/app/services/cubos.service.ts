import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class CubosService{

    constructor(private _http:HttpClient){}

    getAllCubos():Observable<any>{
        let url=environment.urlApi + "api/cubos"
        return this._http.get(url);
    }

    getAllMarcas():Observable<any>{
        let url=environment.urlApi + "api/cubos/marcas"
        return this._http.get(url);
    }

    getCubosPorMarca(marca:string):Observable<any>{
        let url=environment.urlApi + "api/cubos/cubosmarca/" + marca
        return this._http.get(url);
    }

    findCuboById(id:number | string):Observable<any>{
        let url=environment.urlApi + "api/cubos/" + id
        return this._http.get(url);
    }

    getComentariosCubo(id:number | string):Observable<any>{
        let url=environment.urlApi + "api/comentarioscubo/getcomentarioscubo/" + id;
        return this._http.get(url);
    }
}
