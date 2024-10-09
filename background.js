
'use strict';

console.log("Pokedle Assistant - Background Worker Loaded");

let registered = null;



browser.runtime.onMessage.addListener(registerScript);