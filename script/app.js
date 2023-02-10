
let docTitle = document.title;
window.addEventListener("blur", notHere)
window.addEventListener("focus", here)

function notHere()
{
    document.title = "Come back 😥";
}
function here()
{
    document.title = docTitle;
}
   