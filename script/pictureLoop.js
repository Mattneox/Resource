const pictures = document.querySelector(`#image`);
const img = 
[
    '92ccbd2593396711e06448c515368f50.jpg', 
    'FZH3pv4aUAAbC5g.jpg', 
    'EqPllh-U8AEDB_y.jfif',
    'a2f1d8c07fa5fe55065b19a247d50fd4.jpg',
    'EM0RJClWkAAKfqZ.jpg',
    'FMnkMwPXsAojqWo.jfif',
    '72cd76f99ad121f0604de7cd0d86dc8f.jpg',
    
    
];

pictures.addEventListener('click', addPictures);
function addPictures()
{
    
    for (i=0; i<10; i++)
    {
        console.log('btn')
        let newButton = document.createElement('button');
        let newImg = document.createElement('img'); 
        let newA = document.createElement('a'); 
        newButton.setAttribute('id', `${i}`);
        newImg.setAttribute('src', `pictures/${img[`${i}`]}`);
        newA.setAttribute('href', `pictures/${img[`${i}`]}`)
        newImg.style.width = '100%';
        newButton.style.width = '32%'
        newButton.append(newA);
        newA.append(newImg)
        result.append(newButton);
    }

    pictures.removeEventListener('click', addPictures);
}

