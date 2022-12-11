let logoTxt = document.querySelector(".logo-text");
setInterval(() => {
    let r1 = Math.floor(Math.random() * 255);
    let r2 = Math.floor(Math.random() * 255);
    let r3 = Math.floor(Math.random() * 255);
    logoTxt.style.color = `rgb(${r1}, ${r2}, ${r3})`
}, 1000);

let topbread = document.querySelector(".top-bread")
// bread

// total:
let jj = 2;
let total = document.getElementById("dollar")
total.style.fontSize = "50px"
total.textContent = jj;
// jj

// Buttons
let cheese = document.querySelector(".cheese")
let meat =document.querySelector(".meat")
let onion = document.querySelector(".onion")
let salad = document.querySelector(".salad")
let tomato = document.querySelector(".tomato")
let pickle = document.querySelector(".pickle")
// buttons end...

let refresh = document.querySelector(".refresh")

let h1 = document.querySelector(".h1")
function buyurtma() {
    let random =  Math.floor(Math.random() * (35 - 10) + 10);
    h1.textContent = "Sizning navbatingiz: " + random
}




let ing = document.querySelector(".ing")
let img = document.createElement("img");
meat.addEventListener("click", () => {
    let img = document.createElement("img")
    ing.appendChild(img)
    img.src = "burger-layers/meat.svg"
    img.style.display = "block"
    img.style.marginBottom = "-60px"
    img.style.zIndex = "10"
    jj+=5;
    total.textContent = jj;
    img.addEventListener("click", () => {
        ing.removeChild(img)
        jj-=5;
        total.textContent = jj;
    })
    refresh.addEventListener("click", () => {
        ing.removeChild(img)
        jj = 2;
        total.textContent = jj;
    })
})
cheese.addEventListener("click", () => {
    let img = document.createElement("img")
    ing.appendChild(img);
    img.src = "burger-layers/cheese.svg"
    img.style.marginBottom = "-90px"
    img.style.transform = "translateY(-18px)"
    img.style.zIndex = "10"
    img.style.display = "block"
    jj+=2
    total.textContent = jj;
    img.addEventListener("click", () => {
        ing.removeChild(img)
        jj-=2;
        total.textContent = jj;
    })
    refresh.addEventListener("click", () => {
        ing.removeChild(img)
        jj = 2;
        total.textContent = jj;
    })

})
onion.addEventListener("click", () => {
    let img = document.createElement("img")
    ing.appendChild(img);
    img.src = "burger-layers/onion.svg"
    img.style.marginBottom = "-100px"
    img.style.transform = "translateY(-30px)"
    img.style.zIndex = "10"
    img.style.display = "block"
    jj+=1;
    total.textContent = jj;
    img.addEventListener("click", () => {
        ing.removeChild(img)
        jj-=1;
        total.textContent = jj;
    })
    refresh.addEventListener("click", () => {
        ing.removeChild(img)
        jj = 2;
        total.textContent = jj;
    })

})
salad.addEventListener("click", () => {
    let img = document.createElement("img")
    ing.appendChild(img);
    img.src = "burger-layers/salad.svg"
    img.style.marginBottom = "-50px"
    img.style.zIndex = "10"
    img.style.display = "block"
    jj+=1;
    total.textContent = jj;
    img.addEventListener("click", () => {
        ing.removeChild(img)
        jj-=1;
        total.textContent = jj;
    })
    refresh.addEventListener("click", () => {
        ing.removeChild(img)
        jj = 2;
        total.textContent = jj;
    })

})
tomato.addEventListener("click", () => {
    let img = document.createElement("img")
    ing.appendChild(img);
    img.src = "burger-layers/tomato.svg"
    img.style.marginBottom = "-80px"
    img.style.zIndex = "10"
    img.style.display = "block"
    jj+=2;
    total.textContent = jj;
    img.addEventListener("click", () => {
        ing.removeChild(img)
        jj-=2;
        total.textContent = jj;
    })
    refresh.addEventListener("click", () => {
        ing.removeChild(img)
        jj = 2;
        total.textContent = jj;
    })

})
pickle.addEventListener("click", () => {
    let img = document.createElement("img")
    ing.appendChild(img);
    img.src = "burger-layers/pickle.svg"
    img.style.marginBottom = "-80px"
    img.style.transform = "translateY(-18px)"
    img.style.zIndex = "10"
    img.style.display = "block"
    jj+=3;
    total.textContent = jj;
    img.addEventListener("click", () => {
        ing.removeChild(img)
        jj-=3;
        total.textContent = jj;
    })
    refresh.addEventListener("click", () => {
        ing.removeChild(img)
        jj = 2;
        total.textContent = jj;
    })

})



