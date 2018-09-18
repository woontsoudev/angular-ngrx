import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

// PrimeNG
import { ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

// Custom
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { httpInterceptorProviders } from './http-interceptors/index';
import { RootStoreModule } from './store/root-store.module';
import { CarsDemoEffects } from './effects/cars-demo.effects';
import { CarsDemoService } from './services/cars-demo.service';
import { PropertiesEffects } from './effects/properties.effects';
import { PropertiesService } from './services/properties.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastModule,
    BlockUIModule,
    ProgressSpinnerModule,
    AppRoutingModule,
    RootStoreModule,
    EffectsModule.forRoot([CarsDemoEffects, PropertiesEffects])
  ],
  providers: [
    httpInterceptorProviders,
    CarsDemoService,
    ConfirmationService,
    MessageService,
    PropertiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
