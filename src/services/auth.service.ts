import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  saveLoginStatus(token, spr, rl) {
    //saveLoginStatus and token
    localStorage.setItem('login', '1');
    localStorage.setItem('token', token);
    localStorage.setItem('spr', spr);
    localStorage.setItem('rl', rl);
  }
  getValue(key) {
    return localStorage.getItem(key);
  }
  logout() {
    localStorage.removeItem('login');
    localStorage.removeItem('token');
    localStorage.removeItem('spr');
    localStorage.removeItem('rl');
  }
  checkLoginState() {
    return !!localStorage.getItem('login');
  }
  getSpr() {
    return JSON.parse(localStorage.getItem('spr'));
  }
  updateSpr(spr) {
    localStorage.setItem('spr', spr);
  }
}
