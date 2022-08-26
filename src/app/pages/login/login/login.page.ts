import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.css'],
})
export class LoginPage implements OnInit {
    constructor(
        private readonly router: Router,
        private readonly _userService: UserService
    ) {}

    ngOnInit(): void {
        // Redirect user if they have an active login in local storage
        if (this._userService.user) {
            this.router.navigateByUrl('/catalogue');
        }
    }

    handleLogin(): void {
        this.router.navigateByUrl('/catalogue');
    }
}
