//kaava pituus ja paino
// alipaino <+ 18.5
// normali 25

function laskeebmi (paino, pituus) {
    const bmi = paino/ (pituus * pituus);
    return bmi;
}

let paino = 100;
let pituus = 1.75;
let bmi = laskeebmi (paino, pituus);
let arvio = arviobmi (bmi)
console.log (bmi);

function arviobmi (bmi){
if (bmi<= 18.5) {
    return "alipaino";
 } else if (bmi <25){
    return "normaali";
 } else {
    return "ylipaino"
 }

}
function selvitäraja (pituus){
    let alipainoraja = 0
    let ylipainoraja = 0
for let (paino = 0; paino = 200; paino++) {
    
    
}

}