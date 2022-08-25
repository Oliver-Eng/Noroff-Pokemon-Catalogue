import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from './pages/login/login/login.page';
import { TrainerPage } from './pages/trainer/trainer/trainer.page';
import { PokemonCataloguePage } from './pages/pokemon-catalogue/pokemon-catalogue/pokemon-catalogue.page';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    TrainerPage,
    PokemonCataloguePage,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
