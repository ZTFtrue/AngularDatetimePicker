# AngularDatetimePicker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## how to use

install:

```sh
npm i @ztftrue/angular-datetime-picker
```

in your ```.module.ts```

```ts
import { AngularDatetimePickerModule } from '@ztftrue/angular-datetime-picker';

 imports: [
    AngularDatetimePickerModule
  ]
```

in the html

```html
    <lib-angular-datetime-picker [(value)]="timeValue" ></lib-angular-datetime-picker>
```

The timeValue is default and output time.

Input type control show view. when type is date show date selector,time show time selector . datetime show date and time selector.

[demon](https://ztftrue.github.io/xmind-frontend-work/)

[github](https://github.com/ZTFtrue/AngularDatetimePicker)
