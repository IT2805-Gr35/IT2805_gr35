

// // const itemList = document.getElementsByClassName("item-list");

// // function listHandler() {
    
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
    

// console.log(infoItems[0].language[1]);