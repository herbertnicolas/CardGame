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
// 1 - TODAS AS CARTAS VIRANDO QUANDO ERRA
// 2 - $allActives[index] is undefined
// 3 - QUANDO CLICA 
    var index = 0;
    var clicks = [];
    var indiceClicks = 0;

    window.Deck = {};
    window.Deck.handleClick = () => {
        const $deck = document.querySelector('.deck') ;
        const $allActives = $deck.querySelectorAll('.card-frente-verso.-active');
        
        
        var novoCaminho = $allActives[index].childNodes[3].children[0].innerHTML;
        console.log($allActives)
        clicks.push(novoCaminho);

        // clicks.forEach(function(way, i) {
        //     console.log('[forEach]', way, i)
        // })
        const compara = () => {

        }
         
        const trocaVez = () => {
            const $seta = document.querySelector('.arrow');
            const cur = $seta.getAttribute("data-currentPlayer");
            $seta.setAttribute( "data-currentPlayer", cur == 1 ? 2 : 1 );
        } 

        const marcaPontoUm = () => {
            const $score = document.querySelector(".score.-um");
            const getScore = parseInt($score.getAttribute('data-pontos'));
            $score.setAttribute('data-pontos', getScore + 1);
            
        }
        const marcaPontoDois = () => {
            const $score = document.querySelector(".score.-dois");
            const getScore = parseInt($score.getAttribute('data-pontos'));
            $score.setAttribute('data-pontos', getScore + 1);
        }
        

        if( clicks.length % 2 === 0 ){ //trocar por %2 == 0
            // console.log(indiceClicks)
            const $seta = document.querySelector('.arrow');
            const cur = $seta.getAttribute("data-currentPlayer");
            //console.log($caminhoLogoB)
            console.log("if(clicks" + "[" + indiceClicks + "]" + "== clicks[" + (indiceClicks + 1) + "]")
            if(clicks[indiceClicks] == clicks[indiceClicks + 1]){
                if(cur == 1) marcaPontoUm();
                if(cur == 2) marcaPontoDois();
                
                setTimeout(() => {
                    trocaVez();
                },400)

                indiceClicks = indiceClicks + 2;
            }else{
                // for(i = index; i < clicks.length; i++){

                // }
                setTimeout(() => { 
                    $allActives.forEach((card) => { 
                    card.classList.remove('-active') })

                    trocaVez();
                }, 1000);
            }
        }
        // console.log(index);
        index = index + 1;
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