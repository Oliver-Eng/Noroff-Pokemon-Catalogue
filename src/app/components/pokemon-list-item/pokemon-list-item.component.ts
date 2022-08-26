import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { PokemonInfo } from 'src/app/models/pokemon-results.model';
import { Pokemon, Stat } from 'src/app/models/pokemon.model';
import { environment } from 'src/environments/environment';
const { apiPokeSpec } = environment;

@Component({
    selector: 'app-pokemon-list-item',
    templateUrl: './pokemon-list-item.component.html',
    styleUrls: ['./pokemon-list-item.component.css'],
})
export class PokemonListItemComponent implements OnInit {
    public loading: boolean = false;
    public showMore: boolean = false;
    public pokemonStats: Stat[];

    private _error: string = '';

    @Input() pokemon?: PokemonInfo;

    constructor(private readonly http: HttpClient) {
        this.pokemonStats = <Stat[]>{};
    }

    ngOnInit(): void {}

    public getMoreInfo(pokeName: string): void {
        this.showMore = this.showMore ? false : true;
        if (this.showMore) {
            this.loading = true;
            this.http.get<Pokemon>(apiPokeSpec + pokeName).subscribe({
                next: (pokemon: Pokemon) => {
                    this.pokemonStats = pokemon.stats;
                },
                error: (error: HttpErrorResponse) => {
                    this._error = error.message;
                },
                complete: () => {
                    this.loading = false;
                    console.log(this.pokemonStats);
                },
            });
        }
    }
}
