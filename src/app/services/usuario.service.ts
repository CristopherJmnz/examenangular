import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable()
export class UsuarioService {
  constructor(private _http: HttpClient) {}

  login(user: Usuario) {
    let url = environment.urlApi + 'api/manage/login';
    return this._http.get(url);
  }

  getPerfilUser() {
    let url = environment.urlApi + 'api/manage/perfilusuario';
    let token = JSON.parse(localStorage.getItem('token')!);
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    return this._http.get(url, config);
  }

  getCompras() {
    let url = environment.urlApi + 'api/compra/comprasUsuario';
    let token = localStorage.getItem('userToken');
    if (token) {
      token = JSON.parse(localStorage.getItem('userToken')!);
    }
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });
    return this._http.get(url, { headers: header });
  }

  registroUser(user: Usuario) {
    let url = environment.urlApi + 'api/manage/registrousuario';
    return axios.post(url, user).then((result) => {
      return result.data.response;
    });
  }

  realizarPedido(id: number | string) {
    let url = environment.urlApi + 'api/compra/insertarpedido/' + id;
    let token = JSON.parse(localStorage.getItem('token'));
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    return axios.post(url, '', config).then((response) => {
      return response.data;
    });
  }
}
