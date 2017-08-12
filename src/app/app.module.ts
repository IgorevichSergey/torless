import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import 'hammerjs';

// MAIN COMPONENT
import { AppComponent } from './app.component';

// ROUTER
import { AppRoutingModule } from './app-routing.module';

// PAGES MODULES
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { SmsConfirmModule } from './sms-confirm/sms-confirm.module';
import { CreateBranchModule } from './create-branch/create-branch.module';
import { BranchActivityModule } from './branch-activity/branch-activity.module';
import { CafeteriaDetailsModule } from './cafeteria-details/cafeteria-details.module';


// COMPONENTS
import { ComponentsModule  } from './components';

// SERVICES
import { LoginService, RegistrationService } from './services';
import {DirectivesModule} from "./directives/index";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    SmsConfirmModule,
    CreateBranchModule,
    BranchActivityModule,
    CafeteriaDetailsModule,
    ComponentsModule,
    DirectivesModule,
    HttpModule
  ],
  providers: [
    LoginService,
    RegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
