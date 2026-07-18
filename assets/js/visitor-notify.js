/*
============================================================
TechLab365 Visitor Notification
Version: 1.0

This file controls the Telegram notification system for
the About page.

============================================================
CONFIGURATION GUIDE
============================================================

enabled

true  = Telegram notifications are enabled.

false = Telegram notifications are completely disabled.
        The website will not contact the notification
        service.

------------------------------------------------------------

testMode

true  = Developer Mode.

        Your visits always generate Telegram
        notifications. Use this while developing or
        testing the website.

false = Production Mode.

        Your visits are treated the same as every other
        visitor. Future anti-spam protection will also
        apply to your visits.

============================================================
*/

const CONFIG = {

    // Enable or disable the notification system.
    enabled: true,

    // Enable while developing or testing.
    testMode: true

};

document.addEventListener("DOMContentLoaded", () => {

    // Notification system disabled
    if (!CONFIG.enabled) {
        return;
    }

    fetch(
        "https://techlab365-telegram.antoniogabriele-rizzo.workers.dev",
        {
            method: "POST",
            cache: "no-store",
            keepalive: true,
            headers: {
                "X-Test-Mode": CONFIG.testMode
            }
        }
    ).catch(console.error);

});