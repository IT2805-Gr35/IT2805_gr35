function inject_header_footer(){
    var header = document.getElementById("header");
    var footer = document.getElementById("footer");
    var header_html = '<div class="logo_container"><a href="index.html" class="logo">CURRENT HARVEST</a></div>\
    <div class="navbar" id="navbar">\
        <ul>\
            <li>\
                <div class="search">\
                    <input type="text" id="searchInput" onkeyup="search()" placeholder="Try searching for Chanterelle!" style="background-image: url(\'images/search_icon.png\');">\
                    <ul id="searchUL"></ul>\
                </div>\
            </li>\
            <li><a href="fruit.html">Fruit</a></li>\
            <li><a href="berries.html">Berries</a></li>\
            <li><a href="mushrooms.html">Mushrooms</a></li>\
            <li><a href="about.html">About</a></li>\
            <li><a href="contact.html">Request info</a></li>\
        </ul>\
    </div>\
    <div class="hamburger" onclick="hamburger(this)">\
        <div class="bar1"></div>\
        <div class="bar2"></div>\
        <div class="bar3"></div>\
    </div>';
    var footer_html = '<a href="https://www.regjeringen.no/" target="_blank"><img src="images/facebook_cover_photo_1.png" alt="" style="width: 200px;"></a>\
    <div class="copyright">Ⓒ Norsk Natur for Turister</div>\
    <div class="social">\
        <a href="https://www.instagram.com/" target="_blank"><img src="images/Instagram_Glyph_White 1.png" alt="" style="width: 50px;"></a>\
        <a href="https://www.facebook.com/" target="_blank"><img src="images/f_logo_RGB-White_512 1.png" alt="" style="width: 50px;"></a>\
        <a href="https://www.messenger.com/" target="_blank"><img src="images/M_logo_White 1.png" alt="" style="width: 50px;"></a>\
    </div>';
    header.innerHTML = header_html;
    footer.innerHTML = footer_html;
}

