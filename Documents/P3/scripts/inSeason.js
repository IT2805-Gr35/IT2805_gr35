

// const itemList = document.getElementsByClassName("item-list");

// function listHandler() {
    
    for(i=0;i<items.length;i++) {
        const listItem = document.createElement("li");
        const a = document.createElement("a");
        const img = document.createElement("img");
        const article = document.createElement("article");
        const artHeader = document.createElement("h3");
        const artParagraph = document.createElement("p")
        listItem.className = "item";
        a.href = "info.html";
        Object.assign(img, {
            src: "Images/" + items[i].type + "/" + items[i].href + ".jpg",
            alt: items[i].name,
            height: 100,
            width: 100
        })
        artHeader.innerHTML = items[i].name;
        artParagraph.innerHTML = items[i].description;
        article.appendChild(artHeader);
        article.appendChild(artParagraph)
        a.appendChild(img);
        listItem.appendChild(a);
        listItem.appendChild(article);
        document.getElementById("berryList").appendChild(listItem);
    }
    

console.log(infoItems[0].language[1]);