import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { User } from 'src/app/models/trainer.model';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
        private readonly router: Router,
        private readonly _userService: UserService,
        private readonly _loginService: LoginService
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        // Check if a user exists in local session storage.
        if (this._userService.user) {
            let userToCheck = this._userService.user.username;

            this._loginService.checkUsername(userToCheck).subscribe({
                next: (user: User | undefined) => {
                    if (user === undefined) {
                        console.log(
                            `Auth: user ${userToCheck} does not exist in API`,
                            user
                        );
                        this._userService.user = undefined; // delete local session for the invalid user
                        this.router.navigateByUrl('/login'); // redirect to logon page
                    } else {
                        console.log(`Auth: user ${userToCheck} exist in API`); // user exist, continue
                    }
                },
                error: () => {
                    console.log(
                        'Auth: Error condition at _loginService.checkUsername'
                    );
                },
            });

            return true;
        } else {
            console.log('Auth: no local storage user exists');
            this.router.navigateByUrl('/login');
            return false;
        }
    }
}
