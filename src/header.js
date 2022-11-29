export default function header() {
    const header = document.createElement("header");
    header.innerHTML = `           
    <nav>
    <h1>Lorem Pizza</h1>
    <ul>
        <li class="active">
            <a data-id="landingPage">Accueil</a>
        </li>
        <li>
            <a data-id="menu">Menu</a>
        </li>
        <li>
            <a data-id="contact">Contact</a>
        </li>
    </ul>
    </nav>
    `;
    return header;
}