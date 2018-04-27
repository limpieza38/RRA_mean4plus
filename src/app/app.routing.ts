import {Routes, RouterModule} from '@angular/router';
import {RecordsFormComponent} from './components/records-form/records-form.component';
import {RecordsTableComponent} from './components/recordsTable/records-table.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path : 'records/add', component: RecordsFormComponent},
  {path: 'records', component: RecordsTableComponent},
  {path: '', redirectTo: '/records', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
