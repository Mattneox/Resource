const loader = document.querySelector('.loader');
const tbl = [ 'C', 'H', 'A', 'R', 'G', 'E', 'M', 'E', 'N', 'T']

//  ------------Chargement------------------ //
// for (i=0; i<tbl.length; i++)
// {
//    let span = document.createElement('span');
//    span.setAttribute('class', 'lettre');
//    span.innerText = `${tbl[`${i}`]}`;
//    loader.append(span);
// }

// --------------Points----------------- //
for (i=1; i<=3; i++)
{
    let dot = document.createElement('div');
    dot.setAttribute('class', `dot d${i}`);
    loader.append(dot);
}


// Function pour faire une disparition fondu
function hidden()
{ document.querySelector('.loader').classList.add('disappear'); }

// Function qui supprime la class loader et les enfants
function disappear()
{
    document.querySelector('.loader').classList.remove('loader');
    loader.innerHTML = "";
}

// Quand touts les fichier de la page sont chargé
window.addEventListener('load', () => 
{
    setTimeout(hidden, 1500);
    setTimeout(disappear, 2000);

})