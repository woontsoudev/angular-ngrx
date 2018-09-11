import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RootStoreModule } from './store/root-store.module';
import { CarsDemoEffects } from './effects/cars-demo.effects';
import { CarsDemoService } from './services/cars-demo.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RootStoreModule,
    EffectsModule.forRoot([CarsDemoEffects])
  ],
  providers: [CarsDemoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
