import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModels } from '../usuario.models';
import {map} from 'rxjs/operators';
import { LoginRequest } from '../Login.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usertoken!: string;

  constructor(private http:HttpClient) { }

 
logout(){
  localStorage.removeItem('token');
  }

  login(usuario:  LoginRequest){
    const authData ={
       email: usuario.UserName,
       password: usuario.password,
       returnSecureToken: true
    };
    // return this.http.post(
    //   `${ this.url }/accounts:signInWithPassword?key= ${this.apikey}`,
    //   authData 
    // ).pipe(
    //   map(resp=> {
       
    //     this.guardarToken(resp['idToken']);
    //     return resp;
    //   })
    //  );



  }

  RegistrarUsuario(usuario: UsuarioModels){
  const authData ={
    // email: usuario.email,
    // password: usuario.password,
    // returnSecureToken: true
  };
  // return this.http.post(
  //   `${ this.url }/accounts:signUp?key= ${this.apikey}`,
  //   authData
  //   ).pipe(
  //    map(resp=> {
    
  //      this.guardarToken(resp['idToken']);
  //      return resp;
  //    })
  //   );

  }

   private guardarToken(idtoken: string){
   this.usertoken= idtoken;
   localStorage.setItem('token', idtoken)
   }

   leerToken(){

  //  if(localStorage.getItem('token')){
  //  this.usertoken = localStorage.getItem('token')
  //  }else{
  //    this.usertoken='';
  //  }
  //  return this.usertoken;

  //  }

  //  estaAutenticado():boolean {
  //  return this.usertoken.length >2;
  //  }


   }
  }