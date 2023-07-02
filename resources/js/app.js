import Alpine from 'alpinejs';

window.Alpine = Alpine;
Alpine.start();

window.data = {};
window.loader = null;

let loadingData = fetch('./assets/settings.json')
    .then((response) => response.json())
    .then((json) => window.data = json);

window.addEventListener("DOMContentLoaded", (event) => {
    console.log("Document ready!");

    window.loader = document.getElementById('loading');

    loadingData
        .then(() => {
            console.log("Loading data...");
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            console.log("Data ready!");
            window.loader.style.display = 'none';
            app();
        });
});

function app() {
    console.log(window.data);
}