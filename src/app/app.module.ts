import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from'@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule,
MatButtonModule,
MatFormFieldModule,
MatInputModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChurchService } from './services/church.service';
import { ChurchIndexComponent } from './components/church/church-index/church-index.component';

const routes = [
  {path: 'register', component: RegistrationComponent},
  {path: '***', component: RegistrationComponent},
  {path: 'login', component: LoginComponent}
];

// Removed forms module and reactive forms module from declarations.
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    ChurchIndexComponent
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
    HttpClientModule
  ],
  providers: [
    AuthService,
    ChurchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
