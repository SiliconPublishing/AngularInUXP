// These are the polyfills required to allow Angular to work in UXP

if (typeof window.global === 'undefined') window.global = window.globalThis;
if (typeof global.queueMicrotask !== 'function') {
    if (typeof global.setImmediate === 'function') {
        global.queueMicrotask = function (callback) {
            global.setImmediate(callback);
        };
    } else {
        global.queueMicrotask = function (callback) {
            global.setTimeout(callback, 0);
        };
    }
}

// In development, it is often easier to require these ahead of time and declare them globally.
// This can also be helpful for adding typescript support, but that is outside the scope
// of this demonstration.

try {
    window.uxp = require('uxp');
    window.fs = require('fs');
    window.os = require('os');
    window.host = uxp.host.name;
    switch (host) {
        case 'InDesign':
            window.indesign = require('indesign');
            break;
        case 'Photoshop':
            window.photoshop = require('photoshop');
            break;
    }
} catch (_) {
    console.error('Attempted to load UXP api outside UXP application');
}
