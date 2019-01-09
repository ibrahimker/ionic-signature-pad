import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicsignaturepadComponent } from './components/ionicsignaturepad.component';
import { IonicsignaturepadProvider } from './providers/ionicsignaturepad.provider';
import { IonicModule } from '@ionic/angular';
import { SignaturePadModule } from 'angular2-signaturepad';
 
@NgModule({
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
})
export class IonicSignaturePadModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IonicSignaturePadModule,
            providers: [IonicsignaturepadProvider]
        };
    }
}