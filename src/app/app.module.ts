import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChurchesService} from './services/church.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChurchIndexComponent } from './components/church/church-index/church-index.component';
import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material';

import { ChurchCreateComponent } from './components/church/church-create/church-create.component';
import { ChurchDetailComponent } from './components/church/church-detail/church-detail.component';
import { ChurchEditComponent } from './components/church/church-edit/church-edit.component';


const routes = [
  { path: 'churches', component:ChurchIndexComponent},
  { path: 'churches/create', component: ChurchCreateComponent },
  { path: 'churches/detail/:id', component: ChurchDetailComponent}
    
]
@NgModule({
  declarations: [
    AppComponent,
    ChurchCreateComponent,
    ChurchDetailComponent,
    ChurchEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ChurchesService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
