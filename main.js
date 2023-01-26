// obiettivo: stampare in console i numeri da 1 a 100

for (let i=1; i<=100; i++) {

    if (
        (i % 5 == 0) &&
        (i % 3 == 0)
    ){
    
    } else if (i % 3 == 0) {
        console.log("Fizz");
    
    
    } else if (i % 5 == 0) {
        console.log("Buzz")
    
    } else {
        console.log(i);
    

}

}
console.log("fine ciclo");

// al posto dei multipli di tre: "Fizz"






// al posto dei multipli di cinque: "Buzz"

// per i multipli sia di 3 che di 5: "FizzBuzz"


// SUGGERIMENTO: come faccio a sapere che un numero è divisibile per un altro?
// lo so se la divisione fra i due non dà resto

