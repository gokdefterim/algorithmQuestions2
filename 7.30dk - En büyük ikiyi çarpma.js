// En büyük iki sayıyı çarpan fonksiyon

const biggestNumbers = (arr) => {
    let sorted = arr.sort((a,b) => a-b);
    return sorted.pop()*sorted.pop()
}