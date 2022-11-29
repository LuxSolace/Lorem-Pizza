import PizzaImg from "./assets/pizza.png";

export default function landingPage() {
    const landingPage = document.createElement("main");
    landingPage.classList = "index";
    landingPage.innerHTML = `
    <aside>
        <h2>Lorem Pizza</h2>
        <h3>Des pizzas savoureuses.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget placerat enim. Aenean sollicitudin pulvinar lorem sed vestibulum. Curabitur mollis mattis nunc, vitae molestie nisl convallis a.</p>
        <button class="link" data-id="menu">Découvrir notre menu</button>
    </aside>
    <div>
        <img src="${PizzaImg}" alt="Une délicieuse part de pizza flottant entourée de légumes sains.">
    </div>
    `
    return landingPage;
}