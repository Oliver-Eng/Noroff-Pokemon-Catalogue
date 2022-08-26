// Class used to read and write to the session storage.
// methods are static so we can call them without instantiating them

export class LocalStorageUtil {
    // Reads and returns any Type from session storage
    public static Read<T>(key: string): T | undefined {
        const storedValue = localStorage.getItem(key);
        try {
            if (storedValue) {
                return JSON.parse(storedValue) as T;
            }
            return undefined;
        } catch (e) {
            localStorage.removeItem(key); // if the data is invalid, remove it.
            return undefined;
        }
    }

    // Saves any return Type to session storage
    public static Write<T>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
    }
}
