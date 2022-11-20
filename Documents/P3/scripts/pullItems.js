function getItemElements(type) {
    let itemElements = document.getElementById(type + "-list");
    items.forEach(item => {
        if (item.type === type) {
            console.log(item);
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
    console.log(searchItems);
    console.log("after");
    items.forEach(item => {
        let li = document.createElement("li");
        hrefString = "items" + "/" + item.type + "/" + item.href + ".html";
        li.innerHTML = `<a href="${hrefString}" >${item.name}</a>`;
        searchItems.appendChild(li);
    });
}