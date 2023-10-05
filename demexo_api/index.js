const express = require('express');
const { pokemon } = require('./database/pokemon.json');

console.log(pokemon);

const app = express();

app.get('/', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.json(pokemon);                              // On est entrain de construire une API (simple) et c'est pour ça qu'on renvoit du JSON
});

app.get('/evolution', (req, res) => {
    const pokemonWithEvolution = pokemon.filter(p => p.next_evolution);

    res.json(pokemonWithEvolution);
});

app.get('/:id', (req, res) => {
    const { id } = req.params;

    if(isNaN(id)) {
        return res.status(400).json({ message: 'Invalid ID' });
    }

    const foundPokemon = pokemon.find(p => p.id === Number(id));

    if(foundPokemon) {
        res.json(foundPokemon);
    } else {
        res.status(404).json({ message: 'Pokemon not found' });
    }
});

app.get('/type/:type', (req, res) => {
    // utiliser filter et contains
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    const { type } = req.params; // Récupère moi juste le type de mon req.params
    // Peut aussi s'écire const type = req.params.type;

    const foundPokemons = pokemon.filter(p => p.type.includes(type));

    // Pour ceux qui veulent aller plus loin et gérer la case
    // const foundPokemons = pokemon.filter(p => p.type.map(t => t.toLowerCase()).includes(type.toLowerCase()));

    // Je n'ai pas besoin de verifier si foundPokemons est vide car si aucun pokemon ne match il me retournera un tableau vide
    res.json(foundPokemons);
});

// Une route qui permet de récupérer tous les pokemons qui aurait un avantage au combat contre le pokemon selection avec un id.

// /weakness/:id 
// Exemple :
// /weakness/25 -> Tous les pokemons qui serait un avantage (Ground) au combat contre le pokemon de id 25 aka Pikachu
// /weakness/1 -> Tous les pokemons qui serait un avantage (Ice, Fire, Flying and Psychic) au combat contre le pokemon de id 1 aka Bulbasaur

// 1- déclarer une route dynamique "weakness" avec comme parametre id
// 2- récupérer le pokemon selectionné avec l'id (spoiler on l'a déjà fait)
// 3- je déclare une variable nommé pokemons qui va contenir un tableau vide. Il contiendra a terme tous les pokemons
// 4- POUR CHAQUE (foreach -> for of) faiblesse (weakness représenté par un tableau de types) je vais récupérer les pokémons qui on ce type (spoiler on sait récupérer les pokémons d'un type)
//          5- j'ajoute à mon tableau vide tous les pokemons trouvés
//                  5.a (solution plus simple mais moins opti.) POUR CHAQUE pokemon trouvé je l'ajoute à mon tableau pokemons
//                  5.b (solution plus opti mais moins simple) Concatnez le tableau récupérer avec le tableau pokemons
// 6- Renvoyer le tableau pokemons à l'aide de res.json




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Les 5 fonctions à connaitre obligatoirement sur les tableaux
// find -> trouver un élément
// filter -> pour trouver plusieurs élements 
// includes -> pour vérifier si un élément existe dans un tableau
// map -> pour modifier les éléments d'un tableau
// forEach -> pour parcourir les éléments d'un tableau

// Une route qui liste tous les pokemons
// Une route qui permet de récupérer un pokemon par son id
// Une route qui permet de récupérer tous les pokemons d'un type
// Une route qui permet de récupérer tous les pokemons qui peuvent évoluer.

