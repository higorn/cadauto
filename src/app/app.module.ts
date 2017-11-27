import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AutomovelListComponent } from './automovel-list/automovel-list.component';
import { AutomovelDetailComponent } from './automovel-detail/automovel-detail.component';
import { AutomovelService } from './automovel.service';
import { InMemoryDataService } from './in-memory-data-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'automovel', component: AutomovelListComponent },
  { path: 'automovel/:id', component: AutomovelDetailComponent },
  { path: '', redirectTo: '/automovel', pathMatch: 'full' },
]


@NgModule({
  declarations: [
    AppComponent,
    AutomovelListComponent,
    AutomovelDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot(routes),
  ],
  providers: [
    AutomovelService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
