function takopiChapter1()
{
    let takopyButtonSuivant = document.createElement('button');
    let takopyButtonPrecedent = document.createElement('button');
    let takopyImg = document.createElement('img')
    result.innerHTML = '';
    i = i - i;
    takopyImg.setAttribute('id', `${i}`)
    takopyImg.setAttribute('src', `assets/Takopy/Chapitre-1/${takopyPages[`${i}`]}`);
    takopyImg.setAttribute('class', 'item')
    takopyButtonSuivant.innerText = 'Suivant';
    takopyButtonPrecedent.innerText = 'Pécedent';
    result.append(takopyImg, takopyButtonSuivant);
    
    //Changer d'image
    takopyButtonSuivant.addEventListener('click', 
        function()
        {
            i = i + 1
            takopyImg.setAttribute('src', `assets/Takopy/Chapitre-1/${takopyPages[`${i}`]}`);
            result.append(takopyButtonPrecedent, takopyImg, takopyButtonSuivant)
            if (i == 46-1)
            {takopyButtonSuivant.addEventListener('click', choseChapterTakopy);}
        })

           //Changer d'image
    takopyButtonPrecedent.addEventListener('click', 
    function()
    {
        i = i - 1
        takopyImg.setAttribute('src', `assets/Takopy/Chapitre-1/${takopyPages[`${i}`]}`);
        result.append(takopyButtonPrecedent, takopyImg, takopyButtonSuivant);
        if (i == 0)
        {takopyButtonPrecedent.addEventListener('click', choseChapterTakopy);}
    })

}