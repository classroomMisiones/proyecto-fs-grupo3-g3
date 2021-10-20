import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModels } from '../usuario.models';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 url="http://localhost:60912/api/Usuarios";

 onCrearRegistro(usuario:UsuarioModels):Observable<UsuarioModels>{
    return this.http.post<UsuarioModels>(this.url, usuario);
  }

  constructor(private http:HttpClient) { }
}
