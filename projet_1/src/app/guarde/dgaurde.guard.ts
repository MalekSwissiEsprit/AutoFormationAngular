import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../Dservices/service.service';

@Injectable({
  providedIn: 'root'
})
export class DgaurdeGuard implements CanActivate {
  constructor (private share : ServiceService ,private route:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return  new Promise  ((resolve,reject)=>{
if (this.share.verfiadmin){
      resolve (true )}
else{
      //si false retour autre page 
      this.route.navigate(['/'])
      resolve (false )
    }})

  }



}
