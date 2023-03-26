var positive = [];
var negative = [];
var zero = [];

function maxThree (arr) {

    arr.forEach(element => {
        element > 0 && positive.push(element);
        element == 0 && zero.push(element);
        element < 0 && negative.push(element);
    });

    if (positive.length >= 3 && negative.length == 0) {
        var sorted = positive.sort((a,b) => a-b);
        return sorted.pop() * sorted.pop() * sorted.pop();
    }
    else if(positive.length >= 3 && negative.length >= 2){
        var sorted = positive.sort((a,b) => a-b);
        var sortedNeg = negative.sort((a,b) => a-b);
        if(sorted[sorted.length-1] * sorted[sorted.length-2] > sortedNeg[0] * sortedNeg[1]){
            return sorted[sorted.length-1] * sorted[sorted.length-2] * sorted[sorted.length-3];
        }else{
            return sortedNeg[0] * sortedNeg[1] * sorted[sorted.length-1];
        }
    }
    else if (positive.length == 2 && negative.length >=2 ) {
        var sortedNeg = negative.sort((a,b) => a-b);
        return sortedNeg[0] * sortedNeg[1] * Math.max(...positive);
    }
    else if (positive.length == 2 && negative.length < 2 && zero.length !== 0 ) {
        return 0;
    }
    else if (positive.length == 2 && negative.length < 2 && zero.length == 0 ) {
        var sortedNeg = negative.sort((a,b) => a-b);
        return positive[0] * positive[1] * negative[0];
    }
    else if (positive.length == 1 && negative.length >=2) {
        var sortedNeg = negative.sort((a,b) => a-b);
        return sortedNeg[0] * sortedNeg[1] * Math.max(...positive);
    }
    else if (positive.length == 1 && negative.length < 2 && zero.length !== 0){
        return 0;
    }
    else if (positive.length == 0 && negative.length < 2 && zero.length !== 0){
        return 0;
    }
    else if (positive.length == 0 && negative.length >= 2 && zero.length !== 0){
        return 0;
    }
    else if (positive.length == 0 && negative.length >= 2 && zero.length == 0){
        var sortedNeg = negative.sort((a,b) => a-b);
        return sortedNeg.pop() * sortedNeg.pop() * sortedNeg.pop();
    }
}