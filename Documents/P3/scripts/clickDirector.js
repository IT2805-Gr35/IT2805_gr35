

function clickDirector(e) {
    if (e.target.nodeName == "P") {
        clickTarget = e.target.previousElementSibling.innerText;
        sessionStorage.setItem("clickTarget",e.target.previousElementSibling.innerText)
    }
    else if(e.target.parentElement.nodeName == "A") {
        clickTarget = e.target.parentElement.nextElementSibling.querySelector("h2").innerText;
        sessionStorage.setItem("clickTarget",e.target.parentElement.nextElementSibling.querySelector("h2").innerText)
    }
    else if(e.target.nodeName == "A") {
        clickTarget = e.target.innerText;
        sessionStorage.setItem("clickTarget",e.target.innerText)
    }
    else if(e.target.nodeName == "ARTICLE") {
        clickTarget = e.target.querySelector("h2").innerText;
        sessionStorage.setItem("clickTarget",e.target.querySelector("h2").innerText)
    }
    else  if (e.target.nodeName == "LI") {
        clickTarget = e.target.querySelector("h2").innerText;
        sessionStorage.setItem("clickTarget",e.target.querySelector("h2").innerText)
    }
    else {
        clickTarget = e.target.innerText;
        sessionStorage.setItem("clickTarget",e.target.innerText)
    }
    console.log("CLICK TARGET: " + clickTarget);
};
let clickTarget = "";
document.addEventListener("click", clickDirector);