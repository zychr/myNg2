import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EchartComponent } from './pages/echart/echart.component';
import { InquiriesmanageComponent } from './pages/inquiriesmanage/inquiriesmanage.component';
import { ReportComponent } from './pages/report/report.component';
import { MainComponent } from './pages/main/main.component';
import { AdminComponent } from './pages/admin/admin.component';
import { EducationAdvisorComponent } from './pages/education-advisor/education-advisor.component';
import { DitchAdvisorComponent } from './pages/ditch_advisor/ditch-advisor.component';
import { ConsultationComponent } from './pages/consultation/consultation.component';
import { EntranceComponent } from './pages//entrance/entrance.component';

export const homeRouter:Routes=[
     {
		path:'',
		component:MainComponent
	},
	{
		path:'index',
		component:MainComponent
	},
    {
		path:'echart',
		component:EchartComponent
	},
	{
		path:'report',
		component:ReportComponent
	},
	{
		path:'inquiriesmanage',
		component:InquiriesmanageComponent
	},
	{
		path:'admin',
		component:AdminComponent
	},
	{
		path:'entrance',
		component:EntranceComponent
	},
	{
		path:'ditch_advisor',
		component:DitchAdvisorComponent
	},
	{
		path:'consultation',
		component:ConsultationComponent
	},
	{
		path:'education_advisor',
		component:EducationAdvisorComponent
	},
	{
		path:"**",
		redirectTo:"index"
	}
]
export const appRouter:Routes=[
    {
    	path:'',
    	redirectTo:'login',
    	pathMatch:'full'
    },
	{
		path:'login',
		component:LoginComponent
	},
	{
		path:'home',
		component:HomeComponent,
		children:homeRouter
	},
]