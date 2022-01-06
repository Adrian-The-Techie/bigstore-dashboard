import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class MainGuard implements CanActivate {
  constructor(private _router: Router, private _auth: AuthService) {}
  canActivate() {
    if (this._auth.checkLoginState()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      // return false;
    }
  }
}
