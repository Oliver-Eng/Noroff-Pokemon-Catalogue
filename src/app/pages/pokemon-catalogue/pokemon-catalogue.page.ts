import { Component, OnInit } from '@angular/core';
import { PokemonInfo } from 'src/app/models/pokemon-results.model';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';

@Component({
    selector: 'app-pokemon-catalogue',
    templateUrl: './pokemon-catalogue.page.html',
    styleUrls: ['./pokemon-catalogue.page.css'],
})
export class PokemonCataloguePage implements OnInit {
    get pokemons(): PokemonInfo[] {
        return this.pokemonCatalogueService.pokemon;
    }

    get loading(): Boolean {
        return this.pokemonCatalogueService.loading;
    }

    get error(): string {
        return this.pokemonCatalogueService.error;
    }

    constructor(private readonly pokemonCatalogueService: PokemonCatalogueService) {}

    ngOnInit(): void {
        this.pokemonCatalogueService.getAllPokemon();
    }
}
