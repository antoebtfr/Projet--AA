import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { ConnectionTipsComponent } from './components/connection-tips/connection-tips.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    ConnectionTipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
