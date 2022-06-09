import './style.css';
import Card from '../../components/Card';
import CardFrontBack from '../../components/CardFrontBack';

const baralho = [
    {
        logo: "logo-js",
        alt: "logo javascript"
    },
    {
        logo: "logo-js",
        alt: "logo javascript"
    },
    {
        logo:"logo-css",
        alt: "logo css"
    },
    {
        logo:"logo-css",
        alt: "logo css"
    },
    {
        logo:"eu-pixel",
        alt: "herbert-pixel"
    },
    {
        logo:"eu-pixel",
        alt: "herbert-pixel"
    }
]

function Deck(qtdCards){

    const htmlBaralho = baralho.map((carta) => CardFrontBack(carta.logo, carta.alt));
    const $htmlContent = htmlBaralho.join('');
    console.log($htmlContent)
    //const $htmlContent = $htmlCardFrontBack.repeat(qtdCards)
    
    return /*html*/`
        <section class = "deck">
            ${$htmlContent}
        </section>
    `
    ;
}

export default Deck;