import "./style.css";
import initialLoad from "./initial-load.js";
import landingPage from "./landing-page.js";
import contact from "./contact.js";
import menu from "./menu.js"

function removeMain() {
    if (document.querySelector("main")) { 
        document.querySelector("main").remove();
    }
}

function appendMain(element) {
    document.querySelector("header").insertAdjacentElement("afterend", element);
}

initialLoad();
addEventOnLinks();

function addEventOnLinks() {
    let links;
    links = document.querySelectorAll(".link");

    for (const link of links) {
        link.addEventListener("click", changePage)
    }
}

function changePage() {
    removeMain();
    if (this.dataset.id === "landingPage") {
        appendMain(landingPage());
        addEventOnLinks();
    } else if (this.dataset.id === "contact") {
        appendMain(contact());
    } else {
        appendMain(menu())
    }
}