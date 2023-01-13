const presentation = document.querySelector(`#ratio`);
const competences = document.querySelector(`#comp`);
const amimir = document.querySelector(`#amimir`);


const result = document.querySelector('#result');



competences.addEventListener('click', addSpooder);
amimir.addEventListener('click', addAMimir);



function addSpooder()
{
    //Supprimer le text précédent
    result.innerText = ``

    //Texte
    let newList = document.createElement('p');
    newList.innerText = `Mery Jannnnnnneeeee !`;
    newList.setAttribute("id", "test")
    result.append(newList);

    //Image 
    let newImg = document.createElement('img');
    newImg.setAttribute("src", "pictures/maxresdefault.jpg");
    newImg.style.height = '400px';
    newImg.style.width = '800px'
    result.append(newImg);

    //boutton
    let newButton = document.createElement('button');
    newButton.innerText = `1280px`;
    result.append(newButton);

    newButton.addEventListener('click', function ()
    {
        newImg.style.height = '';
        newImg.style.width = ''
    })

}

function addAMimir()
{
    console.log('btn')
    let newMmimir = document.createElement('audio');
    let newA = document.createElement('a');
    newMmimir.setAttribute("src", "videoplayback.m4a");
    newMmimir.setAttribute("controls", "");
    newA.setAttribute("src", "videoplayback.m4a");
    newA.innerText = "download";
    result.append(newMmimir);
    newMmimir.append(newA);
 
}

