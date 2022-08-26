import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/trainer.model';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
    // Define output to pass to parent page
    @Output() login: EventEmitter<void> = new EventEmitter();

    // // Dependency Injection in constructor - Injecting the TrainerService
    constructor(
        private readonly _loginService: LoginService,
        private readonly _userService: UserService
    ) {}

    ngOnInit(): void {
        // ToDo implement form validation
    }

    public loginSubmit(loginForm: NgForm): void {
        const { username } = loginForm.value;

        this._loginService.login(username).subscribe({
            next: (user: User) => {
                this._userService.user = user;
                this.login.emit();
            },
            error: () => {
                console.log('Error condition at _loginService.login.subscribe');
            },
        });
    }
}
