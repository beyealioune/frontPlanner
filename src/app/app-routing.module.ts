import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FriendComponent } from './friend/friend.component';

import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [ 
  
  {path:'inscription', component : InscriptionComponent},
{path:'connexion', component: ConnexionComponent},
{path:'friend', component: FriendComponent,canActivate: [AuthGuard]},
{path:'home', component: HomeComponent,canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  

  
 }
