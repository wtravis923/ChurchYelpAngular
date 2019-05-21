import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ChurchService } from './services/church.service';
import { ChurchRatingsService } from './services/churchratings.service'
import { HomeComponent } from './components/home/home.component';
import { LeaderService } from './services/leader.service';
import { LeaderratingService } from './services/leaderrating.service';
import { LeaderListItemComponent } from './components/leader/leader-listItem/leader-listItem.component';
import { ChurchListItemComponent } from './components/church/church-ListItem/church-ListItem.component';
import { ChurchCreateComponent } from './components/church/church-create/church-create.component';
import { ChurchDetailComponent } from './components/church/church-detail/church-detail.component';
import { ChurchEditComponent } from './components/church/church-edit/church-edit.component';
import { ChurchDeleteComponent } from './components/church/church-delete/church-delete.component';
import { LeaderCreateComponent } from './components/leader/leader-create/leader-create.component';
import { LeaderDetailComponent } from './components/leader/leader-detail/leader-detail.component';
import { LeaderEditComponent } from './components/leader/leader-edit/leader-edit.component';
import { LeaderDeleteComponent } from './components/leader/leader-delete/leader-delete.component';
import { ChurchRatingIndexComponent } from './components/churchRating/church-rating-index/church-rating-index.component';
import { ChurchRatingCreateComponent } from './components/churchRating/church-rating-create/church-rating-create.component';
import { LeaderratingIndexComponent } from './components/leaderrating/leaderrating-index/leaderrating-index.component';
import { LeaderratingCreateComponent } from './components/leaderrating/leaderrating-create/leaderrating-create.component';
import { LeaderratingDetailComponent } from './components/leaderrating/leaderrating-detail/leaderrating-detail.component';
import { LeaderRatingEditComponent } from './components/leaderrating/leaderrating-edit/leaderrating-edit.component';
import { AuthGuard} from './guards/auth.guard';
import { APIURL } from '../environments/environment.prod'
import { LeaderRatingDeleteComponent } from './components/leaderrating/leaderrating-delete/leaderrating-delete.component';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'leaderrating', children: [
      { path: '', component: LeaderratingIndexComponent },
      { path: 'create', component: LeaderratingCreateComponent },
      { path: 'edit/:id', component: LeaderRatingEditComponent },
    ]
  },
  {
    path: 'leader', children: [
      { path: '', component: LeaderListItemComponent },
      { path: 'create', component: LeaderCreateComponent },
      { path: 'detail/:id', component: LeaderDetailComponent },
      { path: 'delete/:id', component: LeaderDeleteComponent },
      { path: 'edit/:id', component: LeaderEditComponent },
    ]
  },
  {
    path: 'church', children: [
      { path: '', component: ChurchListItemComponent },
      { path: 'create', component: ChurchCreateComponent },
      { path: 'detail/:id', component: ChurchDetailComponent },
      { path: 'delete/:id', canActivate: [AuthGuard], component: ChurchDeleteComponent },
      { path: 'edit/:id', component: ChurchEditComponent },
    ]
  },
  {
    path: 'churchrating', children: [
      { path: '', component: ChurchRatingIndexComponent },
      { path: 'create', component: ChurchRatingCreateComponent }
    ]
  },
  { path: '**', component: HomeComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    ChurchListItemComponent,
    ChurchCreateComponent,
    ChurchDetailComponent,
    ChurchEditComponent,
    ChurchDeleteComponent,
    LeaderListItemComponent,
    LeaderCreateComponent,
    LeaderDetailComponent,
    LeaderEditComponent,
    LeaderDeleteComponent,
    LeaderratingCreateComponent,
    LeaderratingDetailComponent,
    LeaderRatingEditComponent,
    LeaderRatingDeleteComponent,
    ChurchRatingCreateComponent,
    LeaderratingIndexComponent,
    ChurchRatingIndexComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    RouterModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule,
    MatSelectModule,
    MatCardModule,
  ],
  providers: [
    AuthService,
    ChurchService,
    ChurchRatingsService,
    LeaderService,
    LeaderratingService,
    ChurchDetailComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }