import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionTipsComponent } from './components/connection-tips/connection-tips.component';
import { SelectionMenuComponent } from './components/selection-menu/selection-menu.component';


const routes: Routes = [
  { path: '', redirectTo: 'loading', pathMatch: 'full'},
  { path: 'loading', component: HomepageComponent },
  { path: 'in-progress', component: SelectionMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
