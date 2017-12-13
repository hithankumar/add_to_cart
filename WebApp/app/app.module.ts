import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { WelcomeService } from './home/welcome.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'home', component: WelcomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo:'home', pathMatch: 'full'}
    ])
    ],//external components or angular components go here
  declarations: [ 
    AppComponent,
    WelcomeComponent
    ],//All our custom components used are added in here
    providers: [WelcomeService],
  bootstrap: [ AppComponent ]//bootstraps the root application component.
})
export class AppModule { }
