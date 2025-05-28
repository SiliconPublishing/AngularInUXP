import { NgModule } from '@angular/core';
import { ExampleBodyComponent } from './components';
import { ExampleHighlightDirective } from './directives';

const componentsAndDirectives = [
    ExampleBodyComponent,
    ExampleHighlightDirective
];

@NgModule({
    imports: componentsAndDirectives,
    exports: componentsAndDirectives,
})
export class ExampleLibraryModule {}
