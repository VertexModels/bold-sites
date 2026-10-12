// Mobile menu toggle + footer year. Nothing else.
const t=document.querySelector('.nav__toggle'),m=document.getElementById('menu');
t.addEventListener('click',()=>{const o=t.getAttribute('aria-expanded')==='true';t.setAttribute('aria-expanded',String(!o));m.classList.toggle('open',!o)});
m.addEventListener('click',e=>{if(e.target.tagName==='A'){m.classList.remove('open');t.setAttribute('aria-expanded','false')}});
document.querySelectorAll('a[aria-disabled="true"]').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
document.getElementById('y').textContent=new Date().getFullYear();
