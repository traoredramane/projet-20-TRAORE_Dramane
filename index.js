document.getElementById("inscription").addEventListener("submit", function(e) {
    e.preventDefault();
    var erreur;
    var firstname = document.getElementById("firstname");
    var email = document.getElementById("email");
    var age = document.getElementById("age");
    var lastname = document.getElementById("lastname");
    var number = document.getElementById("number");
    var mal = document.getElementById("mal");
    var femele = document.getElementById("femele");
    
   
    

const firstname1 =  /^[a-zA-Z]+[a-zA-Z-]*$/;
const lastname1 =  /^[a-zA-Z]+[a-zA-Z-]*$/;
const emailRegex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  const numberRegex = /^[0-9]*$/  
  const ageRegex = /^[0-9]*$/ 
    
    
    
     
  if (!mal.value) {
    erreur = "veuillez renseigner un genre"
  }
    
  if (!femele.value) {
    erreur = "veuillez renseigner un genre"
  }
    
    
    
    if (!age.value) {
        erreur = "veuillez renseigner un age"
    }else if ( ageRegex.test(age.value) ==false) {
        erreur = "cette case doit contenir que des chiffres uniquement,"
        e.preventDefault()
    }
    
    
    if (!number.value) {
        erreur = "veuillez renseigner un number"
    }else if ( numberRegex.test(number.value) ==false) {
        erreur = "votre numero doit contenir que des chiffres uniquement,"
        e.preventDefault()
    }
    
    
    if (!email.value) {
        erreur = "veuillez renseigner votre email"
    }else if ( emailRegex.test(email.value) ==false) {
        erreur = "votre email doit contenir que des minuscule des Majuscule et des chiffres,"
        e.preventDefault()
    }
   
    
    
    if (!lastname.value) {
        erreur = "veuillez renseigner un lastname"
    }else if ( lastname1.test(lastname.value) ==false) {
        erreur = "votre nom ne doit contenir que des lettres uniquement"
        e.preventDefault()
    }
    
 
 
    if (!firstname.value) {
        erreur = "veuillez renseigner un firstname"
    }else if ( firstname1.test(firstname.value) ==false) {
        erreur = "votre nom ne doit contenir que des lettres uniquement"
        e.preventDefault()
    }
    
    
    
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    }else { 
        alert('Formulaire envoyé !');
    }
    

});