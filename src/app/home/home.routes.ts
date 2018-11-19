import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { ItemComponent } from './item/item.component';

export const HOMEroutes: Routes = [
    { path: '', component: BillComponent },
    { path: 'bill', pathMatch:'full', redirectTo: '' },
    { path: 'item',component:ItemComponent}
];

