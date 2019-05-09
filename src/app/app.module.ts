import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
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
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsModule,
    ReactiveFormsModule,
    RegistrationComponent
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
    HttpClientModule
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
