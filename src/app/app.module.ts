import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './books/book.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { AppState } from './app.state';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './books/book.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, BookListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot<AppState>({ book: bookReducer }),
    EffectsModule.forRoot([BookEffects]),
  ],
  providers: [
    provideClientHydration(),
    provideStoreDevtools({ maxAge: 25, logOnly: false }), // Correct way to enable DevTools
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
