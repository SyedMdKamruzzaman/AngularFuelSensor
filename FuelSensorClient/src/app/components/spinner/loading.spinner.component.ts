import { Component, Input } from '@angular/core';

@Component({
    selector: 'loading-spinner',
    templateUrl: './loading.spinner.component.html',
    styleUrls: ['./loading.spinner.component.css'],
})

export class LoadingSpinner{
    static spinnerCanShow:boolean;

    show(){
        LoadingSpinner.spinnerCanShow = true;
    }

    hide(){
        LoadingSpinner.spinnerCanShow = false;
    }

    get staticSpinnerCanShow() {
        return LoadingSpinner.spinnerCanShow;
    }
}