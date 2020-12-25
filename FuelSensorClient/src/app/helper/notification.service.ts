import { Injectable } from '@angular/core';
import { NgxNotificationService } from 'ngx-notification';
import { ResponseMessage } from '../models/response-message';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private ngxNotificationService: NgxNotificationService) { }

  public message(message: any) {

    switch (message.status) {
      case 500:
        this.warning("Unable to connect the service");
        break;

      case 404:
        this.info(message.body.Message);
        break;

      case 400:
        this.warning(message.body.Message);
        break;

      case 201:
        this.warning(message.body.Message);
        break;

      case 204:
        this.info(message.body.Message);
        break;

      case 200:
       
        this.success(message.body.Message);
        break;

      case 0:
        this.info('Server Down');
        break;

      default:
        break;
    }
  }

  public success(messageText) {
    this.ngxNotificationService.sendMessage(messageText, 'success', 'bottom-right');
  }

  public info(messageText) {
    this.ngxNotificationService.sendMessage(messageText, 'info', 'bottom-right');
  }

  public warning(messageText) {
    this.ngxNotificationService.sendMessage(messageText, 'warning', 'bottom-right');;
  }

  public error(messageText) {
    this.ngxNotificationService.sendMessage(messageText, 'danger', 'bottom-right');
  }
}
