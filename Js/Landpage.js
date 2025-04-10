const wrapper = 
document.querySelector('.wrapper');

const loginlink = 
document.querySelector('.login-link');

const registerlink = 
document.querySelector('.register-link');

const btnpopup = 
document.querySelector('.btnlogin-popup');

const iconClose = 
document.querySelector('.icon-close');

const loginButton =
 document.getElementById("aaa");

 const homeSection = document.querySelector(".container");


registerlink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});

loginButton.addEventListener("click", function() {
    const offsetTop = homeSection.offsetTop;
    homeSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      top: offsetTop,
    });
  });