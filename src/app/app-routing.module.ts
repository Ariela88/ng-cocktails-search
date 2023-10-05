import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CocktailComponent } from './components/cocktail/cocktail.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
{path: 'home', component: MainComponent},
{path: '', component: MainComponent},
{path: 'cocktails', component: CocktailComponent},
{path: 'list', component: ListComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
