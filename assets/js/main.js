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