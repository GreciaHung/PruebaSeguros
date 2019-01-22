import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { AuthComponent } from './layout/auth/auth.component';
import { AdminComponent } from './layout/admin/admin.component';

const routes: Routes = [{
    path: 'auth', component: AuthComponent, children: [
       { path: '', loadChildren: './auth/auth.module#AuthModule' }
    ]
},{
    path: '', component: AdminComponent, children: [
      { path: '', loadChildren: './admin/admin.module#AdminModule' }
    ]
}];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);


