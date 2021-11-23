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
    $(elem).children(".price-footer").children(".btn-price").addClass("btn-lg"); //children(".price-footer").children(".btn-price") заменить на find(".btn-price")?
}                                                                                   //Может быть, будет медленнее работать. | за скоростью не гонимся гы
function removeActive(elem){
    elem.classList.remove("py-4", "price-block-active");
    elem.classList.add("py-2");
    elem.parentNode.classList.replace("mt-1","mt-3");
    $(elem).children(".price-footer").children(".btn-price").removeClass("btn-lg");
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
    //const priceBlockWrapper = document.querySelectorAll(".price-block-wrapper"); //нах не нужен, смотри пример | писал это максимально без js XD
    //const btnBlock = document.querySelectorAll(".btn-price"); //нах не нужен, смотри пример |  писал это максимально без js :))
    //console.log($(priceBlockWrapper.item(0)).find(".price-block"))
    //долбимся с resize'ом окна
    movePriceBlock(defaultBlock);
    $(window).resize((event)=>{
        let activeBlock = document.querySelector(".price-block-active");
        if(activeBlock != undefined) {
            let i=0;                                //Возможно заменить 3 строчки на | ясно, харченко-mode(ну а так хз, побочек не будет? я просто писал это максимально без js :D )
            while(activeBlock != priceBlock[i]){    // let i = Array.from(priceBlock).indexOf(activeBlock)
                i++;                                // Может быть, будет медленнее работать.
            }
            movePriceBlock(priceBlock[i]);
        } else {
            movePriceBlock(defaultBlock);
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