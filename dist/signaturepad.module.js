import { NgModule } from '@angular/core';
import { IonicsignaturepadComponent } from './components/ionicsignaturepad.component';
import { IonicsignaturepadProvider } from './providers/ionicsignaturepad.provider';
import { IonicModule } from '@ionic/angular';
import { SignaturePadModule } from 'angular2-signaturepad';
var IonicSignaturePadModule = /** @class */ (function () {
    function IonicSignaturePadModule() {
    }
    IonicSignaturePadModule.forRoot = function () {
        return {
            ngModule: IonicSignaturePadModule,
            providers: [IonicsignaturepadProvider]
        };
    };
    IonicSignaturePadModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        // Only if you use elements like ion-content, ion-xyz...
                        IonicModule,
                        SignaturePadModule
                    ],
                    declarations: [
                        // declare all components that your module uses
                        IonicsignaturepadComponent
                    ],
                    exports: [
                        // export the component(s) that you want others to be able to use
                        IonicsignaturepadComponent
                    ]
                },] },
    ];
    return IonicSignaturePadModule;
}());
export { IonicSignaturePadModule };
//# sourceMappingURL=signaturepad.module.js.map