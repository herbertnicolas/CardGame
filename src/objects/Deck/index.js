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
/* BUGS */
//1 - depois do primeiro ponto, allActives[i] fica estatico
//2 - erro no primeiro clique por conta do out of bounds do allActives[1]

    window.Deck = {}
    window.Deck.handleClick = () => {
        const $deck = document.querySelector('.deck') ;
        const $allActives = $deck.querySelectorAll('.card-frente-verso.-active');
        const $caminhoLogoA = $allActives[0].childNodes[3].children[0].innerHTML;
        const $caminhoLogoB = $allActives[1].childNodes[3].children[0].innerHTML;
          
        const trocaVez = () =>{
            const $seta = document.querySelector('.arrow');
            const cur = $seta.getAttribute("data-currentPlayer");
            $seta.setAttribute( "data-currentPlayer", cur == 1 ? 2 : 1 );
        } 

        const marcaPonto = () => {
            const $score = document.querySelector('.score');
            const getScore = $score.getAttribute('data-pontos');
            $score.setAttribute('data-pontos', getScore + 1);
        }

        if( $allActives.length === 2 ){
            
            if($caminhoLogoA === $caminhoLogoB){
                
                marcaPonto();
                
                setTimeout(() => {
                    trocaVez();
                },400)
            }else{
                
                setTimeout(() => { 
                    $allActives.forEach((card) => { 
                    card.classList.remove('-active') })
                    
                    trocaVez();
                }, 1000);
            }
            
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