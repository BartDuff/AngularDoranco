import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsUserComponent } from './details-user/details-user.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment'
import { config } from 'rxjs';
import { StagiairesComponent } from './stagiaires/stagiaires.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'comp1', pathMatch: 'full' },
  { path: 'comp1', component: Comp1Component },
  { path: 'comp1/:id', component: DetailsUserComponent },
  { path: 'comp2', component: Comp2Component },
  { path: 'stagiaires', component: StagiairesComponent },
  { path: 'rform', component: ReactiveFormComponent },
  // { path: 'comp1/:param', component: Comp1Component },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    NotFoundComponent,
    DetailsUserComponent,
    ReactiveFormComponent,
    StagiairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
