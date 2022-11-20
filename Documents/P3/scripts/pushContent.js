

function displayInfoPage () {
    document.getElementById("infoHeader").innerHTML = "placeholder";
    document.getElementById("infoSub").innerHTML = "placeholder";
    langListItems = document.getElementsByClassName("type");
    console.log();

    for(i=0; i<langListItems.length; i++) {
        langListItems[i].innerHTML = infoItems.type[items.syntax[]];
    }
}