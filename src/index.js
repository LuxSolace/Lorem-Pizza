import "./style.css";
import Pizza from "./assets/pizza.png"

function component() {
    const element = document.createElement('div');

    element.innerHTML = "Lorem Pizza";
    element.classList.add("basic");
 
   // Add the image to our existing div.
   const PizzaImg = new Image();
   PizzaImg.src = Pizza;
 
   element.appendChild(PizzaImg);
 
    return element;
  }
 
  document.body.appendChild(component());