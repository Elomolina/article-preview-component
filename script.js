let buttonShare = document.getElementById("buttonShare");
let shareLogos = document.getElementById("shareLogos");
buttonShare.addEventListener("click", share); 


document.addEventListener("click", disappear)

function share()
{
     shareLogos.classList.toggle("appear");
}

function disappear(e)
{
    if(e.target !== buttonShare)
    {
        if(shareLogos.classList.contains("appear"))
        {
            shareLogos.classList.remove("appear");
        }
    }
}