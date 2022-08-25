import { __values } from 'tslib';

export class StorageUtil {
    // Save data to local storage with key & value
    public static localStorageSave<T>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    // Read data from local storage by key
    public static localStorageRead<T>(key: string): T | undefined {
        const storedValue = localStorage.getItem(key);
        try {
            return storedValue ? (JSON.parse(storedValue) as T) : undefined;
        } catch (error) {
            localStorage.removeItem(key); // if data can't be read, remove it.
            return undefined;
        }
    }
    // Remove data from local storage by key
    public static localStorageDelete(key: string) {
        try {
            localStorage.removeItem(key); // remove key from storage
        } catch (error) {
            console.error('there was no data to delete from local-storage');
        }
    }

    // Save data to session storage with key & value
    public static sessionStorageSave<T>(key: string, value: T): void {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    // Read data from session storage by key
    public static sessionStorageRead<T>(key: string): T | undefined {
        const storedValue = sessionStorage.getItem(key);
        try {
            return storedValue ? (JSON.parse(storedValue) as T) : undefined;
        } catch (error) {
            console.log('what on earth..');
            sessionStorage.removeItem(key); // if data can't be read, remove it.
            return undefined;
        }
    }
    // Remove data from session storage by key
    public static sessionStorageDelete(key: string) {
        try {
            sessionStorage.removeItem(key); // remove key from storage
        } catch (error) {
            console.error('there was no data to delete from session-storage');
        }
    }
}
