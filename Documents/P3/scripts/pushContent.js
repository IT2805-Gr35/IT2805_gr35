

function displayInfoPage () {
    document.getElementById("infoHeader").innerHTML = "placeholder";
    document.getElementById("infoSub").innerHTML = "placeholder";
    langListItems = document.getElementById("languageList").querySelectorAll("li");

    for(i=0; i<infoItems; i++) {
        langListItems[i].innerHTML = infoItems.language[i];
    }
}