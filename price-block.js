//классы
function addActive(elem){
    elem.classList.remove("py-2");
    elem.classList.add("py-4", "price-block-active");
    elem.parentNode.classList.replace("mt-3","mt-1");
}                                                                                   
function removeActive(elem){
    elem.classList.remove("py-4", "price-block-active");
    elem.classList.add("py-2");
    elem.parentNode.classList.replace("mt-1","mt-3");
}
function movePriceBlock(targetPriceBlock){
    let windowInnerWidth = window.innerWidth;
    if(windowInnerWidth <= 768) {
        removeActive(targetPriceBlock);
    }
    else if(windowInnerWidth > 768){
       addActive(targetPriceBlock);
    }
}

$(document).ready(function () {
    const priceBlock = document.querySelectorAll(".price-block");
    const defaultBlock = priceBlock[1];
    //resize окна
    movePriceBlock(defaultBlock);
    $(window).resize((event)=>{
        let activeBlock = document.querySelector(".price-block-active");
        if(activeBlock != undefined) {
          let i = Array.from(priceBlock).indexOf(activeBlock)
            movePriceBlock(priceBlock[i]);
        } else {
            movePriceBlock(defaultBlock);
        }
    });
    priceBlock.forEach((element)=>{
        element.addEventListener("mouseover",function(event){
            if(window.innerWidth > 768) {
                priceBlock.forEach(function(iteration){
                    if(iteration === element){
                        addActive(iteration);
                    }
                    else if($(iteration).hasClass("price-block-active")){
                        removeActive(iteration);
                    }
                });
            }
        });
    });
});