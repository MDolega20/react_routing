const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

// API
app.get('/api/v1/item', (req,res) => {
    let apiData = [
        {
            name: "nazwa itemka",
            value: "wartość",
            image: "/scieżka_do_obrazka/obrazek.png"
        },
        {
            name: "nazwa itemka",
            value: "wartość",
            image: "/scieżka_do_obrazka/obrazek.png"
        },
        {
            name: "nazwa itemka",
            value: "wartość",
            image: "/scieżka_do_obrazka/obrazek.png"
        }
    ];
    res.json(apiData);
    console.log('Sent api');
});

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 80;
app.listen(port);

console.log('PORT: ' + port);