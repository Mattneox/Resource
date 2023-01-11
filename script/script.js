const presentation = document.querySelector(`#pre`);
const competences = document.querySelector(`#comp`);
const amimir = document.querySelector(`#amimir`);
const ratio = document.querySelector(`#ratio`);



const result = document.querySelector('#result');


presentation.addEventListener('click', addPres);
competences.addEventListener('click', addSpooder);
amimir.addEventListener('click', addAMimir);


function addPres()
{
    for (i=0; i<3; i++)
    {
        console.log(`btn`)
        let newList = document.createElement('p');
        newList.innerText = `RATIO`;
        newList.setAttribute("id", `${i}`)
        
        result.append(newList);
        if (i<1)
        {
            //Jouer un audio en arrier plan 
            var audio = document.createElement('audio');
            audio.style.display = "none";
            audio.setAttribute("src", "ratio/ratio.m4a");
            audio.autoplay = true;
        }

        let img = document.createElement('img')
        img.setAttribute('src', 'ratio/Project 1.gif')
        result.append(img);
    }

     presentation.removeEventListener('click', addPres);
}

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

