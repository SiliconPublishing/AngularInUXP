import { NgModule, provideZoneChangeDetection, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExampleBodyComponent } from './components';
import { ExampleHighlightDirective } from './directives';

@NgModule({
    providers: [provideZoneChangeDetection({ eventCoalescing: true })],
    declarations: [
        AppComponent
    ],
    imports: [
        ExampleBodyComponent,
        ExampleHighlightDirective,
        BrowserModule,
        FontAwesomeModule],
    bootstrap: [AppComponent],
})
export class AppModule { }
