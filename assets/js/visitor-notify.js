/*
 * ============================================================
 * TechLab365 Visitor Notification - Diagnostic Version
 * ============================================================
 */

console.log("visitor-notify.js loaded");

const CONFIG = {
    enabled: true
};

function getCookie(name) {

    const cookies = document.cookie.split(";");

    for (const cookie of cookies) {

        const parts = cookie.trim().split("=");

        if (parts[0] === name) {
            return parts[1];
        }

    }

    return null;

}

function createVisitorId() {
    return crypto.randomUUID();
}

function getVisitorId() {

    let visitorId = getCookie("techlab365Visitor");

    if (visitorId) {
        console.log("Existing Visitor ID:", visitorId);
        return visitorId;
    }

    visitorId = createVisitorId();

    console.log("New Visitor ID:", visitorId);

    document.cookie =
        `techlab365Visitor=${visitorId}; max-age=31536000; path=/; SameSite=Lax`;

    return visitorId;

}

document.addEventListener("DOMContentLoaded", () => {

    console.log("DOMContentLoaded");

    if (!CONFIG.enabled) {

        console.log("Notifications disabled");

        return;

    }

    console.log("Sending request...");

    fetch(
        "https://techlab365-telegram.antoniogabriele-rizzo.workers.dev",
        {
            method: "POST",
            cache: "no-store",
            keepalive: true,
            headers: {
                "X-Visitor-ID": getVisitorId()
            }
        }
    )
    .then(response => {

        console.log("Status:", response.status);

        return response.text();

    })
    .then(text => {

        console.log("Response:", text);

    })
    .catch(error => {

        console.error("Fetch error:", error);

    });

});