const items = 
[
    {name: "Apple", href: "Apple", startDate: 08, endDate: 11, description: "tbd", type: "fruit", syntax: "0"},
    {name: "Morel", href: "Morel", startDate: 07, endDate: 08, description: "tbd", type: "fruit", syntax: "1"},
    {name: "Plum", href: "Plum", startDate: 08, endDate: 09, description: "tbd", type: "fruit", syntax: "2"},
    {name: "Cherry", href: "Cherry", startDate: 08, endDate: 09, description: "tbd", type: "fruit", syntax: "3"},
    {name: "Pear", href: "Pear", startDate: 08, endDate: 10, description: "tbd", type: "fruit", syntax: "4"},
    {name: "Chanterelle", href: "Chanterelle", startDate: 06, endDate: 10, description: "tbd", type: "mushroom", syntax: "5"},
    {name: "Cep", href: "Cep", startDate: 07, endDate: 09, description: "tbd", type: "mushroom", syntax: "6"},
    {name: "Sheep Polypore", href: "Sheep_Polypore", startDate: 07, endDate: 11, description: "tbd", type: "mushroom", syntax: "7"},
    {name: "Shaggy Ink Cap", href: "Shaggy_Cap", startDate: 08, endDate: 09, description: "tbd", type: "mushroom", syntax: "8"},
    {name: "Leccinum", href: "Leccinum", startDate: 07, endDate: 11, description: "tbd", type: "mushroom", syntax: "9"},
    {name: "Strawberry", href: "Strawberry", startDate: 06, endDate: 09, description: "tbd", type: "berry", syntax: "10"},
    {name: "Raspberry", href: "Raspberry", startDate: 06, endDate: 09, description: "tbd", type: "berry", syntax: "11"},
    {name: "Blueberry", href: "Blueberry", startDate: 07, endDate: 08, description: "tbd", type: "berry", syntax: "12"},
    {name: "Blackberry", href: "Blackberry", startDate: 08, endDate: 09, description: "tbd", type: "berry", syntax: "13"},
    {name: "Cloudberry", href: "Cloudberry", startDate: 07, endDate: 09, description: "tbd", type: "berry", syntax: "14"},
];

