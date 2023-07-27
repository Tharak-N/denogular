
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

export const canActivateFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  if(inject(AuthService).isLoggedIn()) return true
  inject(Router).navigate(['/login'], { queryParams: { routerUrl: state.url } }, )
  return false
}
