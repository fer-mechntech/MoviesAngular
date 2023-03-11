import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ShareModule } from './share/share.module';
import { MoviesComponent } from './components/movies/movies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './share/components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PrincipalComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
