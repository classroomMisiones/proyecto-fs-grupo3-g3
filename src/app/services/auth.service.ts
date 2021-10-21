import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, } from 'rxjs';
import {map} from 'rxjs/operators';
import { LoginRequest } from '../Login.models';
const TOKEN_KEY = 'auth-token';



@Injectable({
  providedIn: 'root' 
})
export class AuthService {

  url="http://localhost:60912/api/Login/authenticate";
  private currentUserSubject: BehaviorSubject<LoginRequest>;
  public currentUser: Observable<LoginRequest>;
  loggedIn= new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient) {
    console.log("AUTH SERVICE WORKING");
    //this.currentUserSubject = new  BehaviorSubject<LoginRequest>(JSON.parse(localStorage.getItem(TOKEN_KEY) || '{}'));
    this.currentUserSubject = new  BehaviorSubject<LoginRequest>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  
  }

  login(usuario: LoginRequest): Observable<any> {
    return this.http.post<LoginRequest>(this.url, usuario).pipe(map(data => {
      localStorage.setItem(TOKEN_KEY, data.Token);
      //sessionStorage.setItem('id', data.id);
      this.currentUserSubject.next(data);
      this.loggedIn.next(true);
      return data;
    }));   
  }

  get usuarioAutenticado(): LoginRequest {
    return this.currentUserSubject.value;
  }

  get estaAutenticado(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  logOut(): void {
    window.sessionStorage.clear();
    localStorage.removeItem(TOKEN_KEY);
    this.loggedIn.next(false);
  }



}