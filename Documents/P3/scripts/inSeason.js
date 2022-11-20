
//finds current month and hides list elements where current month is not in season
//getMonth() method taken from https://www.freecodecamp.org/news/javascript-get-current-date-todays-date-in-js/
function pullSeasonIndex() {

    let today = new Date();
    let month = (today.getMonth()+1);
    if(month.length < 2) {
        month = "0" + month;
    }

    for(i=0; i<items.length; i++) {
        const startDate = items[i].startDate;
        const endDate = items[i].endDate;
        if (parseInt(month) <= parseInt(endDate) && parseInt(month) >= parseInt(startDate)) {
            const name = items[i].name
            document.getElementById(name).style.borderStyle = "solid";
            document.getElementById(name).style.borderRadius = "5px";
            document.getElementById(name).style.borderColor = "#56fc03";
        }
        else if (parseInt(month) > parseInt(endDate) || parseInt(month) < parseInt(startDate)) {
            const name = items[i].name
            document.getElementById(name).style.display = "none";
        }
        else if (document.getElementById(items[i].type + "-list").childNodes.length < 1) {
            console.log("lalalaalla")
        }


    }
}