import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProviderComponent } from './components/add-provider/add-provider.component';
import { ProviderDetailsComponent } from './components/provider-details/provider-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-provider' },
  { path: 'provider-details', component: ProviderDetailsComponent },
  { path: 'add-provider', component: AddProviderComponent },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
