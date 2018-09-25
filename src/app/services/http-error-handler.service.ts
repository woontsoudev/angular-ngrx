import { ErrorHandler } from '@angular/core';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable()
export class HttpErrorHandler implements ErrorHandler {
  constructor(private messageService: MessageService) {}

  public handleError(error: any) {
    const { status, message } = error;
    switch (status) {
      case 400:
        this.messageService.add({
          severity: 'error',
          summary: 'Bad Request',
          detail: `${message}!`
        });
        break;
      case 401:
        this.messageService.add({
          severity: 'error',
          summary: 'Authorization Required',
          detail: `${message}!`
        });
        break;
      case 403:
        this.messageService.add({
          severity: 'error',
          summary: 'Forbidden',
          detail: `${message}!`
        });
        break;
      case 404:
        this.messageService.add({
          severity: 'error',
          summary: 'Not Found',
          detail: `${message}!`
        });
        break;
      case 408:
        this.messageService.add({
          severity: 'error',
          summary: 'Request Time-Out',
          detail: `${message}!`
        });
        break;
      case 500:
        this.messageService.add({
          severity: 'error',
          summary: 'Internal Server Error',
          detail: `${message}!`
        });
        break;
      case 502:
        this.messageService.add({
          severity: 'error',
          summary: 'Bad Gateway',
          detail: `${message}!`
        });
        break;
      case 503:
        this.messageService.add({
          severity: 'error',
          summary: 'Service Temporarily Unavailable',
          detail: `${message}!`
        });
        break;
      case 504:
        this.messageService.add({
          severity: 'error',
          summary: 'Gateway Time-Out',
          detail: `${message}!`
        });
        break;
      default:
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `${message}!`
        });
    }
  }
}
