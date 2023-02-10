const emoteResult = document.querySelector('#emoteResult');
const selectResult = document.querySelector("#select")
let emotePicture = 
[
    '','duck.webp', '4x (1).webp', 'elban.webp', 'Who-asked.webp',
    'note.webp', 'mute.webp', 'coding-time.webp', 'potaMoney.webp'
]

let select = document.createElement('select');
let img = document.createElement('img');
for (i=0; i<emotePicture.length; i++)
{
    let option = document.createElement('option');
    option.setAttribute('value', `${emotePicture[`${i}`]}.png`);
    option.innerText = `${emotePicture[`${i}`]}`;
    select.append(option);
}

select.addEventListener('change', function () 
{
    img.setAttribute('src', `pictures/emote/${emotePicture[this.selectedIndex]}`);
    img.setAttribute('style', 'position: absolute; top: 5px; right: 50%;')
})

selectResult.append(select)
emoteResult.append(img);
