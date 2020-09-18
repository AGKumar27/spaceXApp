import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from './services/data.service';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { LaunchInfoComponent } from './launch-info/launch-info.component';
import { LaunchInfoService } from './services/launch-info.service';
import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterBarComponent,
    HeaderBarComponent,
    SearchBarComponent,
    LaunchInfoComponent,
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule],
  providers: [LaunchInfoService, DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
