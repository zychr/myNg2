import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { Ng2Echarts } from 'ng2-echarts';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { appRouter } from './app.route';
import { ReportComponent } from './pages/report/report.component';
import { InquiriesmanageComponent } from './pages/inquiriesmanage/inquiriesmanage.component';
import { EchartComponent } from './pages/echart/echart.component';
import { MainComponent } from './pages/main/main.component';
import { AdminComponent } from './pages/admin/admin.component';
import { EducationAdvisorComponent } from './pages/education-advisor/education-advisor.component';
import { DitchAdvisorComponent } from './pages/ditch_advisor/ditch-advisor.component';
import { ConsultationComponent } from './pages/consultation/consultation.component';
import { EntranceComponent } from './pages//entrance/entrance.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    ReportComponent,
    InquiriesmanageComponent,
    EchartComponent,
    MainComponent,
    AdminComponent,
    EducationAdvisorComponent,
    DitchAdvisorComponent,
    ConsultationComponent,
    EntranceComponent,
    Ng2Echarts
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
