import Card from "../Card";
import './style.css';

function CardFrontBack(){
//funcao responsavel pelas faces de cada carta
    return ( /*html*/
    `
        <article class = "card-frente-verso">
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