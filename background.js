"use strict";

console.log("Pokedle Assistant - Background Worker Loaded");

let registered = null;

browser.tabs.onActiveChanged.addListener(async (tabID, selectInfo) => {
    let activeTab = await browser.tabs.get(tabID);
    if (activeTab.url?.match(/.+:\/\/.*\.?pokedle\.?\.net\/?.*/g)) {
        //Check if the new active tab matches the URL of *://*.pokedle.net/*
        console.log("Pokedle Assistant - Found a Pokedle Tab");
    } else {
        console.log("Pokedle Assistant - Tab Does Not Match")
    }
});

browser.runtime.onMessage.addListener(registerScript);
