import { Component } from '@angular/core';
import { environment } from 'environments/environment';
import { ExampleListService } from './services';

declare var host: any;
declare var indesign: any;
declare var photoshop: any;

@Component({
    standalone: false,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    constructor(public list: ExampleListService) { }

    public showBrightnessControls = environment.showBrightnessControls;

    public inputValue = '';

    public filterValue = '';

    public onInput(event: any) {
        this.inputValue = event.target.value
    }

    public onFilter(event: any) {
        this.filterValue = event.target.value
    }

    public setInterface(brightness: UIBrightness) {
        switch (host) {
            case 'InDesign':
                return InDesignSetInterface(brightness);
            case 'Photoshop':
                return PhotoshopSetInterface(brightness);
        }
    }
}

type UIBrightness = 'darkest' | 'dark' | 'light' | 'lightest'

function InDesignSetInterface(brightness: UIBrightness) {
    switch (brightness) {
        case 'darkest':
            indesign.app.generalPreferences.uiBrightnessPreference = 0.2
            break;
        case 'dark':
            indesign.app.generalPreferences.uiBrightnessPreference = 0.4
            break;
        case 'light':
            indesign.app.generalPreferences.uiBrightnessPreference = 0.6
            break;
        case 'lightest':
            indesign.app.generalPreferences.uiBrightnessPreference = 0.8
            break;
    }
}


function PhotoshopSetInterface(brightness: UIBrightness) {
    let brightnessValue = ''
    switch (brightness) {
        case 'darkest':
            brightnessValue = "kPanelBrightnessDarkGray"
            break;
        case 'dark':
            brightnessValue = "kPanelBrightnessMediumGray"
            break;
        case 'light':
            brightnessValue = "kPanelBrightnessLightGray"
            break;
        case 'lightest':
            brightnessValue = "kPanelBrightnessOriginal"
            break;
    }

    const runBatchPlay = async () => {
        let commands = [
            {
                "_obj": "set",
                "_target": [
                    {
                        "_property": "interfacePrefs",
                        "_ref": "property"
                    },
                    {
                        "_enum": "ordinal",
                        "_ref": "application",
                        "_value": "targetEnum"
                    }
                ],
                "to": {
                    "_obj": "interfacePrefs",
                    "kuiBrightnessLevel": {
                        "_enum": "uiBrightnessLevelEnumType",
                        "_value": brightnessValue
                    }
                }
            }
        ];

        return await photoshop.action.batchPlay(commands, {});
    }

    photoshop.core.executeAsModal(runBatchPlay, { "commandName": "Action Commands" })
}


