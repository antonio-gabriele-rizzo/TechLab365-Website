/*
 * ============================================================
 * TechLab365 Visitor Notification
 * ============================================================
 */

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
        return visitorId;
    }

    visitorId = createVisitorId();

    document.cookie =
        `techlab365Visitor=${visitorId}; max-age=31536000; path=/; SameSite=Lax`;

    return visitorId;

}

document.addEventListener("DOMContentLoaded", () => {

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

                "X-Visitor-ID": getVisitorId()

            }

        }
    ).catch(console.error);

});