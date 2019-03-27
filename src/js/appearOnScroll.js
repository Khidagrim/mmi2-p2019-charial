const toAppear = document.getElementsByClassName("beforeOnScroll");


window.addEventListener("scroll",e=(e)=>{
    let windowPos = window.scrollY;

    for(let i = 0, n=toAppear.length;i<n;i++)
    {
        if(windowPos >= toAppear[i].getBoundingClientRect().top +800)
        {
            toAppear[0].classList.add("afterOnScroll");
            toAppear[0].classList.remove("beforeOnScroll");
        }
    }

});

