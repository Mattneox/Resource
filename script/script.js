const test = document.querySelector('#name_anime');
const img = document.querySelector('#picture_anime');
const result = document.querySelector('#anime');
// const next = document.querySelector('#next');

var bt;

let pictureAnime = 
['MV5BMDhjMzVlOWUtOWM4ZC00YTAyLTljYjQtNTI5ZDE4OGMyNzQzXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg', 
'Super_Cub-anime-visual.jpg' , 'ah_my_goddess_131663.jpg', 'senryuu_shoujo_8327.jpg', 
'love-chunibyo-and-other-delusions.jpg', '88ac70158181a3f9000ed5a16330c809.jpg', '', '', '', '', '', '', ''
];

let nameAnime = 
[
    'The Great Jahy Will Not Be Defeated!', 'Super Cub', 'Ah! My Goddess', 'Senryu Shoujo',
    'Chunibyo', 'Netoge No Yome', 'The Mysterious Girlfriend', 'Himouto! Umaru-chan',
    'Poco\'s Udon World', 'Girl Last Tour', 'Musaigen no Phantom World', 'Maji de Watashi',
    'Heion Sedai no Idaten-tachi',

];

document.addEventListener('keydown', changePicture);

function changePicture(e)
{
    bt = e.key;
    if (bt == 's')
    {
        let picturesLenght = nameAnime.length;
    
        let randomNumber = Math.random();

        randomNumber = randomNumber*picturesLenght;
        randomNumber = Math.floor(randomNumber);
        
        let chosenPicture = pictureAnime[randomNumber];
        test.innerText = nameAnime[randomNumber];
        img.src = `pictures/${chosenPicture}`;
    }
    
}
