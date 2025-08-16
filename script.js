let cart= document.querySelector("#popup")
let display_popup=document.querySelector("#display_content")
let click_count=0
let counts=0
let addition=document.querySelector("#plus")
let subtract=document.querySelector("#minus")
let numbers=document.querySelector("#number")
let image_1=document.querySelector("#image_1")
let image_2=document.querySelector("#image_2")
let image_3=document.querySelector("#image_3")
let image_4=document.querySelector("#image_4")
let cart_popup=document.querySelector("#wait")
let title=document.querySelector("#title_of_shoes")
let popup_price=document.querySelector("#prices")
let price_with_quantity=document.querySelector("#price_with_quantity")
let price_to_get_add=document.querySelector("#price_to_get_add")
let final_answers=document.querySelector("#answers")
let multiply_values=document.querySelector("#multiply")
let equating_values=document.querySelector("#equating")
let hiding_popup_image=document.querySelector("#popup_thumbnail_images")
let check_out_button=document.querySelector("#crating")
let delete_icon=document.querySelector("#delete_icon")
let total_cart_item=document.querySelector("#circle")
let cart_icon=document.querySelector("#cart")
cart.addEventListener("click",(event)=>
{
    event.preventDefault();
    click_count=click_count+1
    if(click_count%2===1)
        {
           
            cart_popup.textContent=title.textContent
            price_with_quantity.textContent=popup_price.textContent
            total_cart_item.textContent=parseInt(numbers.textContent)
            display_popup.style.display="none"
            total_cart_item.style.display="none"
            
        }
        if (total_cart_item.textContent>0){
            total_cart_item.style.display="block"
        }
        else{
            total_cart_item.style.display="none"
        }

    

});

addition.addEventListener("click",(event)=>{
    event.preventDefault();
    counts=counts+1
    numbers.textContent=counts
    display_popup.style.display="none"
   
});

subtract.addEventListener("click",(event)=>{
    event.preventDefault();
    if (counts>0){
        counts=counts-1
        numbers.textContent=counts
        display_popup.style.display="none"

    }
    
});

delete_icon.addEventListener("click",(event)=>{
    event.preventDefault();
    display_popup.style.display="block"
    cart_popup.textContent="Your Cart is Empty"
    price_with_quantity.innerHTML=" "
    multiply_values.style.display="none"
    equating_values.style.display="none"
    final_answers.textContent=" "
    hiding_popup_image.style.display="none"
    price_to_get_add.style.display="none"
    check_out_button.style.display="none"
    delete_icon.style.display="none"
    total_cart_item.style.display="none"

})

cart_icon.addEventListener("click",(event)=>{
    event.preventDefault();
    price_to_get_add.textContent=parseInt(numbers.textContent)
    let a=price_with_quantity.textContent
    let b=a.replace("$","")
    let c=parseInt(b)     
    let d=parseInt(price_to_get_add.textContent)
    let g=0
    let m=c*d 

    if(numbers.textContent>0)
            {
            display_popup.style.display="block"
            cart_popup.textContent=title.textContent
            multiply_values.style.display="block"
            equating_values.style.display="block"
            hiding_popup_image.style.display="block"
            final_answers.textContent=`$${m.toFixed(2)}`
            console.log(final_answers.textContent)
            delete_icon.style.display="block"
            price_to_get_add.style.display="block"
                
            }
    else if (d==0){
            display_popup.style.display="block"
            cart_popup.textContent="Your cart is Empty"
            price_with_quantity.innerHTML=" "
            multiply_values.style.display="none"
            equating_values.style.display="none"
            final_answers.textContent=" "
            hiding_popup_image.style.display="none"
            price_to_get_add.style.display="none"
            check_out_button.style.display="none"
            delete_icon.style.display="none"
                
    }
    else{
            display_popup.style.display="none"
        }

})
