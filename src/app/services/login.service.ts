import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/trainer.model';

const { apiTrainer, apiTrainerKey } = environment;

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    // Dependency Injection - Injecting the HttpClient
    constructor(private readonly http: HttpClient) {}

    public login(username: string): Observable<User> {
        return this.checkUsername(username).pipe(
            switchMap((user: User | undefined) => {
                if (user === undefined) {
                    return this.createTrainer(username);
                }
                return of(user);
            })
        );
    }

    public checkUsername(username: string): Observable<User | undefined> {
        return this.http.get<User[]>(`${apiTrainer}?username=${username}`).pipe(map((response: User[]) => response.pop()));
    }

    private createTrainer(username: string): Observable<User> {
        const trainer = {
            id: 0,
            username,
            pokemon: [],
        };

        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'x-api-key': apiTrainerKey,
        });

        return this.http.post<User>(apiTrainer, trainer, {
            headers,
        });
    }
}
