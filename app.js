const heart=document.querySelector(".heart")
heart.addEventListener("click",()=>{
   heart.style.color="pink";
   
})

const addcart=document.querySelector(".addcart")
addcart.addEventListener("click",()=>{
   addcart.style.color="#d64161";
   
})
const slidebar=document.querySelector(".slidebar");
const slider=document.querySelector(".main-slidebar");
const close=document.querySelector(".close");
slidebar.addEventListener("click",()=>{
    console.log("clicked")
    slider.style.display="block"
    slider.style.transition="all 0.5s"
})

close.addEventListener("click",()=>{
    console.log("lll");
    slider.style.display="none"
})