const minAbs = (arr) => {
    var arr2 = arr;
    var enkucuk = [Infinity, 0];
    arr.forEach(element1 => {
        arr2.splice(arr2.indexOf(element1),1);
        arr2.forEach(element2 => {
            if (Math.abs(element1, element2) < Math.abs(...enkucuk)) {
                enkucuk = [element1, element2];
            }
        });
        arr2 = arr;
    });

    console.log(enkucuk);
}