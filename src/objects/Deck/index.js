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
// 2 - $allActives[0].childNodes[3].children[0].innerHTML 
// nao parece ser o caminho certo quando o primeiro clicado é o JS
    var index = 0;
    var clicks = [];
    var indiceClicks = 0;

    window.Deck = {};
    window.Deck.handleClick = () => {
        const $deck = document.querySelector('.deck') ;
        const $allActives = $deck.querySelectorAll('.card-frente-verso.-active');
        
        
        var novoCaminho = $allActives[0].childNodes[3].children[0].innerHTML;   //ou $allActives[0].childNodes[3].children[0].lastElementChild.alt pra comparar pelo alt da logo
        // console.log($allActives[0])
        // console.log("\nADICIONADO AO ARRAY: " + $allActives[0].childNodes[3].children[0].innerHTML)
        console.log("____________________________________")
       
        // console.log(novoCaminho)
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
            console.log("\n\n\nclicks[0] "+ clicks[0])
            console.log("clicks[1] "+ clicks[1])
            console.log("clicks[2] "+ clicks[2])
            console.log("clicks[3] "+ clicks[3])
            // console.log(indiceClicks)
            // console.log("vira ou nao vira???")
            const $seta = document.querySelector('.arrow');
            const cur = $seta.getAttribute("data-currentPlayer");
            //console.log($caminhoLogoB)
            console.log("if(clicks" + "[" + indiceClicks + "]" + " == clicks[" + (indiceClicks + 1) + "]")
           
            if(clicks[indiceClicks] == clicks[indiceClicks + 1]){
                
                console.log("É IGUAL")
                if(cur == 1) marcaPontoUm();
                if(cur == 2) marcaPontoDois();
                
                setTimeout(() => {
                    trocaVez();
                },400)

            }else{
                // for(i = index; i < clicks.length; i++){
                    
                    // }
                setTimeout(() => { 
                    $allActives.forEach((card) => { 
                        card.classList.remove('-active') })

                        trocaVez();
                }, 1000);
            }
            indiceClicks = indiceClicks + 2;
        }
        // console.log(index);
        index++;
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



/* FALTANDO 

1- ALEATORIZAR
2- TELA DE VITORIA
3- MUDAR BACKGROUND
4- COLOCAR DEV HERBERTNICOLAS EMBAIXO
5- TELA DE DIGITE O NOME DO JOGADOR

*/