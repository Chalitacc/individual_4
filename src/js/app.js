document.addEventListener("DOMContentLoaded", ()=>{
     const links = document.querySelectorAll("nav a"); 
     const contents = document.querySelectorAll(".content")

    const resetSectionStates = () =>{

        contents.forEach((section) =>{
            section.classList.remove("active");
            
        })
    }; 


        links.forEach((link) => {
         link.addEventListener("click", (e) => {
             e.preventDefault(); 

             const targetId = link.getAttribute("href").substring(1);
             const targetContent = document.getElementById(targetId); //denne var lengre ned

            resetSectionStates(); 

            
            if (targetContent){
                targetContent.classList.remove("hidden"); 
                setTimeout(()=>{
                    targetContent.classList.add("active"); 
                },10)
               
            }
        })
    })       
 })


                    
  // ACCORDIAN

 const accordianTitleContainer = document.querySelectorAll(".accordian__title-container"); 
 const accordianDescriptionContainer = document.querySelectorAll(".accordian__description-container"); 
 const accordianLogo = document.getElementById("accordian__icon"); 
 const accordianContainer = document.getElementById("accordian")
 const buttonTag = document.getElementById("button"); 




 accordianTitleContainer.forEach((title,index) =>{
     title.addEventListener("click", ()=>{
         accordianDescriptionContainer[index].classList.toggle("accordian__description-container--active"); 
         accordianLogo.classList.toggle("rotate__arrow"); 
        alertButton.style.display = "none"


     });
 });


 // ALERT 

 const alertButton = document.querySelector(".alert__button"); 

 alertButton.addEventListener(("click"),(event) =>{
    event.preventDefault(); 
    accordianContainer.style.display = "none";
    buttonTag.style.display = "none";
    buttonChange.style.display = "none";

    alert("button is clicked!🥳")

 })

//BUTTON - changes a bit slow
const buttonChange = document.querySelector(".color__button"); 
buttonChange.addEventListener("click", ()=>{
    accordianContainer.style.display = "none"; 
    alertButton.style.display="none";

    document.body.style.backgroundColor= getRandomColor(); 
}); 

function getRandomColor(){
    const randomLetters = '0123456ABCD'; 
    let color = '#'; 
    for (let i = 0; i < 6; i ++){
        color += randomLetters [Math.floor(Math.random()*16)]
    }
    return color; 
}




