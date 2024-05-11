let cart= document.querySelector("#popup")
let display_popup=document.querySelector("#display_content")
let click_count=0
let counts=0
let addition=document.querySelector("#plus")
let subtract=document.querySelector("#minus")
let numbers=document.querySelector("#number")
cart.addEventListener("click",(event)=>
{
    event.preventDefault();
    click_count=click_count+1
    if(click_count%2===1)
        {
            display_popup.style.display="block"
        }
    else
    {
        display_popup.style.display="none"
    }

});

addition.addEventListener("click",(event)=>{
    event.preventDefault();
    counts=counts+1
    numbers.textContent=counts
   
});

subtract.addEventListener("click",(event)=>{
    event.preventDefault();
    counts=counts-1
    if(counts>=0){
        numbers.textContent=counts
    }
   
    
});
