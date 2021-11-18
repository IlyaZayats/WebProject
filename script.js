function moveNavbar(){
    let windowInnerWidth = window.innerWidth;
    let navbar = $("#navbar");
    if(windowInnerWidth <= 576) {
        navbar.addClass("fixed-bottom");
        navbar.addClass("bg-dark");

    }
    if(windowInnerWidth >= 576){
        navbar.removeClass("fixed-bottom");
        navbar.removeClass("bg-dark");
    }
}


$(document).ready(function (){

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
    data.forEach(function (element) {
        element.value = localStorage.getItem(element.name);
        element.addEventListener("blur", function (event) {
            localStorage.setItem(event.target.name, event.target.value);
        });
    });

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