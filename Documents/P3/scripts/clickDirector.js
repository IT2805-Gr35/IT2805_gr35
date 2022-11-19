

window.onclick = e => {
    for(i=0; i<items.length; i++) {
        if (e.target.parentElement.nodeName == "ARTICLE") {
            console.log(e.target.previousElementSibling.innerText)
        };
    }
    console.log(e.target.parentElement.nodeName)
    console.log(e.target.querySelector("h3").innerText);
}