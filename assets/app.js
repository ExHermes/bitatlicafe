const products=[
{cat:'Tatlılar',name:'Çikolatalı Waffle',description:'Çikolata ve meyvelerle tatlı bir mola.',img:'photo-1562376552-0d160a2f238d',tag:'Tatlı keyfi'},
{cat:'Pizzalar',name:'Karışık Pizza',description:'Bol malzemeli, sıcacık pizza lezzeti.',img:'photo-1513104890138-7c749659a591',tag:'Pizza zamanı'},
{cat:'Burgerler',name:'Burger Keyfi',description:'Her ısırıkta iştah açan bir lezzet.',img:'photo-1568901346375-23c9450c58cd',tag:'Doyurucu'},
{cat:'Tatlılar',name:'Cheesecake',description:'Kahve molalarının tatlı eşlikçisi.',img:'photo-1533134242443-d4fd215305ad',tag:'Tatlı keyfi'},
{cat:'İçecekler',name:'Kahve Molası',description:'Günün her saatine yakışan bir fincan.',img:'photo-1461023058943-07fcbe16d735',tag:'Kahve keyfi'},
{cat:'Tatlılar',name:'Çikolatalı Pasta',description:'Çikolata sevenlerin mutluluk sebebi.',img:'photo-1578985545062-69928b1d9587',tag:'Favorilerden'}];
const grid=document.querySelector('#menuGrid');let activeFilter='Tümü';
function renderMenu(){const visible=products.filter(p=>activeFilter==='Tümü'||p.cat===activeFilter);grid.innerHTML=visible.map(p=>`<article class="menu-card"><div class="menu-image photo" style="--bg:url('https://images.unsplash.com/${p.img}?w=750&q=85')"><span class="menu-chip">${p.tag}</span></div><div class="menu-card-body"><h3>${p.name}</h3><p>${p.description}</p><div class="menu-card-bottom"><span>${p.cat}</span><span>↗</span></div></div></article>`).join('')}
function setFilter(f){activeFilter=f;document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b.dataset.filter===f));renderMenu()}
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>setFilter(b.dataset.filter)));
document.querySelectorAll('[data-go]').forEach(a=>a.addEventListener('click',()=>setFilter(a.dataset.go)));
const toggle=document.querySelector('#menuToggle'),nav=document.querySelector('#siteNav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('show');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('show');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));document.querySelector('#year').textContent=new Date().getFullYear();renderMenu();
