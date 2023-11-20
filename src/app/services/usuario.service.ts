import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable()
export class UsuarioService {
  constructor(private _http: HttpClient) {}

  login(email:string,password:string):Observable<any> {
    let user={
        email:email,
        password:password
    }
    let url = environment.urlApi + 'api/manage/login';
    return this._http.post(url,user);
  }

  getPerfilUser():Observable<any> {
    let url = environment.urlApi + 'api/manage/perfilusuario';
    let token = JSON.parse(localStorage.getItem('token')!);
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    return this._http.get(url, config);
  }

  getCompras():Observable<any> {
    let url = environment.urlApi + 'api/compra/comprasUsuario';
    let token = localStorage.getItem('token');
    if (token) {
      token = JSON.parse(localStorage.getItem('token')!);
    }
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });
    return this._http.get(url,{ headers: header });
  }

  registroUser(user: Usuario):Observable<any> {
    let url = environment.urlApi + 'api/manage/registrousuario';
    return this._http.post(url, user);
  }

  realizarPedido(id: number | string):Observable<any> {
    let url = environment.urlApi + 'api/compra/insertarpedido/' + id;
    let token = JSON.parse(localStorage.getItem('token')!);
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    return this._http.post(url, '', config)
  }
}
