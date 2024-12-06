import express from 'express';
const router = express.Router();

router.get('/hello-world', (req, res) => {
    res.send({message: "Hello, world!"});
});

router.get('/teams', (req, res) => {
    res.send([
    {
        name: "49ers",
        location: "San Fransisco"
    },{
        name: "Patriots",
        location: "Boston"
    }
    ]);
});

router.get('/teams/:teamName', (req, res) => {

    const team = req.params.teamName;

    if (team.toLowerCase() === 'arsenal'){
        res.send({message: team + " are by far the greatest team"})
    } else{
        res.send({message: team + " are okay I guess"})
    };

    res.send();
});

router.get('/fruits/:fruitId', (req, res) => {

    const fruitId = req.params.fruitId;

    let fruits = [
        "Apple",
        "Orange",
        "Banana"
    ];

    if (parseInt(fruitId) > fruits.length){
        res.send({error: "Fruit does not exist"})
    } else if (parseInt(fruitId) <= 0) {
        res.send({error: "Fruit id must be 1 or higher"})
    } else if (parseInt(fruitId) <= fruits.length && parseInt(fruitId) > 0){
        res.send({ fruit: fruits[fruitId -1] });
    } else {
        res.send({error: "Fruid id must be a number"})
    };
});

router.get('/meals', (req, res) => {


    let italianMeals = [
        "Risotto",
        "Pizza",
        "Lasagna"
    ];

    let globalMeals = [
        "Cheeseburger",
        "Aromatic Duck",
        "Djoloff",
    ];

    if (req.query.country !== 'italy') return res.send(globalMeals);

    if (req.query.country.toLowerCase() === 'italy') return res.send(italianMeals);
});

router.post('/add-note', (req, res) => {
    
    const note = req.body;

    res.send({
        status: 200,
        message: "Sucessfully added note",
        note: note
    });

});

export default router;