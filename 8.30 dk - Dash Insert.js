function dashInsert (num) {
    var arr = num.toString().split("");
    var arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr[i]);
        if ( arr[i] % 2 == 0 && arr[i+1] % 2 == 0 ) {
            arr2.push("*");
        }
        else if (arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0 ) {
            arr2.push("-");
        }
    }

    arr2.pop();
    console.log((arr2.join("")))
}