/*=============== SHOW MENU ===============*/
 const navMenue = document.getElementById('nav-menu')
       navClose = document.getElementById('nav-close')
       navtoggle = document.getElementById('nav-toggle')

    if(navtoggle){
        navtoggle.addEventListener('click' ,()=>{
            navMenue.classList.add('show-menu')
            console.log(navMenue);
            
        })

    }
    if(navClose){
        navClose.addEventListener('click', ()=>{
            navMenue.classList.remove('show-menu')
            console.log(navClose);
            
        })
    }
 
    const nvalink =  document.querySelectorAll('.nav__link')
    const linkAction = () =>{
        const navMenue = document.getElementById('nav-menu')
        navMenue.classList.remove('show-menu')
    }
    nvalink.forEach(n => n.addEventListener('click' , linkAction))
 /*=============== REMOVE MENU MOBILE ===============*/
 
 
 /*=============== ADD SHADOW HEADER ===============*/
 const shadowHeader  = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
 }
 window.addEventListener('scroll', shadowHeader)
 /*=============== SWIPER POPULAR ===============*/
 const swiperPopular = new Swiper('.popular__swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 32,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints:{
        1150:{
            spaceBetween: 88,
        }
    }
    });
 
 /*=============== SHOW SCROLL UP ===============*/ 
 const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
 }
 window.addEventListener('scroll',scrollUp)
 /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
 const section =  document.querySelectorAll('section[id]')
 
 const scrollActive = ()=>{
    const scrollDown = window.scrollY

    section.forEach(current =>{
        const sectionbHeights = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
              
              if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionbHeights){
                sectionClass.classList.add('active-link')
              }else{
                sectionClass.classList.remove('active-link')
              }
    } )
 }
 window.addEventListener('scroll',scrollActive)
 /*=============== SCROLL REVEAL ANIMATION ===============*/

 const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
    // reset: true, // Animation repeat,

 })
 sr.reveal(`.popular__swiper, .footer__container, .footer__copy`)
 sr.reveal(`.home__shape`, {origin: 'bottom'})
 sr.reveal(`.home__coffee`, {delay: 1000, distance: '200px', duration: 1500})
 sr.reveal(`.home__splash`, {delay: 1600, scale: 0 , duration: 1500})
 sr.reveal(`.home__bean-1, .home__bean-2`, {delay: 2200, scale: 0 , duration: 1500, rotate:{z:180}})
 sr.reveal(`.home__ice-1, .home__ice-2`, {delay: 2600, scale: 0 , duration: 1500, rotate:{z:180}})
 sr.reveal(`.home__leaf`, {delay: 2000, scale: 0 , duration: 1500, rotate:{z:90}})
 sr.reveal(`.home__title`, {delay: 3500})
 sr.reveal(`.home__sticker, .home__data`, {delay: 4000})
 sr.reveal(`.about__data`, {origin: 'left'})
 sr.reveal(`.about__images`, {origin: 'right'})
 sr.reveal(`.about__coffee`, {delay: 1000})
 sr.reveal(`.about__leaf-1, .home__leaf-2`, {delay: 1400, rotate:{z:90}})
 sr.reveal(`.products__card, .contact__info`, {interval:100})
 sr.reveal(`.contact__shape`, {delay: 600,scale:0})
 sr.reveal(`.contact__delivery`, {delay: 1200})