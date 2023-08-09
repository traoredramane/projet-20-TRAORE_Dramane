document.getElementById("inscription").addEventListener("submit", function(e) {
    e.preventDefault();
    var erreur;
    var pseudo = document.getElementById("pseudo");
    var email = document.getElementById("email");
    var age = document.getElementById("age");
    var pseudo2 = document.getElementById("pseudo2");
    var number = document.getElementById("number");
   

    
    if (!age.value) {
        erreur = "veuillez renseigner un age"
    }
    
    
    if (!number.value) {
        erreur = "veuillez renseigner un number"
    }
    
    
    if (!email.value) {
        erreur = "veuillez renseigner un email"
    }
    
    if (!pseudo2.value) {
        erreur = "veuillez renseigner un last-name"
    }
    
    if (!pseudo.value) {
        erreur = "veuillez renseigner un first-name"
    }
    
    
    
    
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    }else {
        alert('Formulaire envoyé !');
    }
    
   
});