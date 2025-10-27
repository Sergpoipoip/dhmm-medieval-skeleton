function toggleNav(){
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('show');
}
document.addEventListener('click', (e) => {
  if(e.target.matches('a[href^="#"]')){
    const id = e.target.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
});