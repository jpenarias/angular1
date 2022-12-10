import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToListComponent } from './to-list/to-list.component';
import { ChangeNoteColorsPipe } from './change-note-colors.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToListComponent,
    ChangeNoteColorsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
