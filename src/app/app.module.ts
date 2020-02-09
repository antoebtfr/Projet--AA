import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { ConnectionTipsComponent } from './components/connection-tips/connection-tips.component';
import { ApplicationNameComponent } from './components/application-name/application-name.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SelectionMenuComponent } from './components/selection-menu/selection-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    ConnectionTipsComponent,
    ApplicationNameComponent,
    HomepageComponent,
    SelectionMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
