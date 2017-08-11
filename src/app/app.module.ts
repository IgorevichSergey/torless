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


// COMPONENTS
import { PathComponent, InformationComponent } from './components';

// SERVICES
import { LoginService, RegistrationService } from './services';



@NgModule({
  declarations: [
    AppComponent,
    PathComponent,
    InformationComponent
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    BrowserModule,
    HttpModule
  ],
  providers: [
    LoginService,
    RegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
