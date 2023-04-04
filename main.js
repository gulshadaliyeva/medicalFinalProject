document.querySelector("header#small-screens .menu-wrapper a").addEventListener("click",function (e) {
    e.preventDefault()
    document.querySelector("header#small-screens nav").classList.toggle("active")
    document.querySelector("body").classList.toggle("active")
    let nav = document.querySelector("header#small-screens nav")
    if (nav.classList.contains("active")) {
        this.firstElementChild.innerText = "close"
        // document.querySelector("body").style.overflow = "hidden"
    }
    else{
        this.firstElementChild.innerText = "menu"
        // document.querySelector("body").style.overflow = "auto"
    }
})

let category = document.querySelectorAll("#WhyChooseUs .category a")
category.forEach(element => {
    element.onclick = function (e) {
        e.preventDefault()
        document.querySelector("#WhyChooseUs .category a.active").classList.remove("active")
        document.querySelector("#WhyChooseUs .items.active").classList.remove("active")
        document.querySelector(`#WhyChooseUs .items[data-id="${element.getAttribute("data-id")}"]`).classList.add("active")
        element.classList.add("active")
        setHeightToItems()
    }
});
window.onresize = function (e) {
    setHeightToItems()
}
setHeightToItems()

function setHeightToItems() {
    if (document.querySelector("#WhyChooseUs .items.active") != null) {
        let activeDiv = document.querySelector("#WhyChooseUs .items.active")
        activeDiv.parentElement.style.height = `${activeDiv.clientHeight}px`
    }
}

let headings = document.querySelectorAll("#faqs .item .heading")
headings.forEach(element => {
    element.onclick = function (e) {
        e.preventDefault()
        if (this.nextElementSibling.classList.contains("active")) {
            this.nextElementSibling.classList.remove("active")
            this.nextElementSibling.style.height = `${0}px`
            this.firstElementChild.children[0].innerText = "add"
            this.firstElementChild.children[0].classList.remove("active")
        } else {
            if (document.querySelector("#faqs .item .text.active") != null) {
                document.querySelector("#faqs .item .text.active").style.height = `${0}px`
                document.querySelector("#faqs .item .text.active").previousElementSibling.firstElementChild.firstElementChild.classList.remove("active")
                document.querySelector("#faqs .item .text.active").previousElementSibling.firstElementChild.firstElementChild.innerText ="add"
                document.querySelector("#faqs .item .text.active").classList.remove("active")
            }
            let heightp = this.nextElementSibling.children[0].clientHeight
            this.nextElementSibling.style.height = `${heightp}px`
            this.nextElementSibling.classList.add("active")
            this.firstElementChild.children[0].innerText = "remove"
            this.firstElementChild.children[0].classList.add("active")
        }
    }
});

let submit = document.querySelector("#form input.btn")
let firstName = document.querySelector("#form input.firstname")
let email = document.querySelector("#form input.email")
let number = document.querySelector("#form input.number")
let subject = document.querySelector("#form input.subject")
let message = document.querySelector("#form textarea.message")
if (document.querySelector("#form input.btn") != null) {
    submit.addEventListener("click", function (e) {
        e.preventDefault()
        if (firstName.value == "") firstName.nextElementSibling.innerText = "Adınızı qeyd edin"
        else if (firstName.value.length < 3) firstName.nextElementSibling.innerText = "Adınızı tam qeyd edin"
        else firstName.nextElementSibling.innerText = ""
        if (email.value == "") email.nextElementSibling.innerText = "E-mailinizi qeyd edin."
        else if ( !email.value.includes("@")) email.nextElementSibling.innerText = "E-mailinizi düzgün qeyd edin (@)"
        else email.nextElementSibling.innerText = ""
        if (number.value == "") number.nextElementSibling.innerText = "Nömrənizi qeyd edin"
        else if ( !number.value.startsWith("051") && !number.value.startsWith("050") && !number.value.startsWith("077") && !number.value.startsWith("070") && !number.value.startsWith("099")) number.nextElementSibling.innerText = "(051,050,077,070,099) başlamalıdı."
        else number.nextElementSibling.innerText = ""
        if (subject.value == "") subject.nextElementSibling.innerText = "Müraciyyətinizin nəylə bağlı olduqunu qeyd edin."
        else if (subject.value.length < 3) subject.nextElementSibling.innerText = "mövzunuzu tam qeyd edin."
        else subject.nextElementSibling.innerText = ""
        if ( message.value == "") message.nextElementSibling.innerText = "Suallarınızı qeyd edin."
        else if ( message.value.length > 70) message.nextElementSibling.innerText = " Ən çox 70 simvol yaza bilersiniz"
        else message.nextElementSibling.innerText = ""
    })
}


$(document).ready(function(){
    $("#slider .owl-carousel").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:false
    });
});
$(document).ready(function(){
    $("#customers .owl-carousel").owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        margin:15,
        autoplay:false,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            }
        }

    });
});

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'imageFadeDuration': 400

  })

