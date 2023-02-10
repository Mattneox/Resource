const result = document.querySelector("#result")

let listSound = 
[
    'jean_bengigi.mp3', 'Trop_d\'information.mp3', 'BOBLEGOB_michel-dumas_lardons.mp3',
]
let nameButton =
[
    "Ton avenir", "Information", "Tuto cuisine"
]

var i = 0;
for (i; i<listSound.length; i++)
{
    let buttonSound = document.createElement('button');
    buttonSound.addEventListener('click', () =>
    {
        var audio = document.createElement('audio');
        audio.style.display = "none";
        audio.setAttribute("src", `pictures/sound/${listSound[2]}`);
        audio.autoplay = true;
    });
    buttonSound.innerText = `${nameButton[`${i}`]}`;
    result.append(buttonSound)

}
