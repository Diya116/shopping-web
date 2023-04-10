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
const searchbtn=document.querySelector(".search")
const closebtn=document.querySelector(".close-search ")
const searchmenu=document.querySelector(".slidebar-search")
// slidebar.addEventListener("click",()=>{
//     console.log("clicked")
//     slider.style.display="block"
//     slider.style.transition="all 0.5s"
// })

// close.addEventListener("click",()=>{
//     console.log("lll");
//     slider.style.display="none"
// })
 searchbtn.addEventListener("click",()=>{
     console.log("clicked")
     searchmenu.style.display="block"
     searchmenu.style.transition="all 0.5s"
 })

 closebtn.addEventListener("click",()=>{
     console.log("lll");
     searchmenu.style.display="none"
 })
function openNav()
{
    slider.style.width="250px"
    console.log("clicked");
}
function closeNav()
{
    slider.style.width="0";
}