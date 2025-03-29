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
 
 
 /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
 
 
 /*=============== SCROLL REVEAL ANIMATION ===============*/