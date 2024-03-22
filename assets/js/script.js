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
const epostaerror = document.querySelector(".epostaError")
const numbererror= document.querySelector(".numberError")
const myRange = document.querySelector("#myRange")
const yearlyPlans = document.querySelectorAll(".yearly-plan")
const monthlyPlans = document.querySelectorAll(".monthly-plan")
const boxoneclicks = document.querySelectorAll(".box-one")

for (const boxoneclick of boxoneclicks) {
    boxoneclick.addEventListener("click",function(){
        if(boxoneclick.classList.contains("active")){
            boxoneclick.classList.remove("active")
        }
        else{
            boxoneclick.classList.add("active")
            
        }
    })

    
    
}


myRange.addEventListener("click",function(){
    if(myRange.value =="2"){
        for (const yearlyPlan of yearlyPlans) {
            yearlyPlan.style.display="block"
        }
        for (const monthlyPlan of monthlyPlans){
            monthlyPlan.style.display="none"

        }
      
    }
    else{
        for (const yearlyPlan of yearlyPlans) {
            yearlyPlan.style.display = "none";
        }
        for (const monthlyPlan of monthlyPlans) {
            monthlyPlan.style.display = "block";
        }
    }
})

form.addEventListener("submit",function(e){
    e.preventDefault();
    const name = form["input-name"].value
    const eposta = form["input-eposta"].value
    const number = form["input-number"].value
     
     if(!eposta.includes("@")){
        epostaerror.style.display="block"
     }
     else{
        epostaerror.style.display="none"
     }

     if(number.length > 11 || isNaN(number)){
        numbererror.style.display="block"
     }
     else{
        numbererror.style.display="none"

     }
})



selectplan.addEventListener("click",function(){
    // console.log("kdjgfb");
    rightsidesecond.style.display="none"
    rightsidefirst.style.display="block"
    rightsidethird.style.display="none"
    rightsidefourth.style.display="none"
})

yourinfo.addEventListener("click",function(){
    // console.log("jsng");
    rightsidesecond.style.display="block"
    rightsidefirst.style.display="none"
    rightsidethird.style.display="none"
    rightsidefourth.style.display="none"


})

addons.addEventListener("click",function(){
    // console.log("rjgn");
    rightsidethird.style.display="block"
    rightsidesecond.style.display="none"
    rightsidefirst.style.display="none"
    rightsidefourth.style.display="none"

})

summary.addEventListener("click",function(){
    // console.log("sog");
    rightsidethird.style.display="none"
    rightsidesecond.style.display="none"
    rightsidefirst.style.display="none"
    rightsidefourth.style.display="block"
})







