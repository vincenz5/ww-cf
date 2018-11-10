import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from 'src/app/landing/landing.component';
import { AboutComponent } from 'src/app/about/about.component';
import { CrowdfundingComponent } from 'src/app/crowdfunding/crowdfunding.component';
import { DonationComponent } from 'src/app/donation/donation.component';
import { EducationComponent } from 'src/app/education/education.component';

const routes: Routes = 
[{ path: '', component: LandingComponent }, 
{ path: 'about', component: AboutComponent }, 
{ path: 'donation', component: DonationComponent }, 
{ path: 'crowdfunding', component: CrowdfundingComponent }, 
{ path: 'education', component: EducationComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
