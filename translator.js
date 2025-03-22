let engText=[
   "Unlimited movies, TV",
   "shows and more",
   "Starts at ₹149. Cancel at any time",
   "Ready to watch? Enter your email to create or restart your membership"


]
let hindiText=[
    "अनलिमिटेड फ़िल्में, टीवी शो,",
    "और बहुत कुछ",
   " ₹149 से शुरू होता है. कभी भी कैंसल करें",
   "₹149 से शुरू होता है. कभी भी कैंसल करें."
]
let dropdown=document.querySelector("select")
let para=document.querySelectorAll("h2")



dropdown.addEventListener("change",()=>{
    console.log(dropdown.value)
   
    if(dropdown.value == "Eng"){
        para.forEach((value,index)=>{
            value.textContent = engText[index]

        })
        // para[0].textContent = engText[0]
        // para[1].textContent = engText[1]
        // para[2].textContent = engText[2]
        // para[3].textContent = engText[3]


    }
    else if(dropdown.value == "Hin"){
        para.forEach((value,index)=>{
            value.textContent = hindiText[index]

        })
        // para[0].textContent = hindiText[0]
        // para[1].textContent = hindiText[1]
        // para[2].textContent = hindiText[2]
        // para[3].textContent = hindiText[3]

    }
})
