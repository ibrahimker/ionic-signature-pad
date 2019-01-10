import { Component,Input, OnInit,ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {SignaturePad} from 'angular2-signaturepad/signature-pad';

const HTML_TEMPLATE = `
<ion-row>
<ion-col style="text-align:right;" class="no-padding">
<ion-button fill="clear" (click)="drawClear()" style="--padding-top: 0; --padding-bottom: 0; --padding-start: 0; --padding-end: 0; --margin-top: 4px; --margin-bottom: 0; --margin-start: 0; --margin-end: 8px;"><ion-icon slot="icon-only" name="close" color="dark"></ion-icon></ion-button>
</ion-col>
</ion-row>
<signature-pad [options]="signaturePadOptions" id="signatureCanvas" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete()"></signature-pad>`;

@Component({
	selector: 'ion-signaturepad',
	template: HTML_TEMPLATE,
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: IonicsignaturepadComponent,
		multi: true
	}]
})
export class IonicsignaturepadComponent implements OnInit,ControlValueAccessor {

	@ViewChild(SignaturePad) public signaturePad : SignaturePad;

	public signaturePadOptions : any = {};
	public signatureImage : string;

	constructor() {
		this.signaturePadOptions = {
			minWidth: 2,
			canvasWidth: 800,
			canvasHeight: 240,
			backgroundColor:'rgb(255,255,255)'
		}
	}

	ngOnInit() {
	}

	private onTouch: Function = () => {};
	private disabled: boolean = false;

	onChange(data) {
		
	}

	@Input() set canvasWidth(data: number) {
		this.signaturePadOptions.canvasWidth = data;
	}

	@Input() set canvasHeight(data: number) {
		this.signaturePadOptions.canvasHeight = data;
	}

	@Input() set backgroundColor(data: string) {
		this.signaturePadOptions.backgroundColor = data;
	}

	// Allow Angular to set the value on the component
	writeValue(value): void {
		this.onChange(value)
		
	}

	// Save a reference to the change function passed to us by 
	// the Angular form control
	registerOnChange(fn): void {
		this.onChange = fn;
		
	}

	// Save a reference to the touched function passed to us by 
	// the Angular form control
	registerOnTouched(fn): void {
		this.onTouch = fn;
		
	}

	// Allow the Angular form control to disable this input
	setDisabledState(disabled: boolean): void {
		this.disabled = disabled;
		
	}

	canvasResize() {
		let canvas = document.querySelector('canvas');
		this.signaturePad.set('minWidth', 1);
	}

	ngAfterViewInit() {
		this.signaturePad.clear();
		this.canvasResize();
	}

	drawStart(){

	}

	drawComplete() {
		this.signatureImage = this.signaturePad.toDataURL('image/jpeg', 0.5);
		this.writeValue(this.signatureImage);
	}

	drawClear() {
		this.signaturePad.clear();
		this.signatureImage = null;
		this.writeValue(this.signatureImage);
	}
}
