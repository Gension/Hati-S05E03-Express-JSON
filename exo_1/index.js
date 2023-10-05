const express = require('express');
const app = express();

app.set('view engine', 'pug'); // je dois configurer le moteur de vue
app.set('views', './views'); // je dois configurer le dossier des vues

const movieList = [
    'Back to the Future',
    'Back to the Future Part II',
    'Back to the Future Part III',
    'Star Wars - Episode I - The Phantom Menace',
    'Star Wars - Episode II - Attack of the Clones',
    'Star Wars - Episode III - Revenge of the Sith',
    'Star Wars - Episode IV - A New Hope',
    'Star Wars - Episode V - The Empire Strikes Back',
    'Star Wars - Episode VI - Return of the Jedi',
    'Star Wars - Episode VII - The Force Awakens',
    'Star Wars - Episode VIII - The Last Jedi',
    'Star Wars - Episode IX - The Rise of Skywalker',
    'A Star Wars Story: Rogue One',
]

app.get('/', (req, res) => {
    res.render('home', { movies : movieList})
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});