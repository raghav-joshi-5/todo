import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './shared/component/todo/todo.component';
import { TableComponent } from './shared/component/table/table.component';
import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from './shared/component/moviecard/moviecard.component';
import { ChildComponent } from './shared/component/child/child.component';
import { ParentComponent } from './shared/component/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TableComponent,
    MovieCardComponent,
    ChildComponent,
    ParentComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
