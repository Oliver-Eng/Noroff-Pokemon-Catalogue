import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageKeys } from '../enums/storage-keys.enum';
import { PokemonInfo, PokemonResults } from '../models/pokemon-results.model';
import { Pokemon } from '../models/pokemon.model';
import { StorageUtil } from '../utils/storage.util';
const { apiPoke } = environment;

@Injectable({
    providedIn: 'root',
})
export class PokemonCatalogueService {
    private _pokemon: PokemonInfo[] = [];
    private _error: string = '';
    private _loading: boolean = false;

    get pokemon(): PokemonInfo[] {
        return this._pokemon;
    }

    get error(): string {
        return this._error;
    }

    get loading(): boolean {
        return this._loading;
    }

    constructor(private readonly http: HttpClient) {}

    // get the name and URL for all pokemon
    public getAllPokemon(): void {
        // check if data already exists in storage..
        if (StorageUtil.sessionStorageRead<PokemonInfo[]>(StorageKeys.PokemonList)) {
            // data already exists...
            this._pokemon = StorageUtil.sessionStorageRead<PokemonInfo[]>(StorageKeys.PokemonList)!;
            return;
        }

        const imageUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

        this._loading = true;
        this.http.get<PokemonResults>(apiPoke + 'pokemon?limit=100000&offset=0.').subscribe({
            next: (pokemonResults: PokemonResults) => {
                // add additional ID and image information
                pokemonResults.results.forEach((result, iteration) => {
                    result.id = iteration + 1;
                    result.image = imageUrl + (iteration + 1) + '.png';
                });

                StorageUtil.sessionStorageSave(StorageKeys.PokemonList, pokemonResults.results);
                this._pokemon = pokemonResults.results;
            },
            error: (error: HttpErrorResponse) => {
                this._error = error.message;
            },
            complete: () => {
                this._loading = false;
            },
        });
    }

    // fetch ALL information for ALL pokemon... //! DON'T DO THIS!
    // public getAllPokemonAllDetails(): void {
    //     let pokemonArray: Pokemon[] = [];

    //     if (StorageUtil.sessionStorageRead<Pokemon[]>(StorageKeys.PokemonList)) {
    //         // data exists
    //         return;
    //     }

    //     this._loading = true;
    //     this.http.get<PokemonResults>(apiPoke + 'pokemon?limit=100000&offset=0.').subscribe({
    //         next: (pokemonResults: PokemonResults) => {
    //             StorageUtil.sessionStorageSave(StorageKeys.PokemonListAllInfo, pokemonResults.results);

    //             pokemonResults.results.forEach((result, iterations) => {
    //                 this.http.get<Pokemon>(result.url).subscribe({
    //                     next: (pokemon: Pokemon) => {
    //                         pokemonArray.push(pokemon);
    //                     },
    //                     error: (error: HttpErrorResponse) => {
    //                         this._error = error.message;
    //                     },
    //                     complete: () => {
    //                         if (iterations + 1 >= pokemonResults.results.length) {
    //                             console.log(pokemonArray);
    //                             console.log(JSON.stringify(pokemonArray));
    //                             this._loading = false;
    //                         }
    //                     },
    //                 });
    //             });
    //         },
    //         error: (error: HttpErrorResponse) => {
    //             this._error = error.message;
    //         },
    //     });
    // }
}
