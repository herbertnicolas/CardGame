import './style.css';

function PlayerName(name){
    const $htmlName = name;

    return `
        <p class="name-style">
            ${$htmlName}
        </p>
        `
    ;
}

export default PlayerName;  