import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';

import { KeyUpComponent } from './key-up.component';
import { ShowKarmaComponent } from './show-karma.component';


@NgModule({
  declarations: [
    AppComponent,
    KeyUpComponent,
    ShowKarmaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent, KeyUpComponent, ShowKarmaComponent]
})
export class AppModule { }
