const mainBox = document.querySelector(".main-box");
const thanksBox = document.querySelector(".thanks-box");
const submitButton = document.getElementById("submit");
const rating= document.getElementById("rate");
const rates = document.querySelectorAll(".number")




rates.forEach(rate =>{
    rate.addEventListener("click" ,() => {
        rating.innerHTML = rate.innerHTML;
        submitButton.addEventListener("click", () => {
            thanksBox.classList.remove("hidden");
            mainBox.style.display = "none";
        })
    })

})

