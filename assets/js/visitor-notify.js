/*
==================================================
TechLab365 Visitor Notification Configuration
==================================================
*/

const CONFIG = {
  // Master switch
  enabled: true,

  // Receive notifications while testing
  testMode: true,
};

/*
==================================================
Do not modify anything below unless improving
the notification system.
==================================================
*/

document.addEventListener("DOMContentLoaded", () => {
  if (!CONFIG.enabled) {
    return;
  }

  fetch("https://techlab365-telegram.antoniogabriele-rizzo.workers.dev", {
    method: "POST",
    cache: "no-store",
    keepalive: true,
  }).catch(console.error);
});
