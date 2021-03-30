import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {
  MatFormFieldModule, MatInputModule, MatSelectModule,
  MatButtonModule, MatSlideToggleModule, MatDatepickerModule,
  MatNativeDateModule, MatTabsModule, MatDialogModule,
  MatIconModule, MatCheckboxModule, MatTableModule, MatCardModule, MatTooltipModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSidenavModule, MatSliderModule, MatMenuModule, MatListModule, MatAutocompleteModule, MatRadioModule } from '@angular/material';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
const MaterialComponents = [
  MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatSlideToggleModule, MatDatepickerModule, MatNativeDateModule,
  MatTabsModule, MatDialogModule, MatIconModule, MatCheckboxModule, MatTableModule, MatCardModule, MatTooltipModule, MatPaginatorModule,
  MatProgressSpinnerModule, MatSidenavModule, MatSliderModule, MatMenuModule, MatListModule, MatAutocompleteModule, MatRadioModule
];
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialComponents,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
