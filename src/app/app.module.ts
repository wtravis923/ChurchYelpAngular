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
import { RegistrationComponent } from './components/registration/registration.component';
@NgModule({
  declarations: [
    AppComponent,
    FormsModule,
    ReactiveFormsModule,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
