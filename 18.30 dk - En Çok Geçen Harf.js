const firstLetter = (arr, letter) => {
    var words = [];
    arr.forEach(element => {
        element.charAt(0) == letter && words.push(element);
    });

    return words;
}