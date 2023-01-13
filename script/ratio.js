const ratio = document.querySelector(`#ratio`);

ratio.addEventListener('click', addRatio);
function addRatio()
{
    for (i=0; i<3; i++)
    {
        if (i<1)
        {
            //Jouer un audio en arrier plan 
            var audio = document.createElement('audio');
            audio.style.display = "none";
            audio.setAttribute("src", "ratio/ratio.m4a");
            audio.autoplay = true;
        }

        if (i == 1)
        {
            let img = document.createElement('img')
            img.setAttribute('src', 'ratio/ratio_piece.gif')
            result.append(img);
        }else
        {
            let img = document.createElement('img')
            img.setAttribute('src', 'ratio/ratio_domingo.gif')
            result.append(img);
        }
        
    }

    for (i=0; i<3; i++)
    {
         let newList = document.createElement('p');
        newList.innerText = `RATIO`;
        newList.setAttribute("id", `${i}`)
        
        result.append(newList);
    }

     presentation.removeEventListener('click', addRatio);  
     
}