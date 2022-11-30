import foodMenu from "./assets/food-menu.json";

export default function menu() {
    const menu = document.createElement("main");
    menu.classList = "menu";
    menu.innerHTML = getHTMLfromJSON();
    return menu;
}

function getHTMLfromJSON() {
    let html = "";

    for (const key in foodMenu) {
        html += `<div class="sub-menu"><h3>${key}</h3>`
        
        foodMenu[key].forEach(element => {
            html += `
            <div class="pizza">
                <div class="pizza-title">
                    <span>${element.name}</span>
                    <span>${element.price}</span>
                </div>

                ${element.ingredients ? "<p>" + element.ingredients + "</p>" : ""}
            </div>
            `
        });

        html += `</div>`
    }

    return html;
}