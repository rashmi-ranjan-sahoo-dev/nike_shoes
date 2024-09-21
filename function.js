const menu_contain = document.querySelector(".menu_contain");

const menu_logo = document.querySelector(".menu_logo");

const cross = document.querySelector(".cross");

const jorden_logo = document.querySelector("#jorden-logo");

menu_logo.addEventListener('click',function(val){
    if( menu_contain.style.display ==='none')
    {
        menu_contain.style.display= 'block';
        menu_contain.style.backgroundColor= 'white';
    }
    else{
     menu_contain.style.display= 'none';
    }
 })

 menu_logo.addEventListener('click',function(val){
    jorden_logo.style.display='none';
 });

cross.addEventListener('click',function(val){
   if( menu_contain.style.display ==='block')
   {
       menu_contain.style.display= 'none';
   }
   else{
    menu_contain.style.display= 'block';
   }
})

cross.addEventListener('click',function(val){
    jorden_logo.style.display='block';
 })
// ====================================================        body        ======================================================================

let slider = document.querySelectorAll(".slider");
// console.log(slider);
let count = 0;
slider.forEach((slide,idx)=>{
  slide.style.left=`${idx*100}%`;
//   slider.style.margin = '3px';
})

let slideimg = ()=>{
  slider.forEach((slide)=>{
    slide.style.transform = `translateX(-${count*100}%)`;
    // slide.style.margin ='5px'
  })
}

const leftbtn = document.querySelector(".leftbtn")
const rightbtn = document.querySelector(".rightbtn")

function left(){
    count--;
    // if(count==-1) count = 7;
    slideimg();
}
function right(){
    count++;
    // if(count==8) count = 0;
    slideimg();
}
leftbtn.addEventListener('click',left);
rightbtn.addEventListener('click',right);

const slider2 = document.querySelectorAll(".slider2");

let count2 = 0;

slider2.forEach((slide,ind)=>{
   slide.style.left =`${ind*100}%`
})
let slideimg2 = ()=>{
  slider2.forEach((slider)=>{
    slider.style.transform = `translateX(-${count2*100}%)`
  })
}

function left2()
{
  // alert("left");
  count2--;
  slideimg2();
}

function right2()
{
  //  alert("right");
  count2++;
  slideimg2();
}

let leftbtn2 = document.querySelector(".leftbtn2");

let rightbtn2 = document.querySelector(".rightbtn2");

leftbtn2.addEventListener("click",left2)

rightbtn2.addEventListener("click",right2);


