import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopstoriesComponent } from './topstories/topstories.component';

const routes: Routes = [
						{
							path:'', 
							component: TopstoriesComponent,
							pathMatch: 'full'
						}
					];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
