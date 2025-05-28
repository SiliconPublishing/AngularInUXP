import { NgModule, provideZoneChangeDetection, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { ExampleLibraryModule } from '@library';

@NgModule({
    providers: [provideZoneChangeDetection({ eventCoalescing: true })],
    declarations: [
        AppComponent,
    ],
    imports: [BrowserModule, ExampleLibraryModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
