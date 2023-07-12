import Alpine from 'alpinejs';
import { DOMElement } from './lib';

window.Alpine = Alpine;
Alpine.start();

window.data = {};
window.loader = null;

let loadingData = fetch('./assets/settings.json')
    .then((response) => response.json())
    .then((json) => window.data = json);

window.addEventListener("DOMContentLoaded", (event) => {
    console.log("Document ready!");

    window.loader = new DOMElement('#loader');

    loadingData
        .then(() => {
            console.log("Loading data...");
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            console.log("Data ready!");
            window.loader.hide();
            app();
        });
});

function app() {
    console.log(window.data);
}