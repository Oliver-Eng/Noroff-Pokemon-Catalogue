import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerPage } from './pages/trainer/trainer/trainer.page';
import { PokemonCataloguePage } from './pages/pokemon-catalogue/pokemon-catalogue/pokemon-catalogue.page';
import { LoginPage } from './pages/login/login/login.page';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login',
    },
    {
        path: 'login',
        component: LoginPage,
    },
    {
        path: 'trainer',
        component: TrainerPage,
        canActivate: [AuthGuard],
    },
    {
        path: 'catalogue',
        component: PokemonCataloguePage,
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
