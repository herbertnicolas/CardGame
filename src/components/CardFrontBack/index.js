import Card from "../Card";
import './style.css';

function CardFrontBack(){
//funcao responsavel pelas faces de cada carta
    return ( /*html*/
    `
        <article class = "card-frente-verso">
            <div class="front">
                ${Card("logo-js", "logo-js")}
            </div>
            <div class="back">
                ${Card("logo-css", "logo-css")}
            </div>
        </article>
    `
    );
}

export default CardFrontBack;