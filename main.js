// obiettivo: stampare in console i numeri da 1 a 100

const fizzbuzzContainerEl = document.getElementById("fizzbuzz-container");

for (let i = 1; i <= 100; i++) {

    let listItem;

    if (
        (i % 5 == 0) &&
        (i % 3 == 0)
    ){
    
        listItem = `<li class="box box-fizzbuzz">FizzBuzz</li>`;

    } else if (i % 3 == 0) {
        console.log("Fizz");
    
        listItem = `<li class="box box-fizz">Fizz</li>`;


    } else if (i % 5 == 0) {
        console.log("Buzz")

        listItem = `<li class="box box-buzz">Buzz</li>`;

    
    } else {
    
        
        listItem = `<li class="box">${i}</li>`;

}

    fizzbuzzContainerEl.innerHTML += listItem;

}



fizzbuzzContainerEl.innerHTML += listItem;
