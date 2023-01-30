
// Connexion pour acceder à la page home.html
function Login(){

    //Recuperation de la valeurs de l'imput id
    var username= document.login.id.value;
    //Recuperation de la valeur de l'imput mdp
    var password= document.login.mdp.value;
    
    //Verification du pseudo et du mot de passe
    if (username=="mattneox" && password=="matt") {
        //Si les deux sont bon redirection vers home.html
        window.location="home.html";
    }
}


// Recherer par une valeur envoyer dans la barre de recherche 
function ouvrirIndex()
{
    //Recuperation de la valeur contenue dans search
    var a = document.getElementById("search").value;
    if (a == 'picture')
    {
        window.location  = "picture.html";
    }
}