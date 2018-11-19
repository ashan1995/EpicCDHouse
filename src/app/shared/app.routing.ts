import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import {USERroutes} from '../user/user.routes';
import { HOMEroutes } from '../home/home.routes';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../guards/auth-guard.service';

const routes: Routes = [
    { path: '', component: UserComponent,children:USERroutes },
    { path: 'home', component: HomeComponent,children:HOMEroutes}

];

export const appRouting = RouterModule.forRoot(routes);
