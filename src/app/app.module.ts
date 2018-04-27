import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {DataService} from './data.service';
import {routing} from './app.routing';
import {ReactiveFormsModule} from '@angular/forms';
import * as $ from 'jquery';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {MainComponent} from './components/main/main.component';
import {RecordsTableComponent} from './components/recordsTable/records-table.component';
import { RecordsFormComponent } from './components/records-form/records-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainComponent,
    RecordsTableComponent,
    RecordsFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}


