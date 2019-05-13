import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChurchesService } from './services/church.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from'@angular/forms';
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
import { Button } from 'protractor';
import { ChurchService } from './services/church.service';
import { Button } from 'protractor';
import { HomeComponent } from './components/home/home.component';
import { LeaderService } from './services/leader.service';
import { LeaderListItemComponent } from './components/leader/leader-listItem/leader-listItem.component';
import { ChurchIndexComponent } from './components/church/church-index/church-index.component';
import { ChurchCreateComponent } from './components/church/church-create/church-create.component';
import { ChurchDetailComponent } from './components/church/church-detail/church-detail.component';
import { ChurchEditComponent } from './components/church/church-edit/church-edit.component';
import { ChurchDeleteComponent } from './components/church/church-delete/church-delete.component';

const routes = [
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'church', component: ChurchIndexComponent},
  {path: 'home', component: HomeComponent},
  {path: 'leader', component: LeaderListItemComponent},
  {path: '***', component: RegistrationComponent},
  { path: 'churches', component:ChurchIndexComponent},
  { path: 'churches/create', component: ChurchCreateComponent },
  { path: 'churches/detail/:id', component: ChurchDetailComponent}
];

// Removed forms module and reactive forms module from declarations.
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    ChurchIndexComponent,
    HomeComponent,
    LeaderListItemComponent,
    ChurchCreateComponent,
    ChurchDetailComponent,
    ChurchEditComponent,
    ChurchDeleteComponent
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
    LeaderService,
    ChurchesService
  ],

  bootstrap: [AppComponent]
  
})

export class AppModule { }
