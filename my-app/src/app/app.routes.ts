import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { NewEmployeeComponent } from './components/http-Client/new-employee.component';
import { EditEmployeeComponent } from './components/life-Cycle-Events/edit-employee.component';
import { FormsComponent } from './components/forms/forms.component';
import { Form2Component } from './components/form2/form2.component';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { NgContainerComponent } from './components/ng-container/ng-container.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [

    //default path
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'',
        component: LayoutComponent,
        children: [
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
            {
                path:'ng-template',
                component: NgTemplateComponent,
            },
            {
                path:'ng-container',
                component: NgContainerComponent,
            },
            {
                path:'view-child',
                component: ViewChildComponent,
            },
        ]
    },
    
];