import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
export declare class IonicsignaturepadComponent implements OnInit, ControlValueAccessor {
    signaturePad: SignaturePad;
    signaturePadOptions: any;
    signatureImage: string;
    constructor();
    ngOnInit(): void;
    private onTouch;
    private disabled;
    onChange(data: any): void;
    canvasWidth: number;
    canvasHeight: number;
    backgroundColor: string;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(disabled: boolean): void;
    canvasResize(): void;
    ngAfterViewInit(): void;
    drawStart(): void;
    drawComplete(): void;
    drawClear(): void;
}