const infoItems =
[
    {name: "Apple", language: ["Norwegian", "Latin", "English", "German", "French", "Spanish", "Chinese"], type: ["Eple", "Malus domestica", "Apple", "Apfel", "Pomme", "Manzana", "Píngguǒ"], infoSub:"Apple is a fruit known since the Stone Age and is found today in an unknown number of varieties. The apple originally comes from Asia and we know the fruit from the biblical story, where Eve tempts Adam with a fruit from the tree of knowledge."},
    {name: "Morel", language: ["Norwegian", "Latin", "English", "German", "French", "Spanish", "Chinese"], type: ["Morell", "Morel", "Morel", "Morchel", "Morille", "Colmenilla", "Yáng dǔ jūn"], infoSub:"Many of us love morels, and get a real summer vibe from them. It is the round and sweet taste that makes the morel a favourite. Norwegian morels are really good, because they have a long growing season with long, bright days!"},
    {name: "Cherry", language: ["Norwegian", "Latin", "English", "German", "French", "Spanish", "Chinese"], type: ["Kirsebær", "Prunus cerasus", "Cherries", "Kirschen", "Griottes", "Guindas", "Yīng táo"], infoSub:"Cherries are stone fruits and related to plums. Cherries are actually a term that includes two main groups: Sweet cherries, which in Norway are called morels, and sour cherries, which we call cherries here."},
    {name: "Pear", language: ["Norwegian", "Latin", "English", "German", "French", "Spanish", "Chinese"], type: ["Pærer", "Pyrus communis", "Pear", "Birne", "Poire", "Pera", "Nashi"], infoSub:"Nothing is as sweet and delicious as a soft and ripe pear! You can also use pears in many dishes, including a delicious chocolate tart with almonds."},
    {name: "Chanterelle", language: ["Norwegian", "Latin", "English", "German", "French", "Spanish", "Chinese"], type: ["Kantarell", "Cantharellus cibarius", "Chanterelle", "Pfifferling", "Girolle", "Rebozuelo", "Jidanhuang"], infoSub:"Chanterelle is a wild growing mushroom and is commonly found in woodlands with lots of moss. Chanterelle is completely yellow, both on cap and stem. The hat is smooth on the top, and the brim is unevenly wavy."},
    {name: "Cep", language: ["Norwegian", "Latin", "English", "German", "French", "Spanish", "Chinese"], type: ["Steinsopp", "Boletus edulis", "Cep", "Steinpilz", "Champignon de pierre", "Seta de piedra", "Shí mógū"], infoSub:"Cep, also called boleteus, is a fast-growing mushroom that can become very large in just a few days. It has a light to dark brown cap and a thick, stubby foot that is white or lighter brown than the cap."},
    {name: "Sheep Polypore", language: ["Norwegian", "Latin", "English", "German", "French", "Spanish", "Chinese"], type: ["Fåresopp", "Ovis fungus", "Sheep Polypore", "Schafpilz", "Champignon de brebis", "Seta de oveja", "Yáng gū"], infoSub:"Sheep polypore - or sheep mushroom as it is also called - is wild-growing and has a white, grey-white or yellowish hat that is smooth and dry and often slightly wrinkled."},
    {name: "Shaggy Ink Cap", language: ["Norwegian", "Latin", "English", "German", "French", "Spanish", "Chinese"], type: ["Matblekksopp", "Cibus atramentum fungus", "Shaggy ink cap", "Lebensmittelfarbpilz", "Champignon d'encre alimentaire", "Hongo de la tinta alimentaria", "Shíyòng mò mù'ěr"], infoSub:"A mushroom that cannot be mistaken, and a first class edible mushroom."},
    {name: "Leccinum", language: ["Norwegian", "Latin", "English", "German", "French", "Spanish", "Chinese"], type: ["Skrubbsopp", "fruticum raritate praetexitur", "Leccinum", "ApfPilze schrubbenel", "Frotter les champignons", "Champiñones exfoliantes", "Móshā mógū"], infoSub:"Leccinum is a tree-growing mushroom that forms a completely white, coral-like round mushroom that is covered in small spikes. It is firm in texture and has a taste reminiscent of fresh crab with a hint of nutmeg."},
    {name: "Strawberry", language: ["Norwegian", "Latin", "English", "German", "French", "Spanish", "Chinese"], type: ["Jordbær", "Fragum", "Strawberry", "Erdbeere", "Fraise", "Fresa", "Cǎoméi"], infoSub:"Nothing like the taste of Norwegian strawberries. It is our long and bright summer days, in combination with cool nights, that give the berries their unique taste. Yum, strawberries are lovely!"},
    {name: "Raspberry", language: ["Norwegian", "Latin", "English", "German", "French", "Spanish", "Chinese"], type: ["Bringebær", "Rubus idaeus", "Raspberry", "Himbeere", "Framboise", "Frambuesa", "Fù pénzi"], infoSub:"Raspberries are amazing. They are pink and fine, with juicy pearls. All kinds of desserts are extra good with raspberries. They both taste and look absolutely gorgeous."},
    {name: "Blueberry", language: ["Norwegian", "Latin", "English", "German", "French", "Spanish", "Chinese"], type: ["Blåbær", "Vaccinium", "Blueberry", "Blaubeere", "Myrtille", "Arándano", "Lánméi"], infoSub:"Many of us love to go on a blueberry tour! In the forest, a few blueberries always go straight into the stomach, because they are so good. But if you manage to save some in the bucket as well, then you have useful food for the winter. Lucky, because blueberries are great."},
    {name: "Blackberry", language: ["Norwegian", "Latin", "English", "German", "French", "Spanish", "Chinese"], type: ["Bjørnebær", "Rubus", "Blackberry", "Brombeere", "La mûre", "Mora", "Hēiméi"], infoSub:"Blackberries look like rather large, black raspberries. They have a juicy and sour taste, with some sweetness. It's absolutely lovely to just eat blackberries on their own, but also try them in a wonderful game sauce. It's amazing!"},
    {name: "Cloudberry", language: ["Norwegian", "Latin", "English", "German", "French", "Spanish", "Chinese"], type: ["Multer", "Nubilum", "Cloudberry", "Moltebeere", "Chicouté", "Zarzamora", "Yún méi"], infoSub:"Cloudberries thrive best in marshy areas. Many people love them and go to great lengths to find them. The berry pickers often say that they are looking for the gold of the forest, as mullets are also called. The berries are yellow-orange and golden, and taste completely unique. Both sour and sweet!"}
];