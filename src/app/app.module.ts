import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './noConnectedComponents/login/login.component';
import { RegisterComponent } from './noConnectedComponents/register/register.component';
import { MyprofileComponent } from './connectedComponents/myprofile/myprofile.component';
import { ShopComponent } from './connectedComponents/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MyprofileComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
