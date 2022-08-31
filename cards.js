"use strict"

const nomes = [
    'Iron Man',
    'Thanos',
    'Spider Man',
    'Thor',
    'Captain America'
]

const herois = [
    'Wounded, captured and forced to build a weapon by …make the world a safer, better place as Iron Man.',
    'The Mad Titan Thanos, a melancholy, brooding indiv…he became more powerful than any of his brethren.',
    'Peter’s relatively normal life changed abruptly du…it escaped and bit Peter before it was destroyed.',
    'As the Norse God of thunder and lightning, Thor wi…never, ever stop fighting for a worthwhile cause.',
    'Vowing to serve his country any way he could, youn… living, breathing symbol of freedom and liberty.'
]

// let indice = nomes.length;
// for (let i = 0; i < indice; i++) {
//     console.log(`${nomes[i]} ${herois[i]}`)
// }


const criarElementos = (titulo, texto) => {
    const main = document.querySelector('main');

    let indice = titulo.length;
    for (let j = 0; j < indice; j++) {
        let div = document.createElement('div');
        div.classList.add('text-container');
        div.innerHTML = `
            <h2>${titulo[j]}</h2>
            <li class="info">
                ${texto[j]}
            </li>
        `
        main.appendChild(div)
    }
}

criarElementos(nomes, herois);