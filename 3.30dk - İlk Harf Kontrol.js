const firstLetter = (str) => {

    var obj = {}
    var values = []
    strArr = str.toLowerCase().replace(" ", "").split("");
    strArr.forEach(element => {
        if (!obj[element]) {
            obj[element] = 1
        }
        else {
            obj[element] += 1
        }
    });

    for(let key in obj){
        values.push(obj[key]);
    }

    var biggest = values.sort((a,b) => a-b);

    for(let key in obj){
        if (obj[key] == biggest[biggest.length-1]) {
            console.log(key);
        }
    }

    console.log(obj)
}