import { NgModule, provideZoneChangeDetection, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { ExampleLibraryModule } from '@library';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    providers: [provideZoneChangeDetection({ eventCoalescing: true })],
    declarations: [
        AppComponent,
    ],
    imports: [BrowserModule, FontAwesomeModule, ExampleLibraryModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
