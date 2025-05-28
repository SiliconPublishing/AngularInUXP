import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
    standalone: true,
    selector: 'example-body',
    templateUrl: './example-body.component.html',
    styleUrl: './example-body.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExampleBodyComponent {}
