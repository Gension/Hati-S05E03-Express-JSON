const express= require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

const users = [{
    id: 1,
    username: 'Sean',
    firstName: 'Sean',
    lastName: 'Red',
    dob: '22/07/1989'
}, {
    id: 2,
    username: 'Elon',
    firstName: 'Elon',
    lastName: 'Musk',
    dob: 'n/a'
},  {
    id: 3,
    username: 'JeffBisou',
    firstName: 'Jeffrey',
    lastName: 'Besoins',
    dob: 'n/a'
}];

app.get('/', (req, res) => {
    res.render('home', { users });
});

app.listen(3000, () => {   
    console.log('Server is running on http://localhost:3000');
});


// EXO Faire un projet express qui contient un tableau avec une liste de films
// En utilisant au choix EJS ou PUG les lister dans un tableau mis en forme