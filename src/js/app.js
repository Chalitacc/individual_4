document.addEventListener("DOMContentLoaded", ()=>{
     const links = document.querySelectorAll("nav a"); 
     const contents = document.querySelectorAll(".content")

     const accordianContainer = document.getElementById("accordian")
     const alertButton = document.querySelector(".alert__button"); 
     const buttonChange = document.querySelector(".color__button"); 
     const submitButton = document.querySelector(".submit__button"); 
  

    const resetSectionStates = () =>{

        contents.forEach((section) =>{
            section.classList.remove("active");

     
            
        })

        accordianContainer.style.display = "block"; 
        alertButton.style.display = "block"; 
        buttonChange.style.display = "block"; 
        submitButton.style.display = "block"
      
    }; 


    const resetBackgroudnColor = () =>{
        document.body.style.backgroundColor = "white"; 
    }

        links.forEach((link) => {
         link.addEventListener("click", (e) => {
             e.preventDefault(); 

             const targetId = link.getAttribute("href").substring(1);
             const targetContent = document.getElementById(targetId); 

            resetSectionStates(); 

            resetBackgroudnColor(); 

            
            if (targetContent){
                targetContent.classList.remove("hidden"); 
                setTimeout(()=>{
                    targetContent.classList.add("active"); 
                },10)
            }

            if (targetId === "alert"){
                alertButton.style.display = "block"; 
            }

            if (targetId === "button"){
                buttonChange.style.display = "block"; 
            }

            if (targetId === "toast"){
                submitButton.style.display ="block"
            }

            if (targetId === "accordian"){
                accordianContainer.style.display = "block"
            }
        })
    })       
 })


                    
  // ACCORDIAN

 const accordianTitleContainer = document.querySelectorAll(".accordian__title-container"); 
 const accordianDescriptionContainer = document.querySelectorAll(".accordian__description-container"); 
 const accordianLogo = document.getElementById("accordian__icon"); 
 const buttonTag = document.getElementById("button"); 




 accordianTitleContainer.forEach((title,index) =>{
     title.addEventListener("click", ()=>{
         accordianDescriptionContainer[index].classList.toggle("accordian__description-container--active"); 
         accordianLogo.classList.toggle("rotate__arrow"); 
     });
 });


 // ALERT 

 
 const alertButton = document.querySelector(".alert__button"); 
 alertButton.addEventListener(("click"),(event) =>{
    event.preventDefault(); 

   

    alert("button is clicked!🥳")

 })

//BUTTON - changes a bit slow
const buttonChange = document.querySelector(".color__button"); 

buttonChange.addEventListener("click", ()=>{
    setTimeout(()=>{
        document.body.style.backgroundColor = getRandomColor();
    }, 0)
}); 

function getRandomColor(){
    const r = Math.floor(Math.random()* 256);
    const g = Math.floor(Math.random()* 256);
    const b = Math.floor(Math.random()* 256);
    return `rgb(${r}, ${g}, ${b})`; 
}


//TOAST 

const inputField = document.getElementById("toast_input"); 
const submitButton = document.querySelector(".submit__button"); 
const toast = document.querySelector(".toast__window"); 

submitButton.addEventListener("click", ()=>{
    if (inputField.value.trim()=== ''){

        return
    };

    showToast(); 

    inputField.value = ''; 


}); 

function showToast(){
    toast.classList.add("show");

    setTimeout(()=> toast.classList.remove("show"), 3000)

}


// POP UP 
const popUpButton = document.querySelector(".pop-up__button"); 

popUpButton.addEventListener("click", ()=>{
    window.open("https://www.vg.no/", "_blank", "width = 500", "height = 400")
})


// MODAL

const modal = document.querySelector(".modal__container"); 
const openModalButton = document.querySelector(".modal__open-button"); 
const closeModalButton = document.querySelector(".modal__close-button"); 

openModalButton.addEventListener("click", ()=>{
    modal.style.display = "block"; 
}); 

closeModalButton.addEventListener("click", ()=>{
    modal.style.display = "none";
}); 

window.addEventListener("click", (event)=>{
    if (event.target === modal){
        modal.style.display = "none"
    }
})


// COUNTER 

const counterValue = document.querySelector(".value"); 
const decreaseButton = document.querySelector(".decrease");
const increaseButton = document.querySelector(".increase");   

let count = 0; 

decreaseButton.addEventListener("click",() =>{
    count--;
    counterValue.textContent = count; 

}); 

increaseButton.addEventListener("click", ()=>{
    count++;
    counterValue.textContent = count;
})



