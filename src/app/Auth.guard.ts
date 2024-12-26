import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot } from "@angular/router";

import { Injectable } from "@angular/core";


@Injectable()
export class AuthGuard implements CanActivate {


    constructor(private route: Router) { }
    canActivate(): boolean {
        let token = localStorage.getItem('token')
        if (token)
            return true;
        else {
            this.route.navigateByUrl("/login");
            return false;
        }
    }


}