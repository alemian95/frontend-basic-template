import Alpine from 'alpinejs';

window.Alpine = Alpine;
Alpine.start();

window.settings = {};

let loadingSettings = fetch('./assets/settings.json')
    .then((response) => response.json())
    .then((json) => window.settings = json);

window.addEventListener("DOMContentLoaded", (event) => {
    console.log("Document ready!");

    loadingSettings
        .then(() => {
            console.log("Loading settings...");
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            console.log("Settings ready!");
            document.getElementById('loading').style.display = 'none';
            app();
        });
});

function app() {
    console.log(window.settings);
}