const changeColor = (e) =>
{
    console.log(e.target);
    e.target.classList.add("platformsList__Item--clicked");
}

let imgs = document.getElementsByClassName("platformsList__Item");

for(let i = 0, n = imgs.length; i<n;i++)
{
    imgs[i].addEventListener("click",e = (e)=>{
        changeColor(e);
    })
}

