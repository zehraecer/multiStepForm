const selectplan = document.querySelector(".selectPlan")
const yourinfo = document.querySelector(".yourinfo")
const addons = document.querySelector(".add-ons")
const summary = document.querySelector(".summary")
const rightsidefirst = document.querySelector(".right-side-first")
const rightsidesecond = document.querySelector(".right-side-second")
const rightsidethird = document.querySelector(".right-side-third")
const rightsidefourth = document.querySelector(".right-side-fourth")
const inputname = document.querySelector(".input-name")
const form = document.querySelector(".submitForm")

form.addEventListener("submit",function(e){
    e.preventDefault();
    const name = form["input-name"].value
    // console.log(name)
    const eposta = form["input-eposta"].value
    // console.log(eposta);
    const number = form["input-number"].value
    // console.log(number);


})











selectplan.addEventListener("click",function(){
    console.log("kdjgfb");
    rightsidesecond.style.display="none"
    rightsidefirst.style.display="block"
    rightsidethird.style.display="none"
    rightsidefourth.style.display="none"
})

yourinfo.addEventListener("click",function(){
    console.log("jsng");
    rightsidesecond.style.display="block"
    rightsidefirst.style.display="none"
    rightsidethird.style.display="none"
    rightsidefourth.style.display="none"


})

addons.addEventListener("click",function(){
    console.log("rjgn");
    rightsidethird.style.display="block"
    rightsidesecond.style.display="none"
    rightsidefirst.style.display="none"
    rightsidefourth.style.display="none"

})

summary.addEventListener("click",function(){
    console.log("sog");
    rightsidethird.style.display="none"
    rightsidesecond.style.display="none"
    rightsidefirst.style.display="none"
    rightsidefourth.style.display="block"
})







