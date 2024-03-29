﻿import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'account', component: AccountComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}