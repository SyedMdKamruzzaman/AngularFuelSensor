import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';
import { NotificationService } from './notification.service';
import { LoadingSpinner } from '../components/spinner/loading.spinner.component';
import { CustomRequest } from '../models/custom-request';
import { TokenService } from './token.service';
import { UrlConstants } from '../enums/UrlConstants';
import { NgxSpinnerService } from 'ngx-spinner';
import { RequestMessage } from '../models/request-message';
import { from } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { NgxNotificationService } from 'ngx-notification';
@Injectable()
export class HttpInterceptorService {

    constructor(private loaderService: LoadingSpinner,
        private token: TokenService,
        private notification: NgxNotificationService, private spinner:NgxSpinnerService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
      this.spinner.show();
        let authToken = '';
        if (localStorage.getItem("token")!=null) {
            authToken =  localStorage.getItem("token");
        }


        // if (this.token.getToken() !== null) {
        //     authToken = localStorage.getItem("token");
        // }
        //const requestObj: RequestMessage = new RequestMessage();

        var customReq ;
        if (req.method=="GET") {
            customReq = req.clone({
                headers: new HttpHeaders({"Authorization":authToken}),
                url: UrlConstants.baseUrl + req.url
            });
        } else {
            customReq = req.clone({
                url: UrlConstants.baseUrl + req.url,
                body: req.body,
                headers: new HttpHeaders({"Authorization":authToken}),

            });
        }

    //    var result = from( // wrap the fetch in a from if you need an rxjs Observable
    //         fetch(
    //           UrlConstants.baseUrl + req.url,
    //           {
    //             body: JSON.stringify(req.body),
    //             headers: new Headers({"Authorization":authToken,'Content-Type': 'application/json'}),
    //             method: req.method,
    //             mode: 'no-cors'
    //           }
    //         )
    //       );
       //console.log(result);
        //this.spinner.show();
        //return result;
        return next.handle(customReq).pipe(
            tap(event => {

                if (event instanceof HttpResponse) {
                    const jwt = event.body.Token;
                    if (!isNullOrUndefined(jwt)) {
                        localStorage.setItem("token",jwt);
                    }
                   
                  if (!isNullOrUndefined(event.body.Message)) {
                    if (event.body.StatusCode==1) {
                        this.notification.sendMessage(event.body.Message,'success','bottom-right');
                    } else if (event.body.StatusCode==2){
                        this.notification.sendMessage(event.body.Message,'warning','bottom-right');
                    }else if (event.body.StatusCode==3){
                        this.notification.sendMessage(event.body.Message,'danger','bottom-right');
                    }else if (event.body.StatusCode==4){
                        this.notification.sendMessage(event.body.Message,'danger','bottom-right');
                    }
                    
                  }
                }
                //this.spinner.hide();
            }, error => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status === 401) {
                       
                        this.notification.sendMessage(error.message,'danger','bottom-right');
                       
                       localStorage.removeItem("token");
                       location.replace("login");
                    }
                  }
            }),
            finalize(() => {
                this.spinner.hide();
            }));
    }
}
