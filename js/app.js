
// function toggleMenu(){
//     menuLinks.classList.toggle("menu_opened");
// }

// openMenuBtn.addEventListener("click",toggleMenu);
// closeMenuBtn.addEventListener("click",toggleMenu);



const menuLinks = document.querySelectorAll(' .menu a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id=entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.menu a[href="#${id}"]`)
        if (entry.isIntersecting){
            menuLink.classList.add("selected");
        }else{
            menuLink.classList.remove("selected");
        }
    })
})
menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", function(){
        menuLinks.classList.remove("menu_opened");
    });
    const hash= menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if(target){
        observer.observe(target);
    }
})
