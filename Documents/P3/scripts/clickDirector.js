

function clickDirector(e) {
    if (e.target.nodeName == "P") {
        clickTarget = e.target.previousElementSibling.innerText;
        sessionStorage.setItem("clickTarget",e.target.previousElementSibling.innerText)
    }
    else if(e.target.parentElement.nodeName == "A") {
        clickTarget = e.target.parentElement.nextElementSibling.querySelector("h3").innerText;
        sessionStorage.setItem("clickTarget",e.target.parentElement.nextElementSibling.querySelector("h3").innerText)
    }
    else if(e.target.nodeName == "A") {
        clickTarget = e.target.nextElementSibling.querySelector("h3").innerText;
        sessionStorage.setItem("clickTarget",e.target.nextElementSibling.querySelector("h3").innerText)
    }
    else if(e.target.nodeName == "ARTICLE") {
        clickTarget = e.target.querySelector("h3").innerText;
        sessionStorage.setItem("clickTarget",e.target.querySelector("h3").innerText)
    }
    else  if (e.target.nodeName == "LI") {
        clickTarget = e.target.querySelector("h3").innerText;
        sessionStorage.setItem("clickTarget",e.target.querySelector("h3").innerText)
    }
    else {
        clickTarget = e.target.innerText;
        sessionStorage.setItem("clickTarget",e.target.innerText)
    }
    console.log(clickTarget);
};
let clickTarget = "";
document.addEventListener("click", clickDirector);