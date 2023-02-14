// Navigation Start
const li = document.querySelectorAll(".navLink");
const section = document.querySelectorAll("section");

function activeNav(){
    let len = section.length;
    while(--len && window.scrollY + 100 < section[len].offsetTop){}
    li.forEach(l => l.classList.remove("active"));
    li[len].classList.add("active");
}
activeNav();
window.addEventListener("scroll", activeNav);
// Navigation End

// Statistics start
let statistics = document.querySelectorAll('.statistics');
let steps = 100;
statistics.forEach(statistic =>{
  let target = +statistic.getAttribute('data-target');
  console.log(target);
  let update_statistic = () => {
    let no = +statistic.innerHTML + Math.ceil(target/steps);
    console.log(no);
    if(no < target){
      statistic.innerHTML = no;
      setTimeout(update_statistic, 50);
    }
    else{
      statistic.innerHTML = target;
    }
  }
  update_statistic()
});
// Statistics end


// Scroll button start
const toTop = document.querySelector(".to_top");
function up(){
    if(window.pageYOffset > 100){
        toTop.classList.add("active2");
    }
    else {
        toTop.classList.remove("active2");
    }
}
up();
window.addEventListener("scroll" , up);
// Scroll button end


// Accordion start
const btn_base = document.querySelector('#click_base');
const div = document.querySelector('#basics');
const div2 = document.querySelector('#spreads');
const btn_spread = document.querySelector('#click_spread');
const div3 = document.querySelector('#protects')
const btn_protect = document.querySelector('#click_protect');
const div4 = document.querySelector('#testing')
const btn_test = document.querySelector('#click_test');
const div5 = document.querySelector('#outbreak')
const btn_outbreak = document.querySelector('#click_outbreak');
const div6 = document.querySelector('#myth')
const btn_myth = document.querySelector('#click_myth');


btn_base.addEventListener('click' ,() =>{
  if(div.style.display === 'block' || div2.style.display === 'block' || div3.style.display === 'block' || 
  div4.style.display === 'block' ||div5.style.display === 'block'||div6.style.display === 'block') {
    div.style.display ='block';
    div2.style.display = 'none';
    div3.style.display ='none';
    div4.style.display = 'none';
    div5.style.display = 'none';
    div6.style.display = 'none';
  }

});
btn_spread.addEventListener('click' ,() =>{
  if(div.style.display === 'block' || div2.style.display === 'none' || div3.style.display === 'block' || 
   div4.style.display === 'block' || div5.style.display === 'block' || div6.style.display === 'block') {
    div.style.display ='none';
    div2.style.display = 'block';
    div3.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'none';
    div6.style.display = 'none';
  }

});
btn_protect.addEventListener('click' ,() =>{
  if(div.style.display === 'block' || div2.style.display === 'block' || div3.style.display === 'none' ||
  div4.style.display === 'block' || div5.style.display === 'block' || div6.style.display === 'block') {
    div.style.display ='none';
    div2.style.display = 'none';
    div3.style.display = 'block';
    div4.style.display = 'none';
    div5.style.display = 'none';
    div6.style.display = 'none';
  }
});

btn_test.addEventListener('click' ,() =>{
  if(div.style.display === 'block' || div2.style.display === 'block' || div3.style.display === 'block' ||
  div4.style.display === 'none' || div5.style.display === 'block' || div6.style.display === 'block') {
    div.style.display ='none';
    div2.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'block';
    div5.style.display = 'none';
    div6.style.display = 'none';
  }
});

btn_outbreak.addEventListener('click' ,() =>{
  if(div.style.display === 'block' || div2.style.display === 'block' || div3.style.display === 'block' ||
  div4.style.display === 'block' || div5.style.display === 'none' || div6.style.display === 'block') {
    div.style.display ='none';
    div2.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'block';
    div6.style.display = 'none';
  }
});

btn_myth.addEventListener('click' ,() =>{
  if(div.style.display === 'block' || div2.style.display === 'block' || div3.style.display === 'block' ||
  div4.style.display === 'block' || div5.style.display === 'block' || div6.style.display === 'none') {
    div.style.display ='none';
    div2.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'none';
    div6.style.display = 'block';
  }
});
// Scroll end

const  menuBtn = document.querySelector('.menu-btn');
const  nav = document.querySelector('.nav');
 
menuBtn.addEventListener('click', ()=>{
  nav.classList.toggle('mob');
})


var click_sound = new Audio();
click_sound.src = "button click.mp3"

function playSound(){
    click_sound.play();
}