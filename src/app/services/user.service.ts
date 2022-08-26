import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { User } from '../models/trainer.model';
import { LocalStorageUtil } from '../utils/local.storage.util';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private _user?: User;

    public get user(): User | undefined {
        this._user = LocalStorageUtil.Read<User>(StorageKeys.User);
        return this._user;
    }

    public set user(user: User | undefined) {
        LocalStorageUtil.Write<User>(StorageKeys.User, user!);
        this._user = user;
    }

    constructor() {
        this._user = LocalStorageUtil.Read<User>(StorageKeys.User);
    }
}
