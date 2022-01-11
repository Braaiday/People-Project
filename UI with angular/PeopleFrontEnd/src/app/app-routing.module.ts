import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import {ReportComponent} from './report/report.component'

const routes: Routes = [
  {path: 'people', component:PeopleComponent},
  {path: 'report', component:ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
