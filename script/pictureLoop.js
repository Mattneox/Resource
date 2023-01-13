const pictures = document.querySelector(`#image`);
var i = 0;
var d = 10;

let viewImg = document.createElement('img');


const img = 
[
    '92ccbd2593396711e06448c515368f50.jpg', 
    'FZH3pv4aUAAbC5g.jpg', 
    'EqPllh-U8AEDB_y.jfif',
    'a2f1d8c07fa5fe55065b19a247d50fd4.jpg',
    'EM0RJClWkAAKfqZ.jpg',
    'FMnkMwPXsAojqWo.jfif',
    '72cd76f99ad121f0604de7cd0d86dc8f.jpg', 
    '85738723_p0_master1200.jpg',
    'sample-053fc1b64590b29e3d03b175d7c14cc0.jpg',
    '97287682_p0.jpg',
    '',
];


pictures.addEventListener('click', chosePicture);

function chosePicture()
{
    let buttPicture = document.createElement('button');
    let buttAllPicture = document.createElement('button');
  
    buttPicture.innerText = 'Voir une image';
    result.append(buttPicture);
    buttPicture.addEventListener('click', viewPicture);

    
    buttAllPicture.innerText = 'Voir tout les images';
    result.append(buttAllPicture);
    buttAllPicture.addEventListener('click', allPictures);

    pictures.removeEventListener('click', chosePicture);
}



function allPictures()
{
    result.innerText = '';
    for (i; i<d; i++)
    {

        let newButton = document.createElement('button');
        let newImg = document.createElement('img'); 
        let newA = document.createElement('a'); 
        
        newButton.setAttribute('id', `${i}`);
        newA.setAttribute('id', `${i}`);

        //Ajouter les liens pour les images
        newImg.setAttribute('src', `pictures/${img[`${i}`]}`);
        newA.setAttribute('href', `pictures/${img[`${i}`]}`)
        newImg.style.width = '100%';
        newButton.style.width = '32%'
        
        
        // Ajouter les images
        // newA.append(newButton);
        newButton.append(newImg);
        result.append(newButton);
    }
}


function viewPicture()
{
    let button = document.createElement('button');
    result.innerHTML = '';
    i = i - i;
    viewImg.setAttribute('id', `${i}`)
    viewImg.setAttribute('src', `pictures/${img[`${i}`]}`);
    button.style.width = '50%'
    viewImg.style.width = '100%';
    button.append(viewImg);
    result.append(button);
    button.addEventListener('click', 
        function()
        {
            i = i + 1
            viewImg.setAttribute('src', `pictures/${img[`${i}`]}`);
            button.append(viewImg);
            if (i == d-1)
            {
                i = -1;
            }
        })
}
