```javascript
/* ==========================================
   Franklin Enuma Portfolio
========================================== */

// Smooth navigation highlighting

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});


// Fade-in animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll("section,.card,.job").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});


// Back to top button

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-button";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

topBtn.classList.add("visible");

}else{

topBtn.classList.remove("visible");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
```
