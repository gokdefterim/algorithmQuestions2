// 1. SORU
function palindrome (str){
    var str2 = str.split("").reverse().join("");
    if (str === str2){
        console.log("palindrome")
    }else{
        console.log("palindrome değil")
    }

}