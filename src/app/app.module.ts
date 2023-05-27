import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FriendComponent } from './friend/friend.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FriendComponent,
    InscriptionComponent,
    ConnexionComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule, FormsModule, ColorPickerModule, ReactiveFormsModule,HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
