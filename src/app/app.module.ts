import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from './pages/login/login.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { PokemonCataloguePage } from './pages/pokemon-catalogue/pokemon-catalogue.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CatchButtonComponent } from './components/catch-button/catch-button.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

@NgModule({
    declarations: [AppComponent, LoginPage, TrainerPage, PokemonCataloguePage, NavbarComponent, CatchButtonComponent, PokemonListItemComponent, PokemonListComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
