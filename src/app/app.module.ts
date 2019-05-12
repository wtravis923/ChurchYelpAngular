import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from'@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule,
MatButtonModule,
MatFormFieldModule,
MatInputModule,
MatTableModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ChurchService } from './services/church.service';
import { ChurchIndexComponent } from './components/church/church-index/church-index.component';
import { Button } from 'protractor';
import { LeaderService } from './services/leader.service';
import { LeaderListItemComponent } from './components/leader/leader-listItem/leader-listItem.component';

const routes = [
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'leader', component: LeaderListItemComponent},
  {path: '***', component: RegistrationComponent},
 
];

// Removed forms module and reactive forms module from declarations.
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    ChurchIndexComponent,
    LeaderListItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    RouterModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    ChurchService,
    LeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
