
//Gets the name of clicked item from clickdirector.js and uses it to load the correct content for info.html.
function displayInfoPage () {
    const clickInfo = sessionStorage.getItem("clickTarget");
    document.getElementById("infoHeader").innerHTML = clickInfo;
    document.getElementById("infoTitle").innerHTML = clickInfo;
    const langList = document.getElementById("languageList");
    const s1 = document.getElementById("slide1");
    const s2 = document.getElementById("slide2");
    const s3 = document.getElementById("slide3");
    const slideClass = document.getElementsByClassName("slideImg");

    //Sets img source for slideshow and content for info paragraph on top of page
    for(i=0; i<items.length; i++) {
        if(clickInfo == items[i].name) {
            document.getElementById("infoSub").innerHTML = infoItems[i].infoSub;
            for(j=0; j<3; j++) {
                s1.querySelector("img").src = "images/" + items[i].type + "/" + items[i].href + "1.png";
                s2.querySelector("img").src = "images/" + items[i].type + "/" + items[i].href + "2.png";
                s3.querySelector("img").src = "images/" + items[i].type + "/" + items[i].href + "3.png";
                slideClass[j].alt = clickInfo;
            }
        }
    }
    
    //pushes content for language table in info.html
    for(i=0; i<infoItems.length; i++) {
        if(clickInfo == infoItems[i].name) {
            for(j=0; j<infoItems[i].language.length; j++) {
                const li = document.createElement("li");
                const p1 = document.createElement("p");
                const p2 = document.createElement("p");
                p1.innerHTML = infoItems[i].language[j];
                p1.className = "lang";
                p2.innerHTML = infoItems[i].type[j];
                p2.className = "type";
                li.appendChild(p1);
                li.appendChild(p2);
                const hr = document.createElement("hr");
                langList.append(li,hr);
            }
        }
    }

    
}