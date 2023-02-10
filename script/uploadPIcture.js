

function afficherPicture()
{
    let file = document.querySelector('input').files; 
    let name = document.querySelector('legend');
    let resultat = document.querySelector('#resultat');
    console.log(file)

    if (file.length > 0)
    {   
        let fileReader = new FileReader()
        fileReader.onload = function (event)
        {       
            resultat.setAttribute('src', event.target.result)
        }
        fileReader.readAsDataURL(file[0]);
    }
}