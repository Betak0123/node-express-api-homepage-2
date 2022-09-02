console.log('hejsa')
let naturDiv = document.querySelector('#naturkrafter')
let begrebDiv = document.querySelector('#begreber')
let h2Div1 = document.querySelector('#naturkrafter h2')
let h2Div2 = document.querySelector('#begreber h2')
naturDiv.style.top = '80vh';
begrebDiv.style.top = '90vh';

h2Div1.addEventListener('click', ()=>{
    if(naturDiv.style.top == '80vh'){
        naturDiv.style.top = 0;
    }else{
        naturDiv.style.top = '80vh';
    }
})
h2Div2.addEventListener('click', ()=>{
    if(begrebDiv.style.top == '90vh'){
        begrebDiv.style.top = 0;
    }else{
        begrebDiv.style.top = '90vh';
    }
})

document.querySelector('#submitH').addEventListener('click',()=>{
    console.log('hej')
    fetch('http://localhost:6969/api/naturkrafter')
        .then(res => res.json())
            .then(json => document.querySelector('#naturkrafter .json').innerHTML = JSON.stringify(json))
})
document.querySelector('#submitJ').addEventListener('click',()=>{
    console.log('hej')
    fetch('http://localhost:6969/api/begreber')
        .then(res => res.json())
            .then(json => document.querySelector('#begreber .json').innerHTML = JSON.stringify(json))
})