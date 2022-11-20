function getItemElements(type) {
    let itemElements = document.getElementById(type + "-list");
    items.forEach(item => {
        if (item.type === type) {
            const listItem = document.createElement("li");
            const a = document.createElement("a");
            const img = document.createElement("img");
            const article = document.createElement("article");
            const artHeader = document.createElement("h2");
            const artParagraph = document.createElement("p")
            listItem.className = "item";
            listItem.id = item.name;
            article.className = "captionText";
            a.href = "info.html";
            Object.assign(img, {
                src: "images/" + item.type + "/" + item.href + ".png",
                alt: item.name
            })
            artHeader.innerHTML = item.name;
            artParagraph.innerHTML = item.description;
            article.appendChild(artHeader);
            article.appendChild(artParagraph);
            a.appendChild(img);
            listItem.appendChild(a);
            listItem.appendChild(article);
            itemElements.appendChild(listItem);
        }
        
    });
}

function getSearchItems() {
    let searchItems = document.getElementById("searchUL");
    items.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        sessionStorage.setItem("clickTarget", item.name);
        a.href = "info.html";
        a.innerHTML = item.name;
        li.appendChild(a);
        searchItems.appendChild(li);
    });
}