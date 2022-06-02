import Card from "../Card";

function CardFrontBack(){

    return ( /*html*/
    `
        <article>
            ${Card()}
            ${Card()}
        </article>
    `
    );
}

export default CardFrontBack;