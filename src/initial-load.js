import header from "./header.js";
import footer from "./footer.js";
import bodyHero from "./landing-page.js";

export default function initialLoad() {
    const container = document.createElement("div");
    container.classList = "container";
    const wrapper = document.createElement("div");
    wrapper.classList = "wrapper";

    wrapper.appendChild(header());
    wrapper.appendChild(bodyHero());
    wrapper.appendChild(footer());

    container.appendChild(wrapper);

    return container;
}