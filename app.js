let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let xizmatga = document.getElementById('xizmatga')
let rejim = document.getElementById('rejim')



btn1.addEventListener("click", function () {
    let bosh = document.getElementById("bosh")
    let haqida = document.getElementById("haqida")
    let xizmatlar = document.getElementById("xizmatlar")

    bosh.style.display = "block"
    haqida.style.display = "none"
    xizmatlar.style.display = "none"
})
btn2.addEventListener("click", function () {
    let bosh = document.getElementById("bosh")
    let haqida = document.getElementById("haqida")
    let xizmatlar = document.getElementById("xizmatlar")

    bosh.style.display = "none"
    haqida.style.display = "block"
    xizmatlar.style.display = "none"
})
btn3.addEventListener("click", function () {
    let bosh = document.getElementById("bosh")
    let haqida = document.getElementById("haqida")
    let xizmatlar = document.getElementById("xizmatlar")

    bosh.style.display = "none"
    haqida.style.display = "none"
    xizmatlar.style.display = "block"
})

xizmatga.addEventListener("click", function () {
    let bosh = document.getElementById("bosh")
    let haqida = document.getElementById("haqida")
    let xizmatlar = document.getElementById("xizmatlar")

    bosh.style.display = "none"
    haqida.style.display = "none"
    xizmatlar.style.display = "block"
})



rejim.addEventListener("click",function () {
    if(document.body.classList.contains("tungi")) {
        document.body.classList.remove("tungi")
       rejim.innerHTML =  "🌙 Tungi rejim"
    } else {
        document.body.classList.add("tungi")
        rejim.innerHTML = "☀️ Kunduzgi rejim"
    }
} )





let qatorlar = document.querySelectorAll(".qator")


let kattaRasmlar = document.querySelectorAll(".katta-blok")


qatorlar.forEach(function (qator, index) {

    if (index % 2 == 0) {
        qator.classList.add("chap")
    } else {
        qator.classList.add("ong")
    }

})



let kuzatish = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("korindi")

        } else {

            entry.target.classList.remove("korindi")

        }

    })

}, {
    threshold: 0.15
})



qatorlar.forEach(function (qator) {
    kuzatish.observe(qator)
})



kattaRasmlar.forEach(function (rasm) {
    kuzatish.observe(rasm)
})
