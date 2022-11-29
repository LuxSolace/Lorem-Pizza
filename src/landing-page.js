import PizzaImg from "./assets/pizza.png";

export default function bodyHero() {
    const bodyHero = document.createElement("main");
    bodyHero.classList = "index";
    bodyHero.innerHTML = `       
    <aside>
  
        <h2>Lorem Pizza</h2>
  
        <h3>Des pizzas savoureuses.</h3>
  
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget placerat enim. Aenean sollicitudin pulvinar lorem sed vestibulum. Curabitur mollis mattis nunc, vitae molestie nisl convallis a.</p>
  
        <button>Découvrir notre menu</button>
  
    </aside>
  
    <div>
        <img src="${PizzaImg}" alt="Une délicieuse part de pizza flottant entourée de légumes sains.">
    </div>
    `
    return bodyHero;
  }