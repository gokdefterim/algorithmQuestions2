function changeSum (arr) {
    var sum = 0;
    var arr2 = [];

    arr.forEach(element => {
        arr2.push(sum + element);
        sum = sum + element;
    });

    console.log(arr2)
}