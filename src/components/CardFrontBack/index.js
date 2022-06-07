import Card from "../Card";
import './style.css';
//deixando a funçao handleClick no escopo global, pra ser acessada
window.cardFrontBack = {}
window.cardFrontBack.handleClick = (event) => {
    const $alvo = event.target.parentNode.parentNode.parentNode;
    $alvo.classList.add('-active')
}

function CardFrontBack(){
//funcao responsavel pelas faces de cada carta
    
    return ( /*html*/
    `
        <article class = "card-frente-verso" onClick="cardFrontBack.handleClick(event)">
            <div class="card -back">
                ${Card("logo-js", "logo-js")}
            </div>
            <div class="card -front">
                ${Card("logo-css", "logo-css")}
            </div>
        </article>
    `
    );
}

export default CardFrontBack;