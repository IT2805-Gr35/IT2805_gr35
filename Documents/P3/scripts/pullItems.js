function getSearchElements() {
    var searchElements = [];
    var csv_file = new File(searchElements, '\resources\Items.csv');
    csv_file.open('r');
    csv_file.encoding = 'utf-8';
    console.log(csv_file.read());

    
}