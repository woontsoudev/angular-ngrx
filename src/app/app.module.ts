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

// Effects
import { CarsDemoEffects } from './effects/cars-demo.effects';
import { PropertiesEffects } from './effects/properties.effects';
import { UsersEffects } from './effects/users.effects';

// Services
import { CarsDemoService } from './services/cars-demo.service';
import { PropertiesService } from './services/properties.service';
import { UsersService } from './services/users.service';
import { httpInterceptorProviders } from './http-interceptors/index';

// Custom
import { RootStoreModule } from './store/root-store.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
    EffectsModule.forRoot([CarsDemoEffects, PropertiesEffects, UsersEffects])
  ],
  providers: [
    httpInterceptorProviders,
    CarsDemoService,
    ConfirmationService,
    MessageService,
    PropertiesService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
