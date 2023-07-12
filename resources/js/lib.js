class DOMElement {

    constructor(selector) {
        this.e = document.querySelector(selector);
    }

    show() {
        this.e.style.display = 'block';
    }

    hide() {
        this.e.style.display = 'none';
    }

}

export { DOMElement }