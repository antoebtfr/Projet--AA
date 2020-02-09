import { LoadingComponent } from './pages/loading/loading.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionTipsComponent } from './components/connection-tips/connection-tips.component';


const routes: Routes = [
  { path: '', redirectTo: 'loading', pathMatch: 'full'},
  { path: 'loading', component: LoadingComponent },
  { path: 'in-progress', component: ConnectionTipsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
