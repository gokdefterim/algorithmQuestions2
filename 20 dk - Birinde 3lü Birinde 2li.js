var threeTwo = (n1, n2) => {
    n1 = n1.toString().split("");
    n2 = n2.toString();
    var threes = [];

    for (let i = 0; i < n1.length; i++) {
        if ( n1[i] == n1[i+1] && n1[i] == n1[i+2] ) threes.push(n1[i]);        
    }

    threes.forEach(element => {
        if ( n2.search(element.repeat(2)) !== -1 ) console.log(1);
    });
}   