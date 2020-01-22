import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieInfoComponent } from './movie/movie-info/movie-info.component';
import { MovieComponent } from './movie/movie/movie.component';
import { SearchComponent } from './movie/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './site/header/header.component';
import { AuthGuard } from './site/auth.guard';
import { LoginComponent } from './site/login/login.component';
import { SignupComponent } from './site/signup/signup.component';
import { FavoritesComponent } from './favorite/favorites/favorites.component';

const routes: Routes = [{ path: 'movie', component: MovieComponent },
{ path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard] },
{ path: '', component: MovieComponent },
{ path: 'movie-edit/:id', component: MovieEditComponent },
{ path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MovieInfoComponent,
    MovieComponent,
    SearchComponent,
    MovieEditComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    [RouterModule.forRoot(routes)],
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
