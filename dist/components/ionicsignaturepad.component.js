import { Component, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
var HTML_TEMPLATE = "\n<ion-row>\n<ion-col style=\"text-align:right;\" class=\"no-padding\">\n<ion-button fill=\"clear\" (click)=\"drawClear()\" style=\"--padding-top: 0; --padding-bottom: 0; --padding-start: 0; --padding-end: 0; --margin-top: 4px; --margin-bottom: 0; --margin-start: 0; --margin-end: 8px;\"><ion-icon slot=\"icon-only\" name=\"close\" color=\"dark\"></ion-icon></ion-button>\n</ion-col>\n</ion-row>\n<signature-pad [options]=\"signaturePadOptions\" id=\"signatureCanvas\" (onBeginEvent)=\"drawStart()\" (onEndEvent)=\"drawComplete()\"></signature-pad>";
var IonicsignaturepadComponent = /** @class */ (function () {
    function IonicsignaturepadComponent() {
        this.signaturePadOptions = {};
        this.onTouch = function () { };
        this.disabled = false;
        this.signaturePadOptions = {
            minWidth: 2,
            canvasWidth: 800,
            canvasHeight: 240,
            backgroundColor: 'rgb(255,255,255)'
        };
    }
    IonicsignaturepadComponent.prototype.ngOnInit = function () {
    };
    IonicsignaturepadComponent.prototype.onChange = function (data) {
    };
    Object.defineProperty(IonicsignaturepadComponent.prototype, "canvasWidth", {
        set: function (data) {
            this.signaturePadOptions.canvasWidth = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicsignaturepadComponent.prototype, "canvasHeight", {
        set: function (data) {
            this.signaturePadOptions.canvasHeight = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicsignaturepadComponent.prototype, "backgroundColor", {
        set: function (data) {
            this.signaturePadOptions.backgroundColor = data;
        },
        enumerable: true,
        configurable: true
    });
    // Allow Angular to set the value on the component
    IonicsignaturepadComponent.prototype.writeValue = function (value) {
        this.onChange(value);
    };
    // Save a reference to the change function passed to us by 
    // the Angular form control
    IonicsignaturepadComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    // Save a reference to the touched function passed to us by 
    // the Angular form control
    IonicsignaturepadComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    // Allow the Angular form control to disable this input
    IonicsignaturepadComponent.prototype.setDisabledState = function (disabled) {
        this.disabled = disabled;
    };
    IonicsignaturepadComponent.prototype.canvasResize = function () {
        var canvas = document.querySelector('canvas');
        this.signaturePad.set('minWidth', 1);
    };
    IonicsignaturepadComponent.prototype.ngAfterViewInit = function () {
        this.signaturePad.clear();
        this.canvasResize();
    };
    IonicsignaturepadComponent.prototype.drawStart = function () {
    };
    IonicsignaturepadComponent.prototype.drawComplete = function () {
        this.signatureImage = this.signaturePad.toDataURL('image/jpeg', 0.5);
        this.writeValue(this.signatureImage);
    };
    IonicsignaturepadComponent.prototype.drawClear = function () {
        this.signaturePad.clear();
        this.signatureImage = null;
        this.writeValue(this.signatureImage);
    };
    IonicsignaturepadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ion-signaturepad',
                    template: HTML_TEMPLATE,
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: IonicsignaturepadComponent,
                            multi: true
                        }]
                },] },
    ];
    /** @nocollapse */
    IonicsignaturepadComponent.ctorParameters = function () { return []; };
    IonicsignaturepadComponent.propDecorators = {
        signaturePad: [{ type: ViewChild, args: [SignaturePad,] }],
        canvasWidth: [{ type: Input }],
        canvasHeight: [{ type: Input }],
        backgroundColor: [{ type: Input }]
    };
    return IonicsignaturepadComponent;
}());
export { IonicsignaturepadComponent };
//# sourceMappingURL=ionicsignaturepad.component.js.map