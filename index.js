//hent biblioteket IP 
const ip = require('ip')
console.log(ip.address())
//hent biblioteket express og gem objektet i en konstant
const express = require('express')
//opret en variabel til express serveren
const app = express()
//definer en port
const port = 6969
//vi laver en meget simpel database 

//serve en statisk mappe i roden 
app.use('/', express.static('public'))

// app.get('/', (req,res) =>{
//     console.log('besøg i roden')
// } )


// Hvis der kommer klienter der  
app.get('/api/naturkrafter', (req, res)=>{
    const obj1 ={
        'tyngdekraft':{
            'Effects': 'all particles with mass',
            'Force carrier particle': 'graviton (Not yet detected)'
        }
    }
    res.json(obj1)
    
})
app.get('/api/begreber', (req, res)=>{
    const obj2 ={
        'Hilbert-rummet': '9/10',
        'Lorentz transformations': '5/10',
        'Maxwell equations':'6/10',
        'Bells inequality':'7.5/10'
    }
    res.json(obj2)
    // res.send('Du er kommet til hval-API\'et')
})


app.listen(port, ()=>{
    console.log('Server lytter på port: ' + port)
}) 