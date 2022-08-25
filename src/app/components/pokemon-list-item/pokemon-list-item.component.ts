import { Component, Input, OnInit } from '@angular/core';
import { PokemonInfo } from 'src/app/models/pokemon-results.model';
import { Index } from 'src/app/models/pokemon.model';

@Component({
    selector: 'app-pokemon-list-item',
    templateUrl: './pokemon-list-item.component.html',
    styleUrls: ['./pokemon-list-item.component.css'],
})
export class PokemonListItemComponent implements OnInit {
    @Input() pokemon?: PokemonInfo;

    constructor() {}

    ngOnInit(): void {}
}
