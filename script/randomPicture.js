const gameCanvas = document.querySelector('#game');
const input = document.querySelector('#random');
const buttonR = document.querySelector('#buttonR');
let i = 0;

//Touché à une touche du clavier
input.addEventListener('keydown', game);
buttonR.addEventListener('click', pictureRandomButton)
text.addEventListener('keydown', pictureInput)

function game(e)
{
        key = e.key;
    if (key == 'p')
    {
         //Afficher l'image dans la page html
        gameCanvas.innerHTML = ``;
        let img = document.createElement('img');
        img.setAttribute('id', 'picture');
        gameCanvas.append(img);

        //Recuperer la taille du tableau
        let picturesLenght = pictures.length;
        //Affecter un nombre aléatoire
        let randomNumber = Math.random();

        //Prendre un nombre aléatoire dans la taile du tableau
        randomNumber = randomNumber*picturesLenght;
        randomNumber = Math.floor(randomNumber);
    
        //Affecter le nombre aléatoire au tableau pour resortir l'image correspondant
        let choosenPicture = pictures[randomNumber];
        //Changer l'image
        img.src = `pictures/random/${choosenPicture}`;


    }
}

function pictureRandomButton()
{

         //Afficher l'image dans la page html
        gameCanvas.innerHTML = ``;
        let img = document.createElement('img');
        img.setAttribute('id', 'picture');
        gameCanvas.append(img);

        //Recuperer la taille du tableau
        let picturesLenght = pictures.length;
        //Affecter un nombre aléatoire
        let randomNumber = Math.random();

        //Prendre un nombre aléatoire dans la taile du tableau
        randomNumber = randomNumber*picturesLenght;
        randomNumber = Math.floor(randomNumber);
    
        //Affecter le nombre aléatoire au tableau pour resortir l'image correspondant
        let choosenPicture = pictures[randomNumber];
        //Changer l'image
        img.src = `pictures/random/${choosenPicture}`;
        i++;
        if (i == 5)
        {
            img.src = `pictures/fond/EOISLSuWAAEBhml.jpg`;
        }
}