import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { PanelModule, AutoCompleteModule, LayoutModule } from "@eamode/eang";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingComponent } from "./landing/landing.component";
import { DonationComponent } from "./donation/donation.component";
import { CrowdfundingComponent } from "./crowdfunding/crowdfunding.component";
import { EducationComponent } from "./education/education.component";
import { AboutComponent } from "./about/about.component";
import { TokenComponent } from "./token/token.component";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { WhitepaperComponent } from './whitepaper/whitepaper.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DonationComponent,
    CrowdfundingComponent,
    EducationComponent,
    AboutComponent,
    TokenComponent,
    WhitepaperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    AutoCompleteModule,
    LayoutModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
