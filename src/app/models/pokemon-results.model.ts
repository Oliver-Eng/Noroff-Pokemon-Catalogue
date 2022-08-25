export interface PokemonResults {
    count: number;
    next: any;
    previous: any;
    results: PokemonInfo[];
}

export interface PokemonInfo {
    name: string;
    url: string;
    id: number;
    image: string;
}
