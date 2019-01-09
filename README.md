# Ionic Signature Pad
This is an ionic 4 plugin to input signature based on [wulfsolter](https://github.com/wulfsolter/angular2-signaturepad.git) repository.
It's HTML5 canvas based and uses variable width Bézier curve interpolation based on Smoother Signatures post by Square. It works in all modern desktop and mobile browsers and doesn't depend on any external libraries.
![Example](https://f.cloud.github.com/assets/9873/268046/9ced3454-8efc-11e2-816e-a9b170a51004.png)
# Disclaimer
This project was tested in ionic 4.0.0-beta.15 for my personal purposes

## How to use

1. Install the plugin
```
npm install ionicsignaturepad
```

2. Import and add in app.module.ts
```
....
import { IonicSignaturePadModule,IonicsignaturepadProvider } from 'ionicsignaturepad';
....
```

2. In app.module.ts, add the module and provider to imports and providers sections
```
imports {
....
IonicSignaturePadModule,
....
}

providers [
....
IonicsignaturepadProvider,
....
]
```

3. In component.module.ts, import and export the component
```
...
import { IonicSignaturePadModule, IonicsignaturepadComponent } from 'ionicsignaturepad';
...
imports:[
IonicSignaturePadModule
]
...
exports: [
...
IonicsignaturepadComponent,
...
]
```

4. Use it in respective html like this: 
```
<ion-signaturepad [(ngModel)]="signature"></signature>

//Base 64 image of the signature
<p>{{signature}}</p>
```