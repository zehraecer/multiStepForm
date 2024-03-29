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
const numbererror = document.querySelector(".numberError")
const myRange = document.querySelector("#myRange")
const yearlyPlans = document.querySelectorAll(".yearly-plan")
const monthlyPlans = document.querySelectorAll(".monthly-plan")
const boxoneclicks = document.querySelectorAll(".box-one")
const nexbtnone = document.querySelector(".next-btn-one")
const nexbtntwo = document.querySelector(".next-btn-two")
const nexbtnthree = document.querySelector(".next-btn-three")
const nexbtnfour = document.querySelector(".next-btn-four")
const gobackbtnone = document.querySelector(".goBack-btn-one")
const gobackbtntwo = document.querySelector(".goBack-btn-two")
const gobackbtnthere = document.querySelector(".goBack-btn-three")
const confirmbtn = document.querySelector(".confirm-btn")
const rightsideconfirm = document.querySelector(".right-side-confirm")

confirmbtn.addEventListener("click", function () {
    console.log("skfgb");
    if (rightsidefourth.style.display = "block") {
        rightsidefourth.style.display = "none"
        rightsideconfirm.style.display = "block"
    }
})


gobackbtnone.addEventListener("click", function () {
    console.log("ksjfbd");
    if (rightsidesecond.style.display = "block") {
        rightsidesecond.style.display = "none"
        rightsidefirst.style.display = "block"
    }
})

gobackbtntwo.addEventListener("click", function () {
    console.log("ksjfbd");
    if (rightsidethird.style.display = "block") {
        rightsidethird.style.display = "none"
        rightsidesecond.style.display = "block"
    }
})

gobackbtnthere.addEventListener("click", function () {
    if (rightsidefourth.style.display = "block") {
        rightsidefourth.style.display = "none"
        rightsidethird.style.display = "block"
    }
})




nexbtntwo.addEventListener("click", function () {
    if (rightsidesecond.style.display = "block") {
        rightsidesecond.style.display = "none"
        rightsidethird.style.display = "block"
    }
})

nexbtnthree.addEventListener("click", function () {
    if (rightsidethird.style.display = "block") {
        rightsidethird.style.display = "none"
        rightsidefourth.style.display = "block"
    }
})


// function nextBtnRender() {
//     const nextbtn = document.querySelector(".next-btn1")
//     nextbtn.addEventListener("click", function () {
//         if (rightsidefirst.style.display === "block") {
//             console.log("iki");
//             rightsidefirst.style.display = "none";
//             rightsidesecond.style.display = "block";
//         } else if (rightsidesecond.style.display === "block") {
//             console.log("üç");
//             rightsidesecond.style.display = "none";
//             rightsidethird.style.display = "block";
//         } else if (rightsidethird.style.display === "block") {
//             console.log("dört");
//             rightsidethird.style.display = "none";
//             rightsidefourth.style.display = "block";
//         }
//     })
// }






for (const boxoneclick of boxoneclicks) {
    boxoneclick.addEventListener("click", function () {
        if (boxoneclick.classList.contains("active")) {
            boxoneclick.classList.remove("active")
        }
        else {
            boxoneclick.classList.add("active")

        }
    })

}


function selectPlans() {
    myRange.addEventListener("click", function () {
        if (myRange.value == "2") {
            for (const yearlyPlan of yearlyPlans) {
                yearlyPlan.style.display = "block"
            }
            for (const monthlyPlan of monthlyPlans) {
                monthlyPlan.style.display = "none"

            }

        }
        else {
            for (const yearlyPlan of yearlyPlans) {
                yearlyPlan.style.display = "none";
            }
            for (const monthlyPlan of monthlyPlans) {
                monthlyPlan.style.display = "block";
            }
        }
    })
}




form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (nextBtn1()) {
        console.log("dsjgfd");
        if (rightsidefirst.style.display = "block") {
            rightsidefirst.style.display = "none"
            rightsidesecond.style.display = "block"
        }

    }
    else {
        console.log("dfgfdo");
    }


})


function nextBtn1() {
    const name = form["input-name"].value
    const eposta = form["input-eposta"].value
    const number = form["input-number"].value

    if (!eposta.includes("@")) {
        epostaerror.style.display = "block"
        return false;
    }
    else {
        epostaerror.style.display = "none"
    }

    if (number.length > 11 || isNaN(number)) {
        numbererror.style.display = "block"
        return false;
    }
    else {
        numbererror.style.display = "none"

    }

    localStorage.setItem('name', name);
    localStorage.setItem('eposta', eposta);
    localStorage.setItem('number', number);
    return true;
}

const x = localStorage.getItem('name');;
console.log(x);



function changePage() {
    selectplan.addEventListener("click", function () {
        // console.log("kdjgfb");
        rightsidesecond.style.display = "none"
        rightsidefirst.style.display = "block"
        rightsidethird.style.display = "none"
        rightsidefourth.style.display = "none"
        rightsideconfirm.style.display = "none"

    })

    yourinfo.addEventListener("click", function () {
        // console.log("jsng");
        rightsidesecond.style.display = "block"
        rightsidefirst.style.display = "none"
        rightsidethird.style.display = "none"
        rightsidefourth.style.display = "none"
        rightsideconfirm.style.display = "none"

        selectPlans()

    })

    addons.addEventListener("click", function () {
        // console.log("rjgn");
        rightsidethird.style.display = "block"
        rightsidesecond.style.display = "none"
        rightsidefirst.style.display = "none"
        rightsidefourth.style.display = "none"
        rightsideconfirm.style.display = "none"


    })

    summary.addEventListener("click", function () {
        // console.log("sog");
        rightsidethird.style.display = "none"
        rightsidesecond.style.display = "none"
        rightsidefirst.style.display = "none"
        rightsidefourth.style.display = "block"
        rightsideconfirm.style.display = "none"

    })


}



changePage()
// nextBtnRender()






