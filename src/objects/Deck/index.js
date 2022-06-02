import './style.css';
import Card from '../../components/Card';
import CardFrontBack from '../../components/CardFrontBack';

function Deck(qtdCards){
    const $htmlCardFrontBack = CardFrontBack();
    const $htmlContent = $htmlCardFrontBack.repeat(qtdCards)
    
    return /*html*/`
        <section class = "deck">
            ${$htmlContent}
        </section>
    `
    ;
}

export default Deck;