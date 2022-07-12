import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, 
  
  {
    path: '404', 
    component: NotfoundComponent
  },
  
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
      }]
  },

  
  {
    // ** se chama coriga
    path: '**', 
    redirectTo: '404'
  },

  // {
  //   path: '**',
  //   redirectTo: 'dashboard'
  // },

]
