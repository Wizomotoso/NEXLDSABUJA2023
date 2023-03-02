const progressBar = document.getElementById("progress-bar");
const fillBars = [...progressBar.getElementsByClassName("fill-bar")];

const multipartform = document.querySelector("[data-multi-part]");
const formParts = [...multipartform.querySelectorAll("[data-part]")];
let numOfParts = formParts.length;

let currentPart = formParts.findIndex(part => {
    return part.classList.contains("active");
});

fillProgressBar(currentPart);

if(currentPart < 0){
    currentPart = 0;
    displayFormPart(currentPart);
    fillProgressBar(currentPart); 
}

multipartform.addEventListener("click", e => {
    const inputs = [...formParts[currentPart].querySelectorAll("input")];
    const isValid = inputs.every(input => input.reportValidity());

    if (e.target.matches("[data-next]")){
        if (isValid){
            hideFormPart(currentPart);
            currentPart++;
            displayFormPart(currentPart);
            fillProgressBar(currentPart);
        }
    } else if (e.target.matches("[data-prev]")){
        hideFormPart(currentPart);
        emptyProgressBar(currentPart);
        currentPart--;
        displayFormPart(currentPart);
    }
})

function displayFormPart(part){
    formParts[part].classList.add("active");
}

function hideFormPart(part){
    formParts[part].classList.remove("active");
}

function fillProgressBar(part){
    fillBars[part].classList.add("filled");
}

function emptyProgressBar(part){
    fillBars[part].classList.remove("filled");
}