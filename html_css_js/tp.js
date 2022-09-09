"use strict";
// Creer par Abdourahmane 
/* function changerDeCouleur(){

    const bloc =document.getElementById('container').querySelectorAll('div');

    const p = document.getElementById('container').querySelectorAll('p');
    
    for (let index = 0; index < bloc.length; index++) {
        if (bloc[index].classList.contains('changeColor')) {
            bloc[index].classList.remove('changeColor');
            p[index].classList.remove('textColor');
        }else{
            bloc[index].classList.add('changeColor');
            p[index].classList.add('textColor');

        }
    }
} */
/*
 Issiaka TRAORE 
const btn =document.getElementById("button");
const selecZon =document.querySelectorAll(".bloc")
btn.addEventListener("click",changerDeCouleur);
function changerDeCouleur()
{
    for(var i=0; i<4; i++)
    {
        selecZon[i].classList.toggle("fond");
    }

} */


/*bougouma sy
function changerDeCouleur(){
    var blocA=document.getElementsByClassName("bloc");
    for(let i=0;i<4;i++){
        blocA[i].classList.toggle("nouveaucouleur");
    }
    
} */

/* 
Arrow function
const changerDeCouleur = ()=>{
    var blocA=document.getElementsByClassName("bloc");
    for(let i=0;i<4;i++){
        blocA[i].classList.toggle("nouveaucouleur");
    }
    
}

const mult = _=> alert('dhjf');
function mult(x,y){
    return x*y;
}
 */


const saisie = document.getElementsByClassName('form-control')
const submitBtn = document.getElementById('submit')
let donnee = {}
let infos = []
for(let i = 0; i<saisie.length;i++){
    saisie[i].addEventListener('keyup', ()=> {
        let value = saisie[i].value
        let id = saisie[i].id
        donnee[id] = value
    })
}


submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    for(let i = 0; i<saisie.length;i++){
        let affichErreur = document.getElementById(saisie[i].id+'-erreur');
        if (saisie[i].value === "") {
            affichErreur.innerHTML = "<p>Ce champ est requis</p>"
        } else {
            affichErreur.innerHTML = ""
        }
    }
})

infos.push(donnee)
console.table(infos) 

