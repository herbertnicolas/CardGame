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

    window.Deck = {}
    window.Deck.handleClick = () => {
        const $deck = document.querySelector('.deck') 
        const $allActives = $deck.querySelectorAll('.card-frente-verso.-active')
        //console.log($allActives)
        
        //const end = false;
        if( $allActives.length === 2 ){
            setTimeout(() => { 
                $allActives.forEach((card) => { 
                card.classList.remove('-active') })
            }, 1000);
            //end = true;
        }
    }
    

    const htmlBaralho = baralho.map((carta) => CardFrontBack(carta.logo, carta.alt));
    const $htmlContent = htmlBaralho.join('');
    //const $htmlContent = $htmlCardFrontBack.repeat(qtdCards)
    
    return /*html*/`
        <section class="deck" onClick="Deck.handleClick()">
            ${$htmlContent}
        </section>
    `
    ;
}

export default Deck;