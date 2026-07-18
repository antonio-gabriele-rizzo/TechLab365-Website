const CONFIG = {

    profile: "alpha"

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
        `techlab365Visitor=${visitorId}; Max-Age=31536000; Path=/; SameSite=Lax; Secure`;

    return visitorId;

}

document.addEventListener("DOMContentLoaded", () => {

    fetch(

        "https://techlab365-telegram.antoniogabriele-rizzo.workers.dev",

        {

            method: "POST",

            cache: "no-store",

            keepalive: true,

            headers: {

                "X-Visitor-ID": getVisitorId(),

                "X-Config": CONFIG.profile

            }

        }

    ).catch(console.error);

});