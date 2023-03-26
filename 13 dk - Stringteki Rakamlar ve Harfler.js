var numberSearch = (str) => {
    
    str.replace(" ","");

    var letter = str;
    var number = str;

    var sum = 0;

    letter = letter.replace(/[^a-zA-Z]/gi, "");

    number = number.replace(/[^0-9]/gi,"");
    number.split("").forEach(element => {
        sum += Number(element);
    });

    console.log(Math.round(sum / (letter.length+1)));
}