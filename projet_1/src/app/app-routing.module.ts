import { ToilesComponent } from './toiles/toiles.component';
import { DesignersComponent } from './designers/designers.component';
import { HomeComponent } from './home/home.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { ViewComponent } from './view/view.component';
import { DgaurdeGuard } from './guarde/dgaurde.guard';
import { ProfileComponent } from './profile/profile.component';
import { SignComponent } from './sign/sign.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'designers/:name/:id',component:DesignersComponent},
  {path:'profile',component : ProfileComponent},
  {path:'toiles',component:ToilesComponent,canActivate:[DgaurdeGuard]},
  {path:'sign',component:SignComponent},
  {path:'contact',children:
    [{path:'details/:id',component:DetailsComponent},
    {path:'view',component:ViewComponent}]},
  {path:'**',component:PagenotfoundComponent},
  {path:'home',redirectTo:'',pathMatch:'full'  },
  
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
