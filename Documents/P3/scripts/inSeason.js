
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
        const ulId = document.getElementById(items[i].type + "-list");
        if (parseInt(month) <= parseInt(endDate) && parseInt(month) >= parseInt(startDate)) {
            const name = items[i].name
            document.getElementById(name).style.borderStyle = "solid";
            document.getElementById(name).style.borderColor = "#56fc03";
        }
        else if (parseInt(month) > parseInt(endDate) || parseInt(month) < parseInt(startDate)) {
            const name = items[i].name
            document.getElementById(name).remove();
        }

        if (ulId.children.length >= 1) {
            ulId.style.padding = "0px";
        }
        else if (ulId.children.length < 1) {
            ulId.remove();
        }

        document.getElementById("list-container").style.paddingBottom = "60px";

    }
}