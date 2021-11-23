//тут дроч с выделением блока из трёх
function activatePrice(index, priceBlock, priceBlockWrapper, btnBlock){
    for(let i=0; i<priceBlock.length; i++){
        if(i==index){
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

//дрочка с классами, toggle с хуя-то не помог
function movePriceBlock(targetPriceBlock, targetPriceBlockWrapper, targetPriceButton){
    let windowInnerWidth = window.innerWidth;
    if(windowInnerWidth <= 768) {
        targetPriceBlock.classList.remove("py-4", "price-block-active");
        targetPriceBlockWrapper.classList.remove("mt-1");
        targetPriceBlock.classList.add("py-2");
        targetPriceBlockWrapper.classList.add("mt-3");
        targetPriceButton.classList.remove("btn-lg");
    }
    else if(windowInnerWidth > 768){
        targetPriceBlock.classList.add("py-4", "price-block-active");
        targetPriceBlockWrapper.classList.add("mt-1");
        targetPriceBlock.classList.remove("py-2");
        targetPriceBlockWrapper.classList.remove("mt-3");
        targetPriceButton.classList.add("btn-lg");
    }
}

$(document).ready(function () {
    const priceBlock = document.querySelectorAll(".price-block");
    const priceBlockWrapper = document.querySelectorAll(".price-block-wrapper");
    const btnBlock = document.querySelectorAll(".btn-price");

    //долбимся с resize'ом окна
    movePriceBlock(priceBlock[1],priceBlockWrapper[1],btnBlock[1]);
    $(window).resize((event)=>{
        let activeBlock = document.querySelector(".price-block-active");
        if(activeBlock != undefined) {
            let i=0;
            while(activeBlock != priceBlock[i]){
                i++;
            }
            movePriceBlock(priceBlock[i], priceBlockWrapper[i], btnBlock[i]);
        } else {
            movePriceBlock(priceBlock[1], priceBlockWrapper[1], btnBlock[1]);
        }
    });

    //ивент реагирует только на эту хуету, правда здорово?
    const priceStandard = $(".price-standard");
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

});