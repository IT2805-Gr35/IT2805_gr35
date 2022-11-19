function getItemElements(type) {
    let itemElements = document.getElementById(type + "-list");
    items.forEach(item => {
        if (item.type === type) {
            let li = document.createElement("li");
            hrefString = "items" + "/" + item.type + "/" + item.href + ".html";
            imgString = "images/" + item.type + "/" + item.href + ".png";
            li.innerHTML = `<a href="${hrefString}" >${item.name}<img src="${imgString}" width="100" height="100"></a>`;
            itemElements.appendChild(li);
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