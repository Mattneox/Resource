function searchPicture()
{
    var a = document.getElementById("search").value;

    if (a == 'megumin' || a == 'Megumin')
    {
        gameCanvas.innerText = '';
        let meguminLength = megumin.length;
        for (i=0; i<meguminLength; i++)
        {
         
            let newImg = document.createElement('img'); 
            //Ajouter les liens pour les images
            newImg.setAttribute('src', `pictures/random/${megumin[`${i}`]}`);
            // Ajouter les images
            gameCanvas.append(newImg);
            document.getElementById("search").value = '';
        }
    }
    else if (a == 'raven' || a == 'Raven')
    {

        gameCanvas.innerText = '';
        let ravenLength = raven.length;
        for (i=0; i<ravenLength; i++)
        {
            let newImg = document.createElement('img'); 
            //Ajouter les liens pour les images
            newImg.setAttribute('src', `pictures/random/${raven[`${i}`]}`);
            // Ajouter les images
            gameCanvas.append(newImg);
            document.getElementById("search").value = '';
    }
    }
    else if (a == 'undertale' || a == 'Undertale')
    {
        

        gameCanvas.innerText = '';
        let undertaleLength = undertale.length;
        for (i=0; i<undertaleLength; i++)
        {
            
            let newImg = document.createElement('img'); 
            //Ajouter les liens pour les images
            newImg.setAttribute('src', `pictures/random/${undertale[`${i}`]}`);
        
            // Ajouter les images
            gameCanvas.append(newImg);
            document.getElementById("search").value = '';
    }
    }
    else if (a == 'the golden smurf' || a == 'The Golden Smurf')
    {
        

        gameCanvas.innerText = '';
        let theGoldenSmurfLength = theGoldenSmurf.length;
        for (i=0; i<theGoldenSmurfLength; i++)
        {
            
            let newImg = document.createElement('img'); 
            //Ajouter les liens pour les images
            newImg.setAttribute('src', `pictures/random/${theGoldenSmurf[`${i}`]}`);
        
            // Ajouter les images
            gameCanvas.append(newImg);
            document.getElementById("search").value = '';
    }
    }

}