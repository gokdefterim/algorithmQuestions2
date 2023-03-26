function numberSplit (num) {
    var temp = num.toString().split("").reverse();
    var clone;
    var first; 
    var last;

    for (let i = 0; i < temp.length; i++) {
        if (temp[i]>temp[i+1]){
            clone = temp[i];
            temp[i] = temp [i+1];
            temp[i+1] = clone;

            first = temp.slice(i+1);
            last = temp.slice(0,i+1);

            console.log(Number(first.reverse().concat(last).join("")));

            break
        }
    }
}