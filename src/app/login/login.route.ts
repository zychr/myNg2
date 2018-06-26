import { RouterModule,Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { HomeComponent } from '../home/home.component';
export const loginRoute=[
	   {
	       path:'',
	       redirectTo:'login',
		   pathMatch:'full'
	   }
   ]