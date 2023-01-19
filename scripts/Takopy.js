const takopy = document.querySelector('#takopy');
var i = 0;

takopy.addEventListener('click', choseChapterTakopy);

function choseChapterTakopy()
{
    i = 0; 
    result.innerHTML = ``;
    for (i; i<16; i++)
    {
        let button = document.createElement('button');
        button.setAttribute('id', `${takopyChapter[`${i}`]}`)
        button.setAttribute('class', 'item2');
        button.innerText = `${takopyChapter[`${i}`]}`
        result.append(button) 
    }

    let chapter_1 = document.querySelector(`#Chapitre-1`);
    let chapter_2 = document.querySelector(`#Chapitre-2`);
    let chapter_3 = document.querySelector(`#Chapitre-3`);
    let chapter_4 = document.querySelector(`#Chapitre-4`);
    let chapter_5 = document.querySelector(`#Chapitre-5`);
    let chapter_6 = document.querySelector(`#Chapitre-6`);
    let chapter_7 = document.querySelector(`#Chapitre-7`);
    let chapter_8 = document.querySelector(`#Chapitre-8`);
    let chapter_9 = document.querySelector(`#Chapitre-9`);
    let chapter_10 = document.querySelector(`#Chapitre-10`);
    let chapter_11 = document.querySelector(`#Chapitre-11`);
    let chapter_12 = document.querySelector(`#Chapitre-12`);
    let chapter_13 = document.querySelector(`#Chapitre-13`);
    let chapter_14 = document.querySelector(`#Chapitre-14`);
    let chapter_15 = document.querySelector(`#Chapitre-15`);
    let chapter_16 = document.querySelector(`#Chapitre-16`);

    chapter_10.addEventListener('click', takopiChapter1);
    chapter_1.addEventListener('click', takopiChapter1);
}

 