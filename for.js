console.log ("hello");


for (let i = 0; i <= 40; i +=2) {
    if (i % 5 === 0) {
    console.log(i);}
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " on parillinen");
    } else {
        console.log(i + " on pariton");
    }
}

for (let kerros = 1; kerros <= 10; kerros++) {
    if (kerros === 5) {
        console.log("Kerros 5: Ravintolakerros!");
    } else {
        console.log(kerros);
    }
}

let askeleetYhteensa = 0;

for (let lenkki = 1; lenkki <= 5; lenkki++) {
    askeleetYhteensa += 2500;

    console.log("Lenkki " + lenkki + ": " + askeleetYhteensa + " askelta");

    if (askeleetYhteensa >= 10000) {
        console.log("Päivän tavoite täynnä!");
    }
}
for (let i = 1; i <= 20; i ++){
    if (i % 5 ===0) {
        console.log ("buzz!"); 
    }
        else {
        console.log (i);
    }
} 

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

let numero = 7;

for (let i = 1; i <= 10; i++) {
    let tulos = i * numero;

    if (tulos > 40) {
        console.log(numero + " x " + i + " = " + tulos + " (Suuri luku!)");
    } else {
        console.log(numero + " x " + i + " = " + tulos);
    }
}

let parillistenSumma = 0;
let parittomienSumma = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        parillistenSumma += i;
    } else {
        parittomienSumma += i;
    }
}

console.log("Parillisten summa: " + parillistenSumma);
console.log("Parittomien summa: " + parittomienSumma);

if (parillistenSumma > parittomienSumma) {
    console.log("Parillisten summa on suurempi!");
} else if (parittomienSumma > parillistenSumma) {
    console.log("Parittomien summa on suurempi!");
} else {
    console.log("Summat ovat yhtä suuret!");
}

let rivi = "";

for (let i = 1; i <= 8; i++) {
    if (i % 2 === 0) {
        rivi += "# ";
    } else {
        rivi += "O ";
    }
}

console.log(rivi);


let kalorit = 0;

for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0) {
        console.log("Kerros " + i + ": Tauko!");
    } else {
        kalorit += 10;
        console.log("Kerros " + i + ": Kulutettu " + kalorit + " kaloria");
    }
}

let yhteensaNetto = 0;

for (let i = 1; i <= 10; i++) {
    let myynti = i * 25;
    let netto;

    if (myynti > 100) {
        netto = myynti * 0.8;
    } else {
        netto = myynti * 0.9;
    }

    yhteensaNetto += netto;
}

console.log("10 päivän nettokertymä: " + yhteensaNetto + " euroa");


let summa = 0;

for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        summa += i;
    }
}

console.log("Summa on: " + summa);



for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

