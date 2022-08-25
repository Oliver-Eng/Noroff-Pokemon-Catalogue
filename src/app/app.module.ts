import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from './pages/login/login/login.page';
import { TrainerPage } from './pages/trainer/trainer/trainer.page';
import { PokemonCataloguePage } from './pages/pokemon-catalogue/pokemon-catalogue/pokemon-catalogue.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokemonCatalogueComponent } from './components/pokemon-catalogue/pokemon-catalogue.component';
import { PokemonCatalogueItemComponent } from './components/pokemon-catalogue-item/pokemon-catalogue-item.component';
import { CatchButtonComponent } from './components/catch-button/catch-button.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        LoginPage,
        TrainerPage,
        PokemonCataloguePage,
        NavbarComponent,
        PokemonCatalogueComponent,
        PokemonCatalogueItemComponent,
        CatchButtonComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
