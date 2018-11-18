import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './warning.component';
import { MessagesComponent } from './messages/messages.component';
import { AdamawaComponent } from './adamawa/adamawa.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HeroesComponent,
    HeroDetailComponent,
    ServersComponent,
    WarningComponent,
    MessagesComponent,
    AdamawaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
