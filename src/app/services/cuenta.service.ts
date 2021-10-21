import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  url="http://localhost:60912/api/Operaciones";
  constructor(private http:HttpClient) { }

  ObtenerUltimosMovimientos(id:number)
  {
    return this.http.get<any>(this.url+"/"+id.toString());
  }
}
