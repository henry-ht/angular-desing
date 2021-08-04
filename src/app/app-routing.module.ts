import { TeachersComponent } from './views/teachers/teachers.component';
import { StudentsComponent } from './views/students/students.component';
import { IndexLayoutComponent } from './layout/index-layout/index-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IndexLayoutComponent,
    children: [
      { path: 'students', component: StudentsComponent },
      { path: 'classroom', component: TeachersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
