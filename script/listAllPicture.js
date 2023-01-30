const button = document.querySelector('#image')
button.addEventListener('click', allPictures);
let picturesLenght = pictures.length;

function allPictures()
{
        gameCanvas.innerText = '';
        for (i=0; i<picturesLenght; i++)
        {
            let newButton = document.createElement('button');
            let newImg = document.createElement('img'); 
        
            newButton.setAttribute('id', `${i}`);

            //Ajouter les liens pour les images
            newImg.setAttribute('src', `pictures/random/${pictures[`${i}`]}`);
            newImg.style.width = '100%';
            newImg.style.height = '100%';
            newButton.style.width = '30%'
        
            // Ajouter les images
            // newA.append(newButton);
            newButton.append(newImg);
            gameCanvas.append(newButton);
    }
    
}