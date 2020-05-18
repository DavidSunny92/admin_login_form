import { Injectable } from '@angular/core';
import { Router, CanActivate, } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private _router: Router) { }
    canActivate() {
        if (localStorage.getItem('User')) {
            return true;
        }
        this._router.navigate(['']);
        return false;
    }
}