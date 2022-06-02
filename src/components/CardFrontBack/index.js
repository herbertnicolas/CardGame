import Card from "../Card";

function CardFrontBack(){

    return ( /*html*/
    `
        <article>
            ${Card("logo-js", "logo-js")}
            ${Card("logo-css", "logo-css")}
        </article>
    `
    );
}

export default CardFrontBack;