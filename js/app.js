
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


// function([string1, string2],target id,[color1,color2])    
consoleText(['Hola,', 'Buen día,'], 'text',['tomato','rebeccapurple','lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
