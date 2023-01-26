// obiettivo: stampare in console i numeri da 1 a 100

const listEl = document.getElementById("list");

console.log("inizio ciclo");


for (let i=1; i<=100; i++) {

    if (i % 2 == 0) {
        listEl.innerHTML += `<li class="box box-pari">${i}</li>`;
}
    else {
        listEl.innerHTML += `<li class="box box-dispari">${i}</li>`;
    }

}
console.log("fine ciclo");

// al posto dei multipli di tre: "Fizz"

const i = document.getElementById("list")

if (i / 3 == 0) {
    document.write("Fizz");
}
else if (i / 5 == 0) {
    listEl.innerHTML += `<li class="box box-dispari">${i}</li>`;
}


// al posto dei multipli di cinque: "Buzz"

// per i multipli sia di 3 che di 5: "FizzBuzz"


// SUGGERIMENTO: come faccio a sapere che un numero è divisibile per un altro?
// lo so se la divisione fra i due non dà resto

