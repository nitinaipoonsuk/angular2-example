import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { CustomerListComponent, CustomerCreateComponent, CustomerUpdateComponent, CustomerDeleteComponent} from './customers';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'customers', component: CustomerListComponent },
    { path: 'customer/create', component: CustomerCreateComponent },
    { path: 'customer/update/:id', component: CustomerUpdateComponent },
    { path: 'customer/delete/:id', component: CustomerDeleteComponent}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
