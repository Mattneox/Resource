const lien = document.querySelector(`#image`);
const video = document.querySelector(`#video`);


lien.addEventListener('click', addLien);
video.addEventListener('click', addVideo);

function addLien()
{
    console.log('btn')
    let newA = document.createElement('button');
    let newImg = document.createElement('img'); 
    newA.setAttribute('id', '1');
    newImg.setAttribute('src', 'pictures/FMnkMwPXsAojqWo.jfif');
    newImg.style.height = '600px';
    newImg.style.width = '400px';
    newA.append(newImg);
    result.append(newA);


    newA.addEventListener('click', newPicture);
    function newPicture()
	{
       newImg.setAttribute('src','pictures/92ccbd2593396711e06448c515368f50.jpg');
	   newA.setAttribute('id', '2');
	   newA.append(newImg);
	   newA.addEventListener('click', newPicture2);	
       function newPicture2()
	    {
            newImg.setAttribute('src','pictures/a2f1d8c07fa5fe55065b19a247d50fd4.jpg');
	        newA.setAttribute('id', '3');
            newImg.style.width = '500px';
	        newA.append(newImg);

	        newA.addEventListener('click', newPicture3);
            function newPicture3()
	        {
              if (newA.getAttribute('id') == '3')
              {
                newA.setAttribute('id', '1');
                newImg.setAttribute('src', 'pictures/FMnkMwPXsAojqWo.jfif');
                newImg.style.height = '600px';
                newImg.style.width = '400px';
                newA.append(newImg);
                newA.addEventListener('click', newPicture);
              }
	            	
            }	
        }
    }

}

function addVideo()
{
    console.log('btn');
    let newV = document.createElement('video');
    newV.setAttribute("controls", "");
    newV.setAttribute("src", "Screen_Recording_20230101_210731_Twitch.mp4");
    newV.style.height = "600px"
    newV.innerText = 'rrrr';
    result.append(newV);
}