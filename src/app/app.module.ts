import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ChurchService } from './services/church.service';
import { HomeComponent } from './components/home/home.component';
import { LeaderService } from './services/leader.service';
import { LeaderRating } from './services/leaderrating.service';
import { LeaderListItemComponent } from './components/leader/leader-listItem/leader-listItem.component';
import { ChurchListItemComponent } from './components/church/church-ListItem/church-ListItem.component';
import { ChurchCreateComponent } from './components/church/church-create/church-create.component';
import { ChurchDetailComponent } from './components/church/church-detail/church-detail.component';
import { ChurchEditComponent } from './components/church/church-edit/church-edit.component';
import { ChurchDeleteComponent } from './components/church/church-delete/church-delete.component';
import { LeaderCreateComponent } from './components/leader-create/leader-create.component';
import { LeaderDetailComponent } from './components/leader/leader-detail/leader-detail.component';
import { LeaderEditComponent } from './components/leader/leader-edit/leader-edit.component';
import { LeaderDeleteComponent } from './components/leader/leader-delete/leader-delete.component';
import { ChurchRatingCreateComponent } from './components/churchRating/church-rating-create/church-rating-create.component';
import { LeaderratingIndexComponent } from './components/leaderrating/leaderrating-index/leaderrating-index.component';
import { LeaderratingCreateComponent } from './components/leaderrating/leaderrating-create/leaderrating-create.component';
import { LeaderratingDetailComponent } from './components/leaderrating/leaderrating-detail/leaderrating-detail.component';
import { LeaderratingEditComponent } from './componenets/leaderrating/leaderrating-edit/leaderrating-edit.component';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: HomeComponent },
  { path: 'leader/create', component: LeaderCreateComponent },
  { path: 'leaderrating', component: LeaderratingIndexComponent },
  { path: 'leaderrating / create', component: LeaderratingIndexComponent },
  { path: 'leaderrating /: id' , component: LeaderratingIndexComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'leader', component: LeaderListItemComponent },
  { path: 'leader/detail', component: LeaderDetailComponent },
  { path: 'leader/edit', component: LeaderEditComponent },
  { path: 'leader/delete', component: LeaderDeleteComponent },
  { path: 'church', component:ChurchListItemComponent },
  { path: 'church/create', component: ChurchCreateComponent },
  { path: 'church/detail/:id', component: ChurchDetailComponent },
  { path: 'church/:id', component: ChurchDeleteComponent },
  { path: 'church/edit/:id', component: ChurchEditComponent },
  { path: '**', component: HomeComponent },
  { path: 'leader/create', component:LeaderCreateComponent },
  { path: 'leader', children: [
    { path: '', component: LeaderListItemComponent },
    { path: 'leader/create', component:LeaderCreateComponent },
  ]},
  { path: 'church', children: [
    { path: '', component: ChurchListItemComponent },
    { path: 'create', component: ChurchCreateComponent },
    { path: 'detail/:id', component: ChurchDetailComponent },
    { path: ':id', component: ChurchDeleteComponent },
    { path: 'edit/:id', component: ChurchEditComponent },
  ]},
  { path: 'churchRating', children: [
    { path: 'create', component: ChurchRatingCreateComponent}
  ]},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    ChurchListItemComponent,
    HomeComponent,
    LeaderListItemComponent,
    ChurchCreateComponent,
    ChurchDetailComponent,
    ChurchEditComponent,
    ChurchDeleteComponent,
    LeaderCreateComponent,
    LeaderDetailComponent,
    LeaderEditComponent,
    LeaderDeleteComponent
    LeaderratingCreateComponent,
    LeaderratingDetailComponent,
    LeaderratingEditComponent
    ChurchRatingCreateComponent
    LeaderratingIndexComponent
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
    HttpClientModule,
    MatSelectModule
  ],
  providers: [
    AuthService,
    ChurchService,
    LeaderService,
    LeaderRating,
    ChurchDetailComponent

  ],

  bootstrap: [AppComponent]

})

export class AppModule { }