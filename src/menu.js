export default function menu() {
    const menu = document.createElement("main");
    menu.classList = "menu";
    menu.innerHTML = `
    <div class="sub-menu">
    
        <h3>Base tomate</h3>

        <div class="pizza">
            <div class="pizza-title">
                <span>Marguerita</span>
                <span>6€</span>
            </div>
            <p class="ingredients">Fromage, olives</p>
        </div>

        <div class="pizza">
            <div class="pizza-title">
                <span>Végétarienne</span>
                <span>7.5€</span>
            </div>
            <p>Fromage, poivrons, aubergines, pomme de terre, champignons</p>
        </div>

        <div class="pizza">
            <div class="pizza-title">
                <span>Reine</span>
                <span>8€</span>
            </div>
            <p>Fromage, jambon, champignons</p>
        </div>

        <div class="pizza">
            <div class="pizza-title">
                <span>4 saisons</span>
                <span>8€</span>
            </div>
            <p>Fromage, jambon, poivrons, olives, oignons, champignons</p>
        </div>

    </div>

    <div class="sub-menu">
    
        <h3>Base creme fraiche</h3>

        <div class="pizza">
            <div class="pizza-title">
                <span>Paysanne</span>
                <span>8€</span>
            </div>
            <p class="ingredients">Fromage, poulet, pomme de terre</p>
        </div>

        <div class="pizza">
            <div class="pizza-title">
                <span>Fermière</span>
                <span>8.5€</span>
            </div>
            <p>Fromage, jambon, champignons</p>
        </div>

        <div class="pizza">
            <div class="pizza-title">
                <span>Délice</span>
                <span>8.5€</span>
            </div>
            <p>Fromage, poulet, pomme de terre, oignons, champignons</p>
        </div>

    </div>

    <div class="sub-menu">
    
        <h3>Desserts</h3>

        <div class="pizza">
            <div class="pizza-title">
                <span>Tarte normande aux pommes</span>
                <span>2€</span>
            </div>
        </div>

        <div class="pizza">
            <div class="pizza-title">
                <span>Tiramisu</span>
                <span>2.5€</span>
            </div>
        </div>

        <div class="pizza">
            <div class="pizza-title">
                <span>Fondant chocolat</span>
                <span>2.5€</span>
            </div>
        </div>

    </div>

    <div class="sub-menu">
    
        <h3>Boissons</h3>

        <div class="pizza">
            <div class="pizza-title">
                <span>33cl</span>
                <span>1.2€</span>
            </div>
        </div>

        <div class="pizza">
            <div class="pizza-title">
                <span>Eau pétillante</span>
                <span>1.5€</span>
            </div>
        </div>

    </div>
    `;
    return menu;
}