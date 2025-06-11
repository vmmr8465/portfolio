const hamburger = document.querySelector(".hamburger")
    const memu_bar=document.querySelector(".navbar-memu .memu-bar")
    hamburger .addEventListener("click",()=>{
        memu_bar.classList.toggle("show")
    });