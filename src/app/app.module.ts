// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// HeaderComponent ES standalone: se IMPORTA (no se declara)
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  // En declarations SOLO van componentes NO-standalone
  declarations: [AppComponent],
  // Los standalone van en imports
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HeaderComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
