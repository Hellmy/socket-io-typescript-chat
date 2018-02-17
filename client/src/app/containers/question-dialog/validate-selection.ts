import { AbstractControl } from '@angular/forms';

export function ValidateSelection(control: AbstractControl) {
    console.log(control);
    if (Array.isArray(control.value) && control.value.filter(value => value.selected === true).length < 1) {
        return { invalidSelection: true };
    }
    // all valid
    return null;
}
