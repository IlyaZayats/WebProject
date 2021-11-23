//тут дроч с выделением блока из трёх
/*function activatePrice(index, priceBlock, priceBlockWrapper, btnBlock){
    for(let i=0; i<priceBlock.length; i++){
        if(priceBlock[i]==index){
            btnBlock[i].classList.add("btn-lg");
            priceBlock[i].classList.remove("py-2");
            priceBlock[i].classList.add("py-4", "price-block-active");
            priceBlockWrapper[i].classList.remove("mt-3");
            priceBlockWrapper[i].classList.add("mt-1");
        } else {
            btnBlock[i].classList.remove("btn-lg");
            priceBlock[i].classList.add("py-2");
            priceBlock[i].classList.remove("py-4", "price-block-active");
            priceBlock[i].parentNode.classList.add("mt-3");
        }
    }
}
*/
//дрочка с классами, toggle с хуя-то не помог
function addActive(elem){
    elem.classList.remove("py-2");
    elem.classList.add("py-4", "price-block-active");
    elem.parentNode.classList.replace("mt-3","mt-1");
    $(elem).children(".price-footer").children(".btn-price").toggleClass("btn-lg"); //children(".price-footer").children(".btn-price") заменить на find(".btn-price")?
}                                                                                   //Может быть, будет медленнее работать. 
function removeActive(elem){
    elem.classList.remove("py-4", "price-block-active");
    elem.classList.add("py-2");
    elem.parentNode.classList.replace("mt-1","mt-3");
    $(elem).children(".price-footer").children(".btn-price").toggleClass("btn-lg");
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
    //const priceBlockWrapper = document.querySelectorAll(".price-block-wrapper"); //нах не нужен, смотри пример
    //const btnBlock = document.querySelectorAll(".btn-price"); //нах не нужен, смотри пример
    //console.log($(priceBlockWrapper.item(0)).find(".price-block"))
    //долбимся с resize'ом окна
    movePriceBlock(priceBlock[1]);
    $(window).resize((event)=>{
        let activeBlock = document.querySelector(".price-block-active");
        if(activeBlock != undefined) {
            let i=0;                                //Возможно заменить 3 строчки на 
            while(activeBlock != priceBlock[i]){    // let i = Array.from(priceBlock).indexOf(activeBlock)
                i++;                                // Может быть, будет медленнее работать.
            }
            movePriceBlock(priceBlock[i]);
        } else {
            movePriceBlock(priceBlock[1]);
        }
    });
    priceBlock.forEach((element)=>{
        element.addEventListener("click",function(event){
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
    //ивент реагирует только на эту хуету, правда здорово?
   /* const priceStandard = $(".price-standard");
    const priceBusiness = $(".price-business");
    const priceVip = $(".price-vip");

    //ооо говно-код поъехал
    priceStandard.click((event)=>{
        let windowInnerWidth = window.innerWidth;
        if(windowInnerWidth > 768) {
            activatePrice(0, priceBlock, priceBlockWrapper, btnBlock);
        }
    });
    priceBusiness.click((event)=>{
        let windowInnerWidth = window.innerWidth;
        if(windowInnerWidth > 768) {
            activatePrice(1, priceBlock, priceBlockWrapper, btnBlock);
        }
    });
    priceVip.click((event)=>{
        let windowInnerWidth = window.innerWidth;
        if(windowInnerWidth > 768) {
            activatePrice(2, priceBlock, priceBlockWrapper, btnBlock);
        }
    });
    */
});