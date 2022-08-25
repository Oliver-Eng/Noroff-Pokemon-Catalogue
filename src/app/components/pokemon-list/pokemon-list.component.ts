import { Component, Input, OnInit } from '@angular/core';
import { PokemonInfo } from 'src/app/models/pokemon-results.model';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
    @Input() pokemons: PokemonInfo[] = [];

    constructor() {}

    ngOnInit(): void {}
}
