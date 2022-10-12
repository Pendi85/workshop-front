import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyprofileComponent } from './connectedComponents/myprofile/myprofile.component';
import { LoginComponent } from './noConnectedComponents/login/login.component';
import { RegisterComponent } from './noConnectedComponents/register/register.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'myprofile', component: MyprofileComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
