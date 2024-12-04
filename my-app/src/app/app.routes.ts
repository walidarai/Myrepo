import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { FormsComponent } from './components/forms/forms.component';
import { Form2Component } from './components/form2/form2.component';

export const routes: Routes = [
    {
        path:'add-emp',
        component: AddEmployeeComponent
    },
    {
        path:'emp-list',
        component: EmployeeListComponent
    },
    {
        path:'edit-emp',
        component: EditEmployeeComponent
    },
    {
        path:'new-emp',
        component: NewEmployeeComponent
    },
    {
        path:'form1',
        component: FormsComponent
    },
    {
        path:'form2',
        component: Form2Component
    },
];