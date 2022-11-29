export default function contact() {
    const contact = document.createElement("main");
    contact.classList = "contact";
    contact.innerHTML = `
    <div class="contact-info">
    <div>
        <span>Nous écrire</span>
        <p>lorempizza@pizzamail.com</p>
    </div>
    <div>
        <span>Nous téléphoner</span>
        <p>06 16 38 47</p>
    </div>
    <div>
        <span>Nous trouver</span>
        <p>103 rue Roger Salengro</p>
    </div>
    </div>
    <iframe class="google-view" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.0207748902!2d3.4316589518021647!3d50.440713695845886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2e8ec9ddee1ff%3A0x62c1e2899e039c08!2s103%20Rue%20Roger%20Salengro%2C%2059230%20Saint-Amand-les-Eaux!5e0!3m2!1sfr!2sfr!4v1669652588282!5m2!1sfr!2sfr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `
    return contact;
}