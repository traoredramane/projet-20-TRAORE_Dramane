// var erreur;
// var danger = document.querySelector(".danger");
//     var firstname = document.getElementById("firstname");
//     var email = document.getElementById("email");
//     var age = document.getElementById("age");
//     var lastname = document.getElementById("lastname");
//     var number = document.getElementById("number");
//     var mal = document.getElementById("mal");
//     var femele = document.getElementById("femele");
    
   
    

const firstname1 =  /^[a-zA-Z]+[a-zA-Z-]*$/;
// const lastname1 =  /^[a-zA-Z]+[a-zA-Z-]*$/;
// const emailRegex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
//   const numberRegex = /^[0-9]*$/  
//   const ageRegex = /^[0-9]*$/ 

// document.getElementById("Inscription").addEventListener("click", function(e) {
    
//     e.preventDefault();
    
    
    
    
     
// //   if (!mal.value) {
// //     erreur = "veuillez renseigner un genre"
// //   }
    
// //   if (!femele.value) {
// //     erreur = "veuillez renseigner un genre"
// //   }
    
    
    
// //     if (!age.value) {
// //         erreur = "veuillez renseigner un age"
// //     }else if ( ageRegex.test(age.value) ==false) {
// //         erreur = "cette case doit contenir que des chiffres uniquement,"
// //         e.preventDefault()
// //     }
    
    
// //     if (!number.value) {
// //         erreur = "veuillez renseigner un number"
// //     }else if ( numberRegex.test(number.value) ==false) {
// //         erreur = "votre numero doit contenir que des chiffres uniquement,"
// //         e.preventDefault()
// //     }
    
    
// //     if (!email.value) {
// //         erreur = "veuillez renseigner votre email"
// //     }else if ( emailRegex.test(email.value) ==false) {
// //         erreur = "votre email doit contenir que des minuscule des Majuscule et des chiffres,"
// //         e.preventDefault()
// //     }
   
    
    
//     // if (!lastname.value) {
//     //     danger = "veuillez renseigner un lastname"
//     // }else if ( lastname1.test(lastname.value) ==false) {
//     //     danger = "votre nom ne doit contenir que des lettres uniquement"
//     //     e.preventDefault()
//     // }
    
 
 
//     if (firstname.value ==="") {
//         danger.innerHTML = " <span style='color: red'>veuillez renseigner un firstname</span>"
//     }else if ( firstname1.test(firstname.value) ==false) {
//         danger = "votre nom ne doit contenir que des lettres uniquement"
//         e.preventDefault()
//     }
    
    
    
//     // else if ( ) {
//     //     danger = "votre nom ne doit contenir que des lettres uniquement"
//     // }
    
    
   
//     // if (danger) {
//     //     e.preventDefault();
//     //     document.getElementById("danger").innerHTML = dander;
//     //     return false;
//     // }else { 
//     //     alert('Formulaire envoyé !');
//     // }
 
    
    
//     // if (erreur) {
//     //     e.preventDefault();
//     //     document.getElementById("erreur").innerHTML = erreur;
//     //     return false;
//     // }else { 
//     //     alert('Formulaire envoyé !');
//     // }
    
    
// });



let danger1

let Inscription = document.getElementById("Inscription");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let age = document.getElementById("age");
let number = document.getElementById("number");
let danger = document.querySelector(".danger");
let bt1 = document.querySelector(".bt1");
let erreur1 = document.querySelector(".erreur1")
let erreur2 = document.querySelector(".erreur2")
let erreur3 = document.querySelector(".erreur3")
let erreur4 = document.querySelector(".erreur4")




Inscription.addEventListener('click', function (e) {
    if(!firstname.value) {
        danger.innerHTML = "ce champ est obligatoire";
        danger.style.color = "red";
        firstname.style.background= "";
    } else{ firstname.style.background= "";
         danger.innerHTML="";}
         e.preventDefault()
        //   if ( firstname1.test(firstname.value) ==false) {
        //      danger = "votre nom ne doit contenir que des lettres uniquement"
        //      e.preventDefault()
        //     }
})
    
    
    
    
    
Inscription.addEventListener('click', function (e) {
    if(!lastname.value) {
        erreur1.innerHTML = "ce champ est obligatoire";
        erreur1.style.color = "red";
        lastname.style.background= "";
    }else{ lastname.style.background= "";
         erreur1.innerHTML="";}
         e.preventDefault()

})


Inscription.addEventListener('click', function (e) {
    if(!lastname.value) {
        erreur1.innerHTML = "ce champ est obligatoire";
        erreur1.style.color = "red";
        lastname.style.background= "";
    }else{ lastname.style.background= "";
         erreur1.innerHTML="";}
         e.preventDefault()

})


Inscription.addEventListener('click', function (e) {
    if(!email.value) {
        erreur2.innerHTML = "ce champ est obligatoire";
        erreur2.style.color = "red";
        email.style.background= "";
    }else{ email.style.background= "";
         erreur2.innerHTML="";}
         e.preventDefault()

})



Inscription.addEventListener('click', function (e) {
    if(!number.value) {
        erreur3.innerHTML = "ce champ est obligatoire";
        erreur3.style.color = "red";
        number.style.background= "";
    } else{ number.style.background= "";
         erreur3.innerHTML="";}
         e.preventDefault()

})


Inscription.addEventListener('click', function (e) {
    if(!age.value) {
        erreur4.innerHTML = "ce champ est obligatoire";
        erreur4.style.color = "red";
        age.style.background= "";
    }else{ age.style.background= "";
         erreur4.innerHTML="";}
         e.preventDefault()

if (firstname.value!=""&& lastname.value!=""&& email.value!=""&& number.value!=""&& age.value!="") {
    alert ("formulaire envoyé !")
    e.preventDefault ()
}
})



