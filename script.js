const toggle =document.getElementById('menutoggle');
const navlinks=document.getElementById('nav-links');
toggle.addEventListener('click',()=>{
    navlinks.classList.toggle('active');
});