//функция смены позиции навбара
function moveNavbar(){
    let windowInnerWidth = window.innerWidth;
    let navbar = $("#navbar");
    if(windowInnerWidth <= 993) {
        navbar.addClass("fixed-bottom");
        navbar.addClass("bg-dark");
        $(".video-bck").remove();
    }
    if(windowInnerWidth >= 993){
        navbar.removeClass("fixed-bottom");
        navbar.removeClass("bg-dark");
    }
}

//показ дропдауна
function showDropdown(navbarDropdown, list){
    $(navbarDropdown).addClass("show");
    $(navbarDropdown).prop("aria-expanded", true);
    $(list).addClass("show");
}

//скрытие дропдауна
function hideDropdown(navbarDropdown, list){
    let windowInnerWidth = window.innerWidth;
    if(windowInnerWidth >= 993) {
        $(navbarDropdown).removeClass("show");
        $(navbarDropdown).prop("aria-expanded", false);
        $(list).removeClass("show");
    }
}

$(document).ready(function (){
    //перемещаем навбар через ивент
    moveNavbar();
    $(window).resize((event)=>{
        moveNavbar();
    });

    $("#check").change(function () {
        if ($("#check").is(":checked")) {
            $("#submitButton").prop("disabled", false);
        } else {
            $("#submitButton").prop("disabled", true);
        }
    });

    let data = document.querySelectorAll(".info");
    const ajaxSend = (formData) => {
        fetch("https://formcarry.com/s/1TauRT8f23J", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(function (response) {
                if(!response.ok)
                {
                    throw new Error(response.status);
                }
                alert("Сообщение отправлено");
                data.forEach((element) => { element.value = ""; });
                $("#check").prop("checked", false);
                $("#submitButton").prop("disabled", true);
                localStorage.clear();
            })
            .catch((error) => {alert(error);})
    };

    const forms = $("#thatForm");
    for (let i = 0; i < forms.length; i++) {
        $("#submitButton").click(function (e) {
            e.preventDefault();

            let formData = new FormData(forms[i]);
            formData = Object.fromEntries(formData);

            ajaxSend(formData);
        });
    }

    $(".navbar-toggler").click(event => {
        showDropdown('#navbarDropdown-1','#list-1');
        showDropdown('#navbarDropdown-2','#list-2');
    });

    // document.querySelectorAll(".dropdown").forEach((element)=>{
    //     element.addEventListener("mouseover", function (event)=>{
    //         element.
    //     })
    //     element.addEventListener("mouseout", function (event)=>{
    //
    //     })
    // })


    /*
    console.log(priceStandard);
    let currentBlock = event.target.closest(".price-block");
    console.log(currentBlock);
    if(currentBlock==priceStandard){
        priceStandard.removeClass("py-2");
        priceStandard.removeClass("px-2");
        priceBusiness.removeClass("py-4");
        priceBusiness.removeClass("px-4");
        priceVip.removeClass("py-4");
        priceVip.removeClass("px-4");
        priceStandard.addClass("py-4");
        priceStandard.addClass("px-4");

    }
    if(currentBlock==priceVip){
        priceVip.removeClass("py-2");
        priceVip.removeClass("px-2");
        priceStandard.removeClass("py-4");
        priceStandard.removeClass("px-4");
        priceBusiness.removeClass("py-4");
        priceBusiness.removeClass("px-4");
        priceVip.addClass("py-4");
        priceVip.addClass("px-4");
    }
    if(currentBlock==priceBusiness){
        priceBusiness.removeClass("py-2");
        priceBusiness.removeClass("px-2");
        priceStandard.removeClass("py-4");
        priceStandard.removeClass("px-4");
        priceVip.removeClass("px-4");
        priceVip.removeClass("py-4");
        priceBusiness.addClass("py-4");
        priceBusiness.addClass("px-4");
    }
     */
    /*navbarDrop=$("#navbarDropdown");
    let flag = false;
    navbarDrop.click(function (event){
        if(!flag){
            navbarDrop.prop("aria-expanded", "true");
            navbarDrop.addClass("show");
            $(".dropdown-menu").addClass("show");
            flag=true;
        } else{
            navbarDrop.prop("aria-expanded", "false");
            navbarDrop.removeClass("show");
            $(".dropdown-menu").removeClass("show");
            flag=false;
        }
    });

     */






})