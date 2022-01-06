import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  ActivatedRoute,
} from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuardGuard implements CanActivate {
  constructor(private _router: Router, private _auth: AuthService) {}
  canActivate(route: ActivatedRouteSnapshot) {
    let access = this._auth.getSpr().indexOf(route.data.role);
    if (access != -1) {
      return true;
    } else {
      this._router.navigate(['/login']);
      // return false;
    }
  }
}
