import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";


const routes: Routes = [
  { path: 'login', component : LoginComponent  },
  { path: 'registration', component: RegistrationComponent },
  {}
]


@NgModule({

  impotrts: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]

})


export class AuthRoutingModule { }
