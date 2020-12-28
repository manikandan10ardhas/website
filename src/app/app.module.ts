import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { MenuSectionComponent } from './menu-section/menu-section.component';
import { SliderSectionComponent } from './slider-section/slider-section.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { HomepageContentComponent } from './homepage-content/homepage-content.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuSectionComponent,
    SliderSectionComponent,
    HomepageContentComponent,
    FooterSectionComponent,
    LoginComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatDividerModule,
    FlexLayoutModule,MatMenuModule,MatIconModule,MatButtonModule,MatCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
