var color=["green","red","blue","yellow","pink"];
var textcolor=["orange","yellow","green","black"];
const button = document.getElementById("button");
var i=0;
var j=0;
button.addEventListener ("click",changecolor());
function changecolor(){
  

  i=0<color.length? ++i:0;
  j=3<textcolor.length? ++j:0;

  document.getElementById("bloc1").style.backgroundColor= color[i]
  document.getElementById("bloc2").style.backgroundColor= color[i]
  document.getElementById("bloc3").style.backgroundColor= color[i]
  document.getElementById("bloc4").style.backgroundColor= color[i]
  document.getElementById("p1").style.color=textcolor[j]
  document.getElementById("p2").style.color=textcolor[j]
  document.getElementById("p3").style.color=textcolor[j]
  document.getElementById("p4").style.color=textcolor[j]

}
 /*function recuperation()
{
  var prénom = document.getElementById("class1").value;
  var nom = document.getElementById("class2").value;
  var Email = document.getElementById("class3").value;
  var adresse = document.getElementById("class4").value;
  var telephone = document.getElementById("class5").value;



  alert("prénom est :" + prénom +
  "\n nom est :" + nom +
  "\n Email est :" + Email+
  "\n adresse est :" + adresse +
  "\n telephone est :" + telephone + )*/


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
        }
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
if (saisie[i].id === "email" && !regexEmail.test(saisie[i].value)) {
  affichErreur.innerHTML = "<p>Veuillez saisir un email correct</p>"
}
        if ((saisie[i].id === "email" && regexEmail.test(saisie[i].value)) && saisie[i].value !== ""){
          const result = document.getElementById("result");
          result.innerHTML = 
     `    <p>Prenom: ${donnee.prenom}</p>
         <p>Nom: ${donnee.nom}</p>
         <p>Email: ${donnee.email}</p>
         <p>Message: ${donnee.message}</p>
         ;`
        }
    }
  
    
})

infos.push(donnee)
console.table(infos) 



