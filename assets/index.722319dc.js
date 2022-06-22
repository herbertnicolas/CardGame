const v=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}};v();function d(o="h-letter",e="logo-verso"){return`
        <article class="card-face">
            <img src="images/${o}.png" alt="${e}">
        </article>
        `}window.cardFrontBack={};window.cardFrontBack.handleClick=o=>{o.target.closest(".card-frente-verso").classList.toggle("-active")};function h(o,e){return`
        <article class = "card-frente-verso" onClick="cardFrontBack.handleClick(event)">
            <div class="card -back">
                ${d()}
            </div>
            <div class="card -front">
                ${d(o,e)}
            </div>
        </article>
    `}const y=[{logo:"logo-js",alt:"logo javascript"},{logo:"logo-js",alt:"logo javascript"},{logo:"logo-css",alt:"logo css"},{logo:"logo-css",alt:"logo css"},{logo:"eu-pixel",alt:"herbert-pixel"},{logo:"eu-pixel",alt:"herbert-pixel"}];function b(o){var e=[],s=0;return window.Deck={},window.Deck.handleClick=()=>{const n=document.querySelector(".deck").querySelectorAll(".card-frente-verso.-active");var p=n[0].childNodes[3].children[0].innerHTML;console.log("____________________________________"),e.push(p);const i=()=>{const a=document.querySelector(".arrow"),c=a.getAttribute("data-currentPlayer");a.setAttribute("data-currentPlayer",c==1?2:1)},f=()=>{const a=document.querySelector(".score.-um"),c=parseInt(a.getAttribute("data-pontos"));a.setAttribute("data-pontos",c+1)},g=()=>{const a=document.querySelector(".score.-dois"),c=parseInt(a.getAttribute("data-pontos"));a.setAttribute("data-pontos",c+1)};if(e.length%2===0){console.log(`


clicks[0] `+e[0]),console.log("clicks[1] "+e[1]),console.log("clicks[2] "+e[2]),console.log("clicks[3] "+e[3]);const c=document.querySelector(".arrow").getAttribute("data-currentPlayer");console.log("if(clicks["+s+"] == clicks["+(s+1)+"]"),e[s]==e[s+1]?(console.log("\xC9 IGUAL"),c==1&&f(),c==2&&g(),setTimeout(()=>{i()},400)):setTimeout(()=>{n.forEach(m=>{m.classList.remove("-active")}),i()},1e3),s=s+2}},`
        <section class="deck" onClick="Deck.handleClick()">
            ${y.map(t=>h(t.logo,t.alt)).join("")}
        </section>
    `}function u(o){return`
        <p class="name-style">
            ${o}
        </p>
        `}function k(o=0){return`
    <ol class="score -um" data-pontos="${o}">
        <li class = "pointer"> Um</li>
        <li class = "pointer"> Dois</li>
        <li class = "pointer"> Tres</li>
    </ol>    
    `}function $(o=0){return`
    <ol class="score -dois" data-pontos="${o}">
        <li class = "pointer"> Um</li>
        <li class = "pointer"> Dois</li>
        <li class = "pointer"> Tres</li>
    </ol>    
    `}function _(o){return`
    <span class="vs-comp">
        ${o}
    </span>
    `}function x(o=1){return`
        <img class="arrow" data-currentPlayer=${o}
        src="images/arrow.png" alt="seta">
    `}function w(){return`
        <header class = "score-board">
            ${x()}
            ${u("Player1")}
            ${k()}
            ${_("vs")}
            ${$()}
            ${u("Player2")}
        </header>
        `}const P=document.querySelector("#root");P.insertAdjacentHTML("beforeend",`
        ${w()}
        ${b()}
        
    `);
