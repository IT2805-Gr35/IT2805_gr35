

// // const itemList = document.getElementsByClassName("item-list");

// // function listHandler() {
    
<<<<<<< HEAD
//     items.forEach(item => {
//         const listItem = document.createElement("li");
//         const a = document.createElement("a");
//         const img = document.createElement("img");
//         const article = document.createElement("article");
//         const artHeader = document.createElement("h3");
//         const artParagraph = document.createElement("p")
//         listItem.className = "item";
//         a.href = item.href + ".html";
//         Object.assign(img, {
//             src: "images/" + item.type + "/" + item.href + ".png",
//             alt: item.name,
//             height: 100,
//             width: 100
//         })
//         artHeader.innerHTML = item.name;
//         artParagraph.innerHTML = item.description;
//         article.appendChild(artHeader);
//         article.appendChild(artParagraph)
//         a.appendChild(img);
//         listItem.appendChild(a);
//         listItem.appendChild(article);
//         document.getElementById("berry-list").appendChild(listItem);
//     });
=======
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
>>>>>>> 96b6ea35391946e6ccca028758d4832b94525794
    

// console.log(infoItems[0].language[1]);