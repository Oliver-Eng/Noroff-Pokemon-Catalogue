import { TestBed } from '@angular/core/testing';

import { PokemonCatalogueServiceService } from './pokemon-catalogue-service.service';

describe('PokemonCatalogueServiceService', () => {
  let service: PokemonCatalogueServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonCatalogueServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
