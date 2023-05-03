import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TaskContainerComponent } from './components/task-container/task-container.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TaskContainerComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
