function numberSplit (n1 , n2) {
    var arr = (n1/n2).toString().split("");

    var newArr = [];

    if (arr.includes(".")) {

        var base = arr.join("").split(".")[0].split("").reverse();
        base.forEach(element => {
            if ((base.indexOf(element) + 1) % 3 !== 0){
                newArr.push(element);
            }else{
                newArr.push(","+element);
            }
        });
        
    }else{
        var base = arr.reverse();
        base.forEach(element => {
            if ((base.indexOf(element) + 1) % 3 !== 0){
                newArr.push(element);
            }else{
                newArr.push(","+element);
            }
        });
    }

    newArr[newArr.length-1] = newArr[newArr.length-1].replace(",","");

    console.log(newArr.reverse().join(""))
}