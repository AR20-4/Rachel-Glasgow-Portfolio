/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== CURSOR ANIMATION =====*/
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
cursor.style.left = e.pageX + 'px';
cursor.style.top = e.pageY + 'px';
})

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME  */
sr.reveal('.home__title', {origin:'left'}) 
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'left', delay: 200})
sr.reveal('.home__intro_box', {origin:'bottom', delay: 200})
sr.reveal('.console-underscore', {origin:'left', delay: 1000})
sr.reveal('.work-heading', {origin:'left'})
sr.reveal('.home-button', {origin:'left', delay: 200})
sr.reveal('.home__social-links', {origin:'left', delay: 200})
sr.reveal('.home__social-follow', {origin:'top', delay: 600})


/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})


/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__card_a', {origin:'left'})
sr.reveal('.portfolio__card_b', {origin:'right'})
sr.reveal('.port-skills__name', {distance: '20px', delay: 50, interval: 100})


/*SCROLL CONTACT )*/
sr.reveal('.contact__img', {origin:'left', delay: 400})
sr.reveal('.contact__subtitle', {origin:'left'})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})

/*===== CIRCLE TEXT ANIMATION =====*/

const str = "Looking For A Digital Wizard? -- ";
const letter = document.getElementById("letter");
window.onload = () => {
  for (let i = 0; i < str.length; i++) {
    let spin = document.createElement("spin");
    spin.innerHTML = str[i];
    letter.appendChild(spin);
    spin.style.transform = `rotate(${i * 11}deg)`;
  }
};


/*===== TYPE TEXT ANIMATION =====*/

consoleText(['Looking for a digital transformation?', 'I would love to build a website for you.', 'Lets work together!'], 'text',[ '#f5de8c','#FAFAFF','#FAFAFF']);

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
  }, 150)
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



